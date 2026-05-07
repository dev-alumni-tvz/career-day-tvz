# ADR-0001: TypeScript data files over a CMS

## Status
Accepted

## Context
TVZ CareerDay is a yearly event site updated exclusively by developers. Content changes fall into two patterns: annual resets (event date, registration link, venue) and in-season updates (adding/removing partner companies). No non-technical editors need access. The update loop is: edit file → git push → Vercel rebuilds (~30s).

## Decision
Manage all site content in typed TypeScript files under `src/data/`:
- `config.ts` — Event Config (date, registration link, social URLs, venue)
- `partners.ts` — Partner array with tier field
- `gallery.ts` — Gallery Archive entries (year + Pixieset URL)
- `departments.ts` — department list

Partner logos are resolved at build time via `import.meta.glob` in `Partners.astro`, keyed by filename stored in the data file.

Stats (company count, industry count, attendee count) are kept inline in `Stats.astro` — they are a design concern tied to the visual layout, not managed data.

## Alternatives considered
- **Headless CMS (Contentful, Sanity)**: Adds infrastructure, auth, and API dependencies for no benefit when all editors have git access. Introduces a runtime data-fetch step into an otherwise fully static build.
- **Environment variables**: Appropriate for secrets; not appropriate for structured content like a partner list.
- **Google Sheets pipeline**: Useful when non-developers need to edit. Ruled out because all updates are developer-driven.

## Consequences
- Adding a partner next year = one line in `src/data/partners.ts` + one SVG in `src/assets/images/partners/`
- Updating Event Config for a new year = editing `src/data/config.ts` only
- If a non-developer ever needs to manage content, migrating to a CMS would require extracting the data files into a CMS schema — meaningful but straightforward work
