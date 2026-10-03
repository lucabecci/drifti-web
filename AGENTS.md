# Drifti Web agent instructions

`drifti-web` owns the public website only. `drifti` owns the Rust product and CLI; `drifti-studio` owns Remotion and launch media. Keep the repositories independent.

Product copy comes from Confluence: Landing — drifti.dev, Product Strategy, Positioning & Messaging, and Canonical Demo Story. Representative demo output is presentation content until KAN-35 replaces it with real CLI captures. Never imply that Drifti blocks behavior, prevents exfiltration, or acts as a sandbox.

## Jira and Git workflow

Use Atlassian MCP for normal KAN implementation tasks. Claim a ready, unblocked task, read its linked Confluence page, move it to En progreso, then create a dedicated `<type>/KAN-N-<slug>` branch and comment the branch and worktree path in Jira before editing. Keep Jira phases aligned with progress. After implementation, record evidence and validation, then move through En revisión with `phase-validation`, `phase-security-review`, and `phase-ready-to-merge`. Mark Completado only after merge or accepted completion. Do not work directly on main or reuse a task branch.

Keep this site static, accessible, and easy to deploy. Use pnpm, Next.js, TypeScript, and Tailwind CSS. Run lint, typecheck, and build before review.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
