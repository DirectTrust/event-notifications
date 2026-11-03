# event-notifications

Implementation Guide for **Event Notifications via the Direct Standard®** (ANSI/DS2020-03-101-2025, v1.2), an implementation compliant with the DirectTrust Framework for Metadata and Payloads (see the [metadata-and-payloads-guide](https://directtrust.github.io/metadata-and-payloads-guide/)). Published as a [VitePress](https://vitepress.dev) site at `https://directtrust.github.io/event-notifications/` via GitHub Pages. Layout follows [cc-maternal-health-birth](https://github.com/DirectTrust/cc-maternal-health-birth).

The site is configured with `base: '/event-notifications/'` in `docs/.vitepress/config.mts` — if the repo is renamed, update that value (and the absolute links in `docs/index.md`).

## Where the files live

```
docs/
├── .vitepress/config.mts, theme/, ig-sidebar.json (generated)
├── public/                      ← logo and images extracted from the Word document
├── index.md                     ← home page (hand-maintained)
├── 00-about-this-document/      ← front matter: legal notices, consensus body, change log
├── 01-overview/ … 05-value-sets-and-examples/   ← one folder per chapter, one page per N.k section
scripts/build-ig.mjs             ← Word → Markdown conversion (needs pandoc)
.github/workflows/deploy.yml     ← builds + publishes on every push to main
```

## Regenerating content from the Word document

```
node scripts/build-ig.mjs "<path to the .docx>"    # requires pandoc
```

Generated chapter folders are overwritten on each run. Either edit the docx and regenerate, or stop using the script and edit the Markdown directly.

## Working locally

```
npm install
npm run docs:dev       # live-reloading dev server
npm run docs:build     # static build to docs/.vitepress/dist/
npm run docs:preview   # serve the production build
```

## Hosting

Set **Settings → Pages → Build and deployment → Source → GitHub Actions**. `.github/workflows/deploy.yml` builds and deploys on every push to `main` (and via manual dispatch).
