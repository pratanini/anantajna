# Anantajna — anantajna.com

Freelance **Cloud · DevOps · Platform Engineering** consulting site for Santosh Hegde.
Static site built with **Astro + Tailwind CSS v4**, tested with **Playwright**, and deployed to
**Cloudflare Pages** via a gated **GitHub Actions** pipeline.

## Tech stack

| Layer     | Choice                                                               |
| --------- | -------------------------------------------------------------------- |
| Framework | [Astro](https://astro.build) (static output, ~zero client JS)        |
| Styling   | Tailwind CSS v4 (CSS-first `@theme` tokens) + Space Grotesk / Inter  |
| Hosting   | Cloudflare Pages (free, global CDN, automatic SSL)                   |
| CI/CD     | GitHub Actions → `wrangler pages deploy`                             |
| Contact   | Web3Forms + Cloudflare Turnstile + Cloudflare Email Routing          |
| Tests     | Playwright (desktop + mobile smoke), ESLint, Prettier, `astro check` |

## Local development

```bash
pnpm install            # install dependencies
pnpm dev                # http://localhost:4321
pnpm build              # production build → dist/
pnpm preview            # serve the built site locally

pnpm check              # astro type/diagnostics check
pnpm lint               # eslint + prettier --check
pnpm format             # prettier --write
pnpm test               # playwright smoke tests (builds + previews first)
```

Requires Node 20+ and pnpm (a `packageManager` field pins the pnpm version).

## Project layout

```
src/
  layouts/Base.astro        # <head>, SEO/OpenGraph/JSON-LD, nav + footer
  pages/index.astro         # the single-page site
  components/                # Hero, Highlights, Services, TechStack, Experience, Contact, …
  data/                      # site.ts, services.ts, experience.ts, skills.ts (edit content here)
  styles/global.css          # design tokens + reusable component classes
public/                      # favicon.svg, og-image.png, robots.txt
scripts/generate-og.mjs      # regenerates public/og-image.png
tests/smoke.spec.ts          # Playwright smoke tests
.github/workflows/ci-deploy.yml
```

**To update content** (services, experience, skills, certifications, contact details), edit the
files in `src/data/`. To regenerate the social-share image after a copy change:
`node scripts/generate-og.mjs`.

## Environment variables

Set as repository **Secrets** (used at build time; the `PUBLIC_*` ones are also safe to expose in
client output):

| Variable                   | Purpose                                          |
| -------------------------- | ------------------------------------------------ |
| `PUBLIC_WEB3FORMS_KEY`     | Web3Forms access key — enables the contact form  |
| `PUBLIC_TURNSTILE_SITEKEY` | Cloudflare Turnstile site key — spam protection  |
| `CLOUDFLARE_API_TOKEN`     | Token with **Cloudflare Pages: Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID`    | Cloudflare account ID                            |

For local form testing, create a `.env` file:

```
PUBLIC_WEB3FORMS_KEY=your-key
PUBLIC_TURNSTILE_SITEKEY=your-sitekey
```

Without `PUBLIC_WEB3FORMS_KEY`, the contact section gracefully falls back to a direct-email card.

## Deployment pipeline

On every pull request: **lint → type-check → build → Playwright tests**.
On push to `main`: the same gate runs, then — only if green — it deploys to Cloudflare Pages.

### One-time setup

1. **GitHub** — push this repo (private) to GitHub.
2. **Cloudflare API token** — My Profile → API Tokens → Create → a custom token with
   **Account › Cloudflare Pages › Edit**. Copy the token and your **Account ID** (Workers & Pages
   dashboard, right sidebar).
3. **GitHub secrets** — repo → Settings → Secrets and variables → Actions → add
   `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and (optionally) `PUBLIC_WEB3FORMS_KEY`,
   `PUBLIC_TURNSTILE_SITEKEY`.
4. **First deploy** — push to `main`. The workflow's "Ensure Pages project exists" step creates the
   `anantajna` Pages project on the first run, then deploys to it.
5. **Custom domain** — Cloudflare dashboard → Workers & Pages → `anantajna` → Custom domains → add
   `anantajna.com` and `www.anantajna.com`. DNS records are created automatically (the zone is
   already in Cloudflare). Add a redirect rule for `www` → apex.
6. **Email routing** — Cloudflare dashboard → Email → Email Routing → route
   `consulting@anantajna.com` to your inbox.
7. **Contact form** — get a free access key at <https://web3forms.com> and a
   [Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) site key; add them as the
   `PUBLIC_*` secrets above.

### Manual deploy (optional)

```bash
pnpm build
pnpm exec wrangler pages deploy dist --project-name=anantajna
```

## License

© Anantajna / Santosh Hegde. All rights reserved.
