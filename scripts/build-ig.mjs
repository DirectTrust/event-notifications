// Converts the source Word document into the VitePress site under docs/.
// Usage: node scripts/build-ig.mjs [path/to/source.docx]   (requires pandoc on the PATH)
//
// Layout: front matter -> "About this Guide"; each top-level (H1) chapter -> a folder whose
// index.md is the chapter intro, with one page per H2 section (N.k). Generated folders are
// overwritten on each run; edit the docx (or this script), not the generated .md.
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS = path.join(ROOT, 'docs')
const SCRATCH = path.join(ROOT, 'scratchpad', 'pandoc')
const DEFAULT_SRC = '~/Downloads/CURRENT - Event Notifications via the Direct Standard Version 1.2 - approved 03252025.docx'
const SOURCE = (process.argv[2] || DEFAULT_SRC).replace(/^~/, os.homedir())
const BASE = '/event-notifications'

// Chapter folder + sidebar title per source H1 (chapter numbers follow the source TOC).
const CHAPTERS = {
  'Overview': { folder: '01-overview', title: 'Overview' },
  'Scope': { folder: '02-scope', title: 'Scope' },
  'Use Cases': { folder: '03-use-cases', title: 'Use Cases' },
  'Messaging Requirements': { folder: '04-messaging-requirements', title: 'Messaging Requirements' },
  'Value Set Appendix/Examples': { folder: '05-value-sets-and-examples', title: 'Value Sets and Examples' }
}
// Unheaded front-matter paragraphs that act as headings, grouped into pages.
const ABOUT_PAGES = [
  { title: 'Legal Notices', from: 'Disclaimer', heads: ['Disclaimer', 'Licenses and Intellectual Property', 'Third-party References', 'Requirements', 'More information'] },
  { title: 'Consensus Body and Document Control', from: 'Consensus Body Description', heads: ['Consensus Body Description', 'Document Control', 'Authors and contributors'] },
  { title: 'Change Log', from: 'Document Version and Change Log', heads: ['Document Version and Change Log', 'Version 1.0: Issue and Comment Resolution', 'Version 1.1: Issue and Comment Resolution'] }
]

