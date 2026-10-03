# drifti-web

The public landing for Drifti, currently at [drifti-web.vercel.app](https://drifti-web.vercel.app). `drifti.dev` is the intended final domain. This repository is independent of the product and media repositories:

- `drifti` = Rust product, CLI, observation and verification
- `drifti-web` = website and frontend runtime
- `drifti-studio` = storytelling, Remotion, decks and rendered media

## Local development

Requires Node.js 20.9+ and pnpm 11.

```sh
pnpm install
pnpm dev
```

Open <http://localhost:3000>. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before a PR. `pnpm build` creates a static site in `out/`.

Copy `.env.example` to `.env.local` to override the canonical site URL or CTAs. Until documentation and installation instructions are published, **Get started** leads to the real Drifti GitHub README. No final docs URL is assumed.

## Content and deployment

Confluence [Landing — drifti.dev](https://lucabecci.atlassian.net/wiki/spaces/~5e5ee73f27b3910afc2fba2c/pages/688157/Landing+drifti.dev), Product Strategy, Positioning & Messaging, and Canonical Demo Story are the product-copy sources. `src/content/demo.ts` holds a web-local representative sequence. KAN-35 will replace representative output with real CLI captures.

## Vercel deployment

The repository is linked to the `lucabeccis-projects/drifti-web` Vercel project and its GitHub remote. `vercel.json` runs the pinned pnpm build and serves the static `out/` directory. Pull requests receive preview deployments; merges to `main` deploy to the production Vercel hostname. The `Quality` GitHub Action runs lint, typecheck and build on pull requests and `main`.

The canonical URL, sitemap and Open Graph URLs use `NEXT_PUBLIC_SITE_URL` when explicitly configured, otherwise Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, and finally `https://drifti.dev` for local builds. After connecting `drifti.dev`, verify the production URL chosen by Vercel and set `NEXT_PUBLIC_SITE_URL` if an explicit canonical domain is needed.

For reproducible demo screenshots, click a terminal stage to freeze its complete output. Reduced-motion mode shows the entire sequence without typing.

The first public launch uses the Vercel production hostname while `drifti.dev` DNS remains outside Vercel. The apex currently uses CloudNS nameservers and must be pointed at Vercel by whoever controls that zone. Check the exact records with `vercel domains inspect drifti.dev` after adding it to the project; do not assume a fixed DNS value.
