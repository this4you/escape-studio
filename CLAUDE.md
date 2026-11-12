# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

One-page landing site for **ESCAPE — студія руху**, a women's/kids' fitness & dance studio in Пуща-Водиця (Kyiv). It is a rebrand of `Alex Studio` (Instagram `@alex__studio__`, Telegram `@alexstudio2023`). All site copy is Ukrainian. References in `docs/`: two mockups (`design-1.jpg`, `design-2.jpg`), logo raster (`логотип.jpg`), customer notes (brand palette: graphite 60% / pink 25% / pastel yellow 15%; no real photos yet — a photoshoot is planned).

Main business goal is local SEO and promotion, so treat semantic HTML, meta tags and structured data as first-class requirements, not polish.

## Commands

- `npm run dev` — dev server at `http://localhost:4321/escape-studio/`
- `npm run build` — `astro check` (type-check) + static build to `dist/`. This is the only verification step; there are no tests.
- `npm run preview` — serve the built `dist/`

## Architecture

Astro 7, static output, no client-side JS except the tiny inline demo font switcher. No UI framework, no CSS framework.

- **Content is data-driven.** Edit `src/data/` rather than markup:
  - `studio.ts` — business info (name, contacts, address, booking URL, socials, SEO title/description). Single source of truth used by the page, `<head>` meta and JSON-LD.
  - `content.ts` — directions, schedule, trainers (optional `bio`, up to ~300 characters, rendered as an expandable `<details>` on the card), prices, about-features.
- `src/layouts/Base.astro` — `<head>`: meta, canonical, Open Graph/Twitter, fonts, and `SportsActivityLocation` JSON-LD built from the data files. Changing studio data automatically updates structured data.
- `src/components/` — one component per page section, composed in `src/pages/index.astro`. Styles are component-scoped; design tokens (colors, fonts, radius) and shared classes (`.container`, `.section`, `.section-title`, `.btn`, `.photo`, `.visually-hidden`) live in `src/styles/global.css`.
- `Logo.astro` — ESCAPE wordmark redrawn as stroked SVG paths (no vector source exists); also reused in `public/favicon.svg` and the OG image.
- `Icon.astro` — inline SVG icon set; add a path to its `paths` map to add an icon (`IconName` type follows automatically).
- `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts` — generated endpoints (no sitemap integration needed for one page).
- `public/og.png` — 1200×630 social preview image, rendered once from an SVG; regenerate if branding changes.

## Design & demo font switch

The client chose the `neon` design (design-1): `<html data-theme="neon">` is hardcoded in `Base.astro` and `themes` in `src/data/photos.ts` lists only `neon`. The `graphite` (design-2) rules on `:root` in `global.css`, the `:root:not([data-theme='neon'])` selectors and `src/assets/photos/graphite/` are leftovers to delete in a cleanup.

The font pair is still undecided: a bar at the top (`DemoSwitcher.astro`, options in `src/data/demo.ts`) switches `<html data-font>`. Font pairs (display + body, all with Cyrillic) are defined only in `demo.ts`: it builds the single Google Fonts URL and the `:root[data-font=…]` overrides of `--font-display` / `--font-body`; the default pair is the `:root` value in `global.css`. The font is chosen before first paint by an inline script in `Base.astro` (`?font=<id>` query → `localStorage` → default). Once the client decides, delete the switcher, `demo.ts`, the head script and unused font rules.

Schedule day tabs are CSS-only radio groups (`.tabs` / `.tablist` / `.tabpanels` in `global.css`, uses `:has()`); in `neon` the tab list is hidden and all panels are stacked with their `.tabpanel__label` headings visible.

Motion is CSS-only (`reveal` keyframes in `global.css`): hero fade-in plus scroll-driven section reveal behind `@supports (animation-timeline: view())` and `prefers-reduced-motion`.

## Conventions & gotchas

- **Base path.** Site is deployed as a GitHub Pages project site under `/escape-studio/` (`astro.config.mjs`: `site` + `base`). Always build internal URLs from `import.meta.env.BASE_URL`, never hardcode `/`. When a custom domain is connected: set `site` to it, remove `base`, add `public/CNAME`. Until then `robots.txt` is not at the domain root, so it has no effect for crawlers.
- **Photos are per theme.** `Photo.astro` takes a slot `name` and renders `src/assets/photos/<theme>/<name>.*` for every theme that has it (via `import.meta.glob` in `src/data/photos.ts`); CSS shows only the current theme's image, otherwise the `.photo` gradient placeholder. Slot names: `hero`, `schedule`, `about`, `cta`, plus `photo` fields in `content.ts` (directions, trainers). To replace a photo, drop a file with the same name — no code changes. Images go through `astro:assets` (WebP). Trainer photos, `kids-dance` and `teen-dance` are real shots (resized to 900px wide from the client's originals, which are not committed); the rest are AI mockup images cut from `docs/design-*-images.png` (low-res) — replace with real photoshoot shots.
- Exactly one `<h1>` (in `Hero.astro`); every section has an `id` (used by header nav) and `aria-labelledby` pointing to its heading.
- Ukrainian grammar in templates: locality has a locative form `studio.address.localityIn` («у Пущі-Водиці») — use it after «у/в».
- All «Онлайн запис» CTAs link to `studio.bookingUrl` (Hopitude booking calendar).
- Map (`Location.astro`): keyless Google Maps `<iframe>` (`studio.mapEmbedUrl`) + «Дивитись на карті» link (`studio.mapUrl`); `studio.geo` feeds JSON-LD. The client will rename the Maps listing, Instagram and Telegram — update `studio.ts` then.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` (`withastro/action` + `actions/deploy-pages`) → https://this4you.github.io/escape-studio/

Repo: `git@github-personal:this4you/escape-studio.git` (personal account; local git identity `this4you`).
