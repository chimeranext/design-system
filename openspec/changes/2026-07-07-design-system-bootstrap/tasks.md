# Tasks: design-system bootstrap

**Domain:** meta · **Date:** 2026-07-07

## Phase 1 — this change (shipped)

- [x] `git init` + npm workspaces scaffold
- [x] `packages/tokens`: `tokens.json` canonical palette (dark + light, brand, gradient, fonts, radius, bento dark/light)
- [x] `packages/tokens`: `build.mjs` Style Dictionary custom formats (CSS themed, Tailwind preset, JS tokens, Dart)
- [x] Build tokens; verify `variables.css` (36 semantic vars), preset, tokens.js, dart
- [x] `packages/ui`: 8 components (CopyButton, CtaLink, Terminal, WindowCard, StatTile, BentoCard, HeroTerminal, Section) — token-only, no hardcoded palette
- [x] `packages/ui`: `styles.css` base layer + `index.ts` exports; `tsc --noEmit` clean
- [x] Storybook: `.storybook/{main,preview,preview.css}`, dark/light toggle, storySort
- [x] Stories: 5 Foundations (real token values) + 8 component stories with variants/states
- [x] Enforcement: `.atomic-design-rules.json` + `pre-write-require-atomic-title.sh` + `.claude/settings.json`; hook self-tested
- [x] Governance: `openspec/project.md` + this change record
- [x] `vercel.json` (outputDirectory storybook-static) — deploy prepared, NOT executed
- [x] README
- [x] Verify: `storybook build` + served smoke test (index.html/iframe.html 200, 13 taxonomy titles in bundle)
- [x] `gh repo create chimeranext/design-system --private` + push

## Phase 2 — follow-up changes (not this change)

- [ ] Migrate `better-toolkits/apps/web` to `@chimeranext/tokens` + `@chimeranext/ui`; delete its local globals.css/tailwind brand block
- [ ] Migrate `better-microservices/apps/web` to `@chimeranext/tokens`; delete local globals.css
- [ ] Migrate `lapc506` portfolio to `@chimeranext/tokens`; delete local global.css/tailwind brand block
- [ ] Wire the Vercel deploy to `storybook.chimeranext.dev` (human-gated)
- [ ] Publish `@chimeranext/tokens` / `@chimeranext/ui` to a registry (or keep git/workspace consumption)
- [ ] Optional: visual regression (Chromatic) + token-lint CI gate
