# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

Node >= 22.12.0 is required.

## Architecture

This is a single-page **Astro** static site for the TVZ CareerDay 2026 event (27 May 2026, Dvorana Kornati, Zagreb). It deploys to `https://careerday.tvz.hr` via Vercel.

**Single page layout** — `src/pages/index.astro` composes all sections in order:
Hero → Countdown → About → Info → WhatToExpect → Stats → Transport → BusSchedule → CareerTalks → YourDestiny → Departments → Gallery → JobOpportunity → Partners → Footer

All sections are individually toggled via feature flags in `src/data/config.ts`.

**Pages** — `src/pages/schedule.astro` is a separate route (`/schedule`) for the CareerTalks talk schedule with table/cards views and department filtering. `src/pages/bus-tracking.astro` is a separate route (`/bus-tracking`) for the live GPS bus tracker — see **Bus Tracking** section below.

**Layout** — `src/layouts/BaseLayout.astro` wraps every page, injects global CSS, SEO/OG meta tags, JSON-LD Event schema, Google Fonts (Montserrat, Manrope, Inter), Vercel Analytics, and four vanilla JS scripts loaded via `is:inline`.

**Styles** — Three global CSS files, no CSS framework:

- `src/styles/style.css` — CSS custom properties (design tokens), base reset, component styles
- `src/styles/animations.css` — keyframes and scroll-reveal animation classes
- `src/styles/media-query.css` — responsive breakpoints overriding the CSS variables

Key CSS variables defined in `:root`: `--primary-yellow: #EAC31B`, `--black: #0F0B0C`, `--padding-side-main`, `--padding-top-bottom`. Responsive layout is achieved by overriding these variables at breakpoints rather than duplicating rules.

**JavaScript** — All JS lives in `public/javascript/` as plain scripts loaded inline (not bundled by Astro):

- `count-down-timer.js` — counts down to `2026-05-27T11:00:00`
- `scroll.js` — scroll-reveal logic for `.reveal` class elements
- `carret-talks-overlay.js` — overlay behavior for CareerTalks section
- `schedule.js` — schedule display (currently unused/commented out)

**Images** — `src/assets/images/` holds SVGs and PNGs imported into components using Astro's `<Image>` component for optimisation. Background images (PNGs) live in `public/assets/bg-images/` and are referenced directly in CSS.

**Integrations** — `@astrojs/sitemap` auto-generates a sitemap at build time. `@vercel/analytics` is injected in the layout.

## Content notes

- Site language is Croatian (`<html lang="hr">`); all visible copy is in Croatian
- Event date is hardcoded in multiple places: `count-down-timer.js`, `BaseLayout.astro` JSON-LD, and component markup — update all when the date changes
- The Luma registration link (`https://luma.com/cd26`) appears in `Hero.astro` and `Footer.astro`
- Partner logos are individual SVGs in `src/assets/images/partners/`

## Bus Tracking

`/bus-tracking` is a live GPS tracker page for the two free shuttle buses running on event day (27 May 2026, 10:00–17:00). Linked from the `BusSchedule` component via "Lokacija busa" CTA.

**Two bus lines:**

| Line | Route | Color |
|---|---|---|
| Linija 1 | TVZ ELO ODJEL (Konavoska ulica 2) ↔ Stanica Vrbik ↔ TVZ GRO ODJEL (Avenija Večeslava Holjevca 15) | `#EAC31B` (yellow) |
| Linija 2 | Kampus Borongaj (Borongajska cesta 83E) ↔ Stanica Vrbik (Josipa Marohnića 1) ↔ TVZ ELO ODJEL (Konavoska ulica 2) | `#4A9EE0` (blue) |

**Tech decisions:**
- Map: Leaflet.js + CartoDB Dark Matter tiles (dark theme, no API key)
- GPS backend: Traccar Cloud (7-day trial, 2 devices: `bus001`, `bus002`)
- Credentials: Astro env vars — `PUBLIC_TRACCAR_URL`, `PUBLIC_TRACCAR_TOKEN`, `PUBLIC_TRACCAR_DEVICE_ID_1`, `PUBLIC_TRACCAR_DEVICE_ID_2` (set in Vercel dashboard, gitignored locally)
- Polling interval: 10 seconds
- Fallback: map always renders with stop markers and route polylines visible; status bar shows neutral message when no GPS signal

**Naming convention:** "Bus Tracking" = live GPS page (`/bus-tracking`). "Bus Schedule" = static timetable component (`BusSchedule.astro`) on the homepage. These are distinct — do not conflate them.

## Agent skills

### Issue tracker

Issues live in GitHub Issues (`github.com/dev-alumni-tvz/career-day-tvz`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary (needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — one `CONTEXT.md` + `docs/adr/` at the root. See `docs/agents/domain.md`.
