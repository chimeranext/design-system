# @chimeranext/design-system

The consolidated **ChimeraNext design system**: one canonical set of design tokens, a
React component library, and a Storybook that publishes both.

It replaces **three divergent, hand-maintained copies** of the brand tokens — in
`better-microservices`, `better-toolkits`, and the `lapc506` portfolio — with a single
Style Dictionary source. Migrating those consumers onto this package is **Phase 2**
(tracked in `openspec/changes/2026-07-07-design-system-bootstrap/tasks.md`); this repo
ships the source of truth.

## What's inside

| Package | Name | What it is |
|---|---|---|
| `packages/tokens` | `@chimeranext/tokens` | Canonical `tokens.json` → Style Dictionary generates themed CSS variables, a Tailwind preset, a JS export, and a Dart `ChimeraTokens` class. |
| `packages/ui` | `@chimeranext/ui` | React components extracted from the studio landing surfaces, styled only from tokens. |
| `.storybook` | — | Pillar-first atomic Storybook → `storybook.chimeranext.dev`. |

### Tokens

`packages/tokens/tokens.json` is the **single source of truth**: the Academy D&D
identity (dark default + quest-scroll light theme) — antique gold `#B78E3B` primary,
ink navy `#142A46`, arcane `#7C5CFF`, charm `#EC4899`, parchment `#F2EAD8`, blood /
frost / mana accents, the gold gradient, fonts (Alegreya / Piazzolla /
Alegreya Sans / Inconsolata), radii (10 / 8 / 6px), and the 6 bento accents in
light + dark variants.
Everything under `packages/tokens/build/` is **generated** — never hand-edited:

```
build/css/variables.css        # :root (dark) + .light overrides
build/tailwind-preset.js        # Tailwind v3 preset
build/tokens.js                 # raw values as ESM (Foundations stories import these)
build/dart/chimera_tokens.dart  # Flutter constants
```

### Components

`Atoms` CopyButton, CtaLink · `Molecules` Terminal, WindowCard, StatTile, BentoCard ·
`Organisms` HeroTerminal · `Templates` Section. Token-only styling; the bento accent is
a prop fed from the token build, so no component hardcodes a palette.

## Install

```bash
npm install
npm run build:tokens     # generate token outputs (run before Storybook)
npm run storybook        # dev server on :6006
```

Consume from another app in this workspace / monorepo:

```ts
import "@chimeranext/tokens/css";        // CSS variables (dark :root + .light)
import preset from "@chimeranext/tokens/preset";  // Tailwind preset
import { tokens } from "@chimeranext/tokens";      // raw values
import { HeroTerminal, BentoCard, Terminal } from "@chimeranext/ui";
import "@chimeranext/ui/styles.css";      // terminal/hero utility layer
```

## Storybook taxonomy

Pillar-first atomic titles, single `Platform` pillar:

```
Platform/Foundations/{Colors,Typography,Spacing,Radius,Gradients}
Platform/{Atoms,Molecules,Organisms,Templates}/<Component>
```

A `PreToolUse` hook (`.claude/hooks/pre-write-require-atomic-title.sh`, wired in
`.claude/settings.json`, config in `.atomic-design-rules.json`) blocks any
`*.stories.tsx` whose `title:` diverges from its atomic path. Add `@atomic-exempt:
<reason>` in the first lines to opt out.

## Build & verify

```bash
npm run build:tokens     # Style Dictionary → build/
npm run typecheck        # tsc --noEmit on @chimeranext/ui
npm run build-storybook  # build:tokens + storybook build → storybook-static/
npm run smoke            # serve storybook-static on :8080 for a served smoke test
```

## Deploy — prepared, not executed

`vercel.json` points the build at `storybook-static/`. Deploying to
**`storybook.chimeranext.dev`** is a human gate: connect the repo on Vercel and map the
subdomain. Nothing here triggers a deploy.

## Governance

Decision records live in `openspec/` (same convention as `chimeranext/better-toolkits`).
See `openspec/project.md` for domains (`tokens` / `ui` / `storybook` / `meta`), the
change lifecycle, and enforcement.

## License

UNLICENSED — internal ChimeraNext tooling.
