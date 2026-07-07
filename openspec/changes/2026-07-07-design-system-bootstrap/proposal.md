# Proposal: Bootstrap the consolidated ChimeraNext design system

**Domain:** meta · **Date:** 2026-07-07 · **Status:** implemented (pending archive after deploy)

## Why

The ChimeraNext brand tokens exist in **three divergent, hand-maintained copies**:

| Source | Shape | Drift |
|---|---|---|
| `better-microservices/apps/web/src/app/globals.css` | 19 vars, dark only | the original |
| `better-toolkits/apps/web/src/app/globals.css` + `tailwind.config.ts` | 36 vars (dark `:root` + re-tuned light `.surface-light`), brand block, fonts, radius, gradient | **canonical** after today's fix |
| `lapc506/lapc506/src/styles/global.css` + `tailwind.config.ts` | 34 vars (light `:root` + dark `.dark`) | portfolio fork |

Every new surface re-copies and re-tunes these values by hand. There is no single
source, no versioned distribution, and no component library — each app re-implements
the same terminal/window/bento primitives. A Style Dictionary seed already exists in
`startups-android-appstore/packages/tokens` but carries a different (Material-style)
palette and is not wired to the web brand.

## Decisions

1. **One canonical token source.** `packages/tokens/tokens.json` holds the full brand
   palette — dark (default) + re-tuned light theme, brand raw hues, gradient, fonts,
   radius, and the 6 bento accents (dark + light variants). Values are taken from the
   canonical `better-toolkits` globals.css. Style Dictionary (seeded from the
   `startups-android-appstore` config) generates CSS variables (`:root` + `.light`), a
   Tailwind preset, a JS token export, and a Dart `ChimeraTokens` class.
2. **One component library.** `packages/ui` (`@chimeranext/ui`) extracts and generalizes
   the primitives from the `better-toolkits` landing (`page.tsx`): Terminal, HeroTerminal,
   WindowCard, StatTile, BentoCard, CopyButton, CtaLink, Section. Token-only styling; no
   hardcoded palette (bento accents arrive as props from the token build).
3. **Storybook is the shrine.** Pillar-first atomic taxonomy with a single `Platform`
   pillar: `Platform/Foundations/*` renders real token values; `Platform/{Atoms,
   Molecules,Organisms,Templates}/*` cover every component with variants and a
   dark/light toggle.
4. **Enforcement, not just convention.** A `PreToolUse` hook blocks `*.stories.tsx`
   whose `title:` diverges from its atomic path; `.atomic-design-rules.json` holds the
   pillar + levels.
5. **Consumers migrate in Phase 2.** This change ships the source of truth. Repointing
   `better-microservices`, `better-toolkits`, and `lapc506` at `@chimeranext/tokens`
   (deleting their local copies) is a separate, follow-up change per consumer.

## Non-goals

- Migrating the three consumers (Phase 2).
- Executing the Vercel deploy (prepared, human-gated).
- A visual regression / Chromatic pipeline (future).
