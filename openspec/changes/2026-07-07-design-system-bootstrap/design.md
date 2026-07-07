# Design: design-system bootstrap

**Domain:** meta · **Date:** 2026-07-07

## Repository layout

```
design-system/
├── package.json                 # npm workspaces root; Storybook + tooling devDeps
├── tailwind.config.cjs          # consumes @chimeranext/tokens/preset
├── postcss.config.cjs
├── vercel.json                  # outputDirectory: storybook-static (deploy prepared)
├── .atomic-design-rules.json    # pillar: platform + atomic levels + story-title rule
├── .claude/
│   ├── settings.json            # registers the PreToolUse hook
│   └── hooks/pre-write-require-atomic-title.sh
├── .storybook/{main.ts,preview.ts,preview.css}
├── openspec/…                   # this governance
└── packages/
    ├── tokens/                  # @chimeranext/tokens
    │   ├── tokens.json          # SINGLE SOURCE OF TRUTH
    │   ├── build.mjs            # Style Dictionary custom formats
    │   └── build/               # generated (gitignored): css/variables.css, tailwind-preset.js, tokens.js, dart/chimera_tokens.dart
    └── ui/                      # @chimeranext/ui
        └── src/{lib,atoms,molecules,organisms,templates,foundations}/…
```

## Token pipeline

`build.mjs` registers four custom Style Dictionary formats and reads the raw token
tree (`dictionary.tokens`) so HSL triplets (`257 38% 5%`) and the gradient string pass
through untouched — no color transforms:

| Output | Format | Consumed by |
|---|---|---|
| `build/css/variables.css` | `css/chimera-themed` — dark `:root` + `.light` | any app; Storybook preview |
| `build/tailwind-preset.js` | `js/chimera-tailwind-preset` | `tailwind.config.cjs` |
| `build/tokens.js` | `js/chimera-tokens` — raw values as ESM | Foundations stories |
| `build/dart/chimera_tokens.dart` | `dart/chimera-tokens` — `Color`/`String`/`double` consts | Flutter consumers |

Semantic tokens use shadcn-style HSL triplets consumed via `hsl(var(--x))`, matching
every existing consumer. Brand hues and bento accents are hex. Light theme carries 17
overrides (no `destructive`), dark carries 19 → 36 semantic vars total.

## Component extraction

Each primitive is generalized from `better-toolkits/apps/web/src/app/page.tsx`, with
analytics (`track`) removed and hardcoded `#837C99` muted text replaced by
`text-muted-foreground`. `HeroTerminal` takes its output lines as a prop. `BentoCard`
takes its accent as a prop (a token value), so the component ships zero palette.

Atomic mapping: **Atoms** CopyButton, CtaLink · **Molecules** Terminal, WindowCard,
StatTile, BentoCard · **Organisms** HeroTerminal · **Templates** Section.

## Storybook

- Framework `@storybook/react-vite` (SB 8.6), Tailwind via PostCSS, tokens + UI base
  layer + fontsource imported in `preview.css`.
- `storySort` order `['Platform', ['Foundations','Atoms','Molecules','Organisms','Templates'], '*']`.
- A `theme` global toolbar toggles a `.light` decorator wrapper.

## Verification (performed)

- `npm run build:tokens` → 4 outputs generated; `variables.css` has 36 semantic vars
  (19 dark `:root` + 17 light `.light`) + brand + gradient + fonts + radius + bento.
- `npx storybook build` → success (3.09s); all 13 story files compiled.
- Served `storybook-static` → `index.html` and `iframe.html` HTTP 200; all 13
  `Platform/<Level>/<Component>` titles present in the bundle.
- `tsc --noEmit` on `@chimeranext/ui` → clean.
- Hook self-test → allows correct title, blocks wrong title, respects `@atomic-exempt`,
  allows Edit, ignores non-story files.

## Alternatives considered

- **Plain Node build script** instead of Style Dictionary — rejected; the seed and the
  house convention use Style Dictionary, and Dart parity comes for free.
- **Top-level `Foundations/Components/Patterns` Storybook grouping** — rejected per the
  taxonomy spec; the shared DS belongs to the `Platform` pillar so the sidebar mirrors
  the code.
