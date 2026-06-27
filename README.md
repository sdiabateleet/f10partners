# F10 Consulting — Landing page

Bilingual (FR/EN) marketing landing page for **F10 Consulting (by DIS PARTNERS)**, a
study-abroad university-placement agency in Abidjan, Côte d'Ivoire. Built with Next.js
(App Router, TypeScript). Ported from a Claude Design HTML prototype.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (typecheck + lint)
pnpm start      # serve the production build
```

## Structure

- `app/layout.tsx` — fonts (Sora + Plus Jakarta Sans), SEO metadata, JSON-LD (`EducationalOrganization` + `FAQPage`).
- `app/globals.css` — reset, keyframes, responsive nav rules, hover/focus states.
- `components/LandingPage.tsx` — client root: language toggle (persists to `localStorage`), mobile menu.
- `components/sections/*` — one component per page section.
- `lib/content.ts` — all copy and lists, FR + EN, in one place (`getContent(lang)`).
- `public/assets/` — director / team / event photos + brand logo.
- `public/partners/` — partner logos (see below).

## Language

The toggle is client-side and instant; the choice is saved to `localStorage('f10_lang')`
(default `fr`). All copy lives in `lib/content.ts`.

## Contact

The contact form and every WhatsApp CTA open a `wa.me` deep link (number `2250702028189`);
the form pre-fills a message. There is no server-side form backend by design.

## Partner logos — action needed

The Partners section renders real logo images when present, and falls back to a styled
icon card when a file is missing. Drop the following files into `public/partners/`
(PNG with transparent background recommended):

| File | Partner |
|---|---|
| `institut-francais.png` | Institut Français |
| `ensea.png` | ENSEA |
| `campus-france.png` | Campus France |
| `groupe-33.png` | Groupe 33 |
| `galileo.png` | Groupe Galileo France |

"École Val d'Or" intentionally has no logo and uses the icon fallback.

## Destination flags

Country flags load from the free [flagcdn.com](https://flagcdn.com) CDN by ISO code — no
local assets needed.