const slugify = (s) => s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
const ghSlug = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s/g, '-')
const yamlStr = (s) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`

function fixBrokenHeaderTables(md) {
  return md.replace(/<thead>([\s\S]*?)<\/thead>\s*<tbody>\s*<\/tbody>/g, (m, head) => {
    const rows = head.match(/<tr>[\s\S]*?<\/tr>/g) || []
    if (rows.length <= 1) return m
    const [h, ...rest] = rows
    const body = rest.map((r) => r.replace(/<th(\s[^>]*)?>/g, '<td$1>').replace(/<\/th>/g, '</td>')).join('\n')
    return `<thead>\n${h}\n</thead>\n<tbody>\n${body}\n</tbody>`
  })
}
const clean = (md) =>
  md.replace(/<span class="(?:mark|smallcaps)">([\s\S]*?)<\/span>/g, '$1').replace(/<mark>([\s\S]*?)<\/mark>/g, '$1')
    .replace(/<u>([\s\S]*?)<\/u>/g, '$1').replace(/^\\$/gm, '').replace(/^#{1,6}\s*$/gm, '').replace(/\n{3,}/g, '\n\n')

function shiftHeadings(lines, delta) {
  let fence = false
  return lines.map((l) => {
    if (/^```/.test(l)) fence = !fence
    const m = !fence && l.match(/^(#{1,6})\s+(.*)$/)
    return m ? `${'#'.repeat(Math.min(6, Math.max(1, m[1].length + delta)))} ${m[2]}` : l
  })
}
function splitAt(lines, level) {
  const marker = '#'.repeat(level) + ' '
  const parts = [{ heading: null, lines: [] }]
  let fence = false
  for (const l of lines) {
    if (/^```/.test(l)) fence = !fence
    if (!fence && l.startsWith(marker)) parts.push({ heading: l.slice(marker.length).trim(), lines: [l] })
    else parts[parts.length - 1].lines.push(l)
  }
  return parts
}

// ---- convert
fs.rmSync(SCRATCH, { recursive: true, force: true })
fs.mkdirSync(SCRATCH, { recursive: true })
execFileSync('pandoc', [SOURCE, '-f', 'docx', '-t', 'gfm', '--wrap=none', '--extract-media=.', '-o', 'doc.md'], { cwd: SCRATCH })
let all = fs.readFileSync(path.join(SCRATCH, 'doc.md'), 'utf8').split('\n')

// front matter = everything before the table of contents; TOC = up to the first H1
const tocAt = all.findIndex((l) => l.trim() === 'Table of Contents')
const firstH1 = all.findIndex((l) => l.startsWith('# '))
if (tocAt < 0 || firstH1 < 0) throw new Error('Could not find Table of Contents / first chapter')
const front = all.slice(0, tocAt)
const body = all.slice(firstH1)

// ---- plan pages
const pages = [] // { dir, file, title, lines }
const sidebar = []
const anchors = new Map() // github slug -> { link, anchor }

// About this guide
{
  const dir = '00-about-this-document'
  const isHead = new Set(ABOUT_PAGES.flatMap((p) => p.heads))
  const promoted = front.map((l) => (isHead.has(l.trim()) ? `## ${l.trim()}` : l))
  const firstPageStart = promoted.findIndex((l, i) => l === '## Disclaimer')
  const intro = promoted.slice(0, firstPageStart)
  const items = []
  ABOUT_PAGES.forEach((p, i) => {
    const start = promoted.findIndex((l) => l === `## ${p.from}`)
    const next = ABOUT_PAGES[i + 1] ? promoted.findIndex((l) => l === `## ${ABOUT_PAGES[i + 1].from}`) : promoted.length
    const num = `0.${i + 1}`
    const file = `0-${i + 1}-${slugify(p.title)}`
    pages.push({ dir, file, title: `${num} ${p.title}`, lines: [`# ${num} ${p.title}`, '', ...promoted.slice(start, next)] })
    items.push({ text: `${num} ${p.title}`, link: `/${dir}/${file}` })
  })
  const listing = items.map((it) => `- [${it.text}](${it.link})`).join('\n')
  pages.push({
    dir, file: 'index', title: 'About this Guide',
    lines: ['# About this Guide', '', ...intro, '', '## In this section', '', listing]
  })
  sidebar.push({ text: 'About this Guide', link: `/${dir}/`, collapsed: true, items })
}

// Chapters
const chapters = splitAt(body, 1).filter((c) => c.heading)
chapters.forEach((ch, ci) => {
  const cfg = CHAPTERS[ch.heading]
  if (!cfg) throw new Error(`No layout entry for chapter "${ch.heading}"`)
  const n = ci + 1
  const [intro, ...sections] = splitAt(ch.lines.slice(1), 2)
  const items = []
  sections.forEach((s, si) => {
    const num = `${n}.${si + 1}`
    const file = `${n}-${si + 1}-${slugify(s.heading)}`
    const lines = [`# ${num} ${s.heading}`, '', ...shiftHeadings(s.lines.slice(1), -1)]
    pages.push({ dir: cfg.folder, file, title: `${num} ${s.heading}`, lines })
    items.push({ text: `${num} ${s.heading}`, link: `/${cfg.folder}/${file}` })
  })
  const listing = items.map((it) => `- [${it.text}](${it.link})`).join('\n')
  pages.push({
    dir: cfg.folder, file: 'index', title: `${n} ${cfg.title}`,
    lines: [`# ${n} ${cfg.title}`, '', ...intro.lines, ...(items.length ? ['', '## In this chapter', '', listing] : [])]
  })
  sidebar.push({ text: `${n} ${cfg.title}`, link: `/${cfg.folder}/`, collapsed: true, ...(items.length ? { items } : {}) })
})

// ---- anchor map for cross-page links (headings in original order)
{
  const slugTo = new Map()
  const seenSlugs = new Map()
  const reg = (heading, link) => {
    const base = ghSlug(heading.replace(/\\/g, ''))
    const k = seenSlugs.get(base) || 0
    seenSlugs.set(base, k + 1)
    slugTo.set(k ? `${base}-${k}` : base, { link, anchor: base })
  }
  // register headings per page in source order (matches pandoc's document order)
  for (const p of pages) for (const l of p.lines) {
    const m = l.match(/^#{1,6}\s+(.*)$/)
    if (m) reg(m[1].replace(/^\d+(\.\d+)*\s+/, ''), `/${p.dir}/${p.file === 'index' ? '' : p.file}`)
  }
  anchors.clear()
  for (const [k, v] of slugTo) anchors.set(k, v)
}

// ---- write
for (const s of new Set(pages.map((p) => p.dir))) {
  for (const sub of ['', 'public/images/']) fs.rmSync(path.join(DOCS, sub, s), { recursive: true, force: true })
}
for (const p of pages) {
  let md = fixBrokenHeaderTables(clean(p.lines.join('\n')))
  // in-document links like [text](#anchor): rewrite to the page that now holds the heading; drop if unknown
  md = md.replace(/\]\(#([^)]+)\)/g, (m, id) => {
    const t = anchors.get(id)
    return t ? `](${t.link}${t.anchor ? `#${t.anchor}` : ''})` : '](#)'
  }).replace(/\[([^\]]+)\]\(#\)/g, '$1')
  let n = 0
  md = md.replace(/<img\s+src="\.\/(media\/[^"]+)"([^>]*?)\/?>/g, (_, rel, attrs) => {
    const alt = (attrs.match(/alt="([^"]*)"/) || [, ''])[1]
    const ext = path.extname(rel).toLowerCase().replace('.jpeg', '.jpg')
    const destDir = path.join(DOCS, 'public', 'images', p.dir)
    fs.mkdirSync(destDir, { recursive: true })
    let name = `${p.file}-${++n}${ext}`
    fs.copyFileSync(path.join(SCRATCH, rel), path.join(destDir, name))
    if (ext === '.emf') {
      // Browsers cannot render EMF; convert to PNG with LibreOffice (macOS app path or `soffice` on PATH).
      const soffice = ['/Applications/LibreOffice.app/Contents/MacOS/soffice', 'soffice'].find((c) => c === 'soffice' || fs.existsSync(c))
      try {
        execFileSync(soffice, ['--headless', '--convert-to', 'png', '--outdir', destDir, path.join(destDir, name)], { stdio: 'ignore' })
        fs.rmSync(path.join(destDir, name))
        name = name.replace(/\.emf$/, '.png')
      } catch {
        console.warn(`WARNING: could not convert ${name} to PNG; image will not display`)
      }
    }
    return `![${alt}](/images/${p.dir}/${name})`
  })
  const outDir = path.join(DOCS, p.dir)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, `${p.file}.md`), `---\ntitle: ${yamlStr(p.title)}\n---\n\n${md.trim()}\n`)
}
fs.writeFileSync(path.join(DOCS, '.vitepress', 'ig-sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n')
console.log(`Wrote ${pages.length} pages and docs/.vitepress/ig-sidebar.json`)
