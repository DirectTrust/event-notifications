# event-notifications

Implementation Guide for **Event Notifications via the Direct Standard®** (ANSI/DS2020-03-101-2025, v1.2), an implementation compliant with the DirectTrust Framework for Metadata and Payloads (see the [metadata-and-payloads-guide](https://assets.directtrust.org/metadata-and-payloads-guide/)). Published as a [VitePress](https://vitepress.dev) site at `https://assets.directtrust.org/event-notifications/` via GitHub Pages. Layout follows [cc-maternal-health-birth](https://github.com/DirectTrust/cc-maternal-health-birth).

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

## Hosting and versions

Pages is deployed from GitHub Actions (**Settings → Pages → Source → GitHub Actions**). `.github/workflows/deploy.yml` runs on every push to `main` or `develop`, and when a release is published. It runs `scripts/build-site.sh`, which builds every version into one site:

| URL | Source | Purpose |
|---|---|---|
| `/event-notifications/` | `main` | Current published version |
| `/event-notifications/develop/` | `develop` | Draft preview of the next version (DRAFT banner, `noindex`) |
| `/event-notifications/<tag>/` | every git tag | Archived versions |

The **Version History** page (last entry in the left navigation) is generated at build time by `scripts/generate-history.mjs`; release descriptions come from the GitHub release notes for each tag.

## Branching (GitOps)

Work on `develop`; `main` is protected and requires a pull request with one approval (stale approvals are dismissed, the last pusher cannot approve their own push, admins included). To release: merge `develop` into `main` through a PR, then tag and publish a GitHub release named for the version.
