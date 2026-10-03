# drifti-web

The public [drifti.dev](https://drifti.dev) landing for Drifti. This repository is independent of the product and media repositories:

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

The static `out/` directory can be hosted without a backend. Domain, production deployment, and final launch hardening belong to KAN-40.
