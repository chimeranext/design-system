# design-system — OpenSpec Project Governance

> **Source of truth** for how decisions are recorded, tracked, and shipped in this
> repo. Same convention as `chimeranext/better-toolkits` and
> `chimeranext/better-microservices`.

## Overview

`design-system` is the consolidated ChimeraNext design system: one canonical set of
design tokens, a React component library, and a Storybook that publishes both to
`storybook.chimeranext.dev`. It replaces three divergent hand-maintained copies of
the brand tokens (in `better-microservices`, `better-toolkits`, and the `lapc506`
portfolio) with a single Style Dictionary source.

- **Remote (canonical):** `github.com/chimeranext/design-system`
- **Tracker:** GitHub Issues on this repo
- **Publish surface:** Storybook static build → `storybook.chimeranext.dev` (deploy prepared, human-gated)

## Spec Domains

Every change belongs to exactly one **domain**:

| Domain | Scope |
|---|---|
| `tokens` | `packages/tokens/**` — the canonical Style Dictionary source and its outputs |
| `ui` | `packages/ui/**` — the React component library |
| `storybook` | `.storybook/**`, stories, taxonomy, story-title enforcement |
| `meta` | root manifests, governance, hooks, deploy config, README |

## Change lifecycle

1. **Propose** — create `openspec/changes/<YYYY-MM-DD>-<slug>/` with `proposal.md`
   (why + decisions), `design.md` (what, in detail), `tasks.md` (how, checklist).
2. **Implement** — commit messages reference the change slug.
3. **Archive** — when shipped, move the change dir to `openspec/changes/archive/`.
   Stale plans/specs for shipped work do NOT live at the top level.

## Enforcement (not just convention)

A `PreToolUse` hook (`.claude/hooks/pre-write-require-atomic-title.sh`, registered in
`.claude/settings.json`) enforces the pillar-first atomic story-title rule for Claude
Code sessions in this repo:

> A `*.stories.tsx` `title:` must equal `<Pillar>/<AtomicLevel>/<Component>`, derived
> from the file's path under `packages/ui/src/`.

- **Block on Write** (new stories born correct), **allow on Edit** (legacy migrates).
- Honors an `@atomic-exempt: <reason>` marker in the first lines.
- The pillar list and atomic levels live in `.atomic-design-rules.json`.

## Token parity rule

`packages/tokens/tokens.json` is the single source of truth. The CSS variables,
Tailwind preset, JS export, and Dart class under `packages/tokens/build/` are
**generated** (`npm run build:tokens`) and never hand-edited. Consumers import the
published outputs; they must not fork the palette. Foundations stories render the
generated token values — zero hardcoded hex in stories.
