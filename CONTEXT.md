# CONTEXT.md

Domain glossary for TVZ CareerDay — a yearly single-day career fair event hosted by Tehničko veleučilište u Zagrebu (TVZ).

## Terms

### Event Config
The set of values that change every year and are shared across the site: event date, registration link, event name, venue, social link URLs, and canonical site URL. Lives in `src/data/config.ts`. Updated once per year at the start of each edition's setup.

### Partner
A company participating in the career fair. Has a name, logo (SVG filename), website URL, and a tier. Logos live in `src/assets/images/partners/`. Managed in `src/data/partners.ts`.

### Partner Tier
One of four values that determines how a partner is displayed:
- `platinum` — large logo, displayed prominently above the grid
- `grid` — standard logo in the partner grid
- `strategic` — displayed in the bottom section as "Strateški partner"
- `patron` — displayed in the bottom section as "Pod pokroviteljstvom"

### Gallery Archive
A record of a past CareerDay edition, consisting of a year and a Pixieset gallery URL. One entry is added per year after the event. Managed in `src/data/gallery.ts`.

### Registration Link
The Luma event URL used for attendee sign-up. Part of Event Config. Appears in the Hero CTA, JobOpportunity section, Nav, and Footer — all sourced from `src/data/config.ts`.
