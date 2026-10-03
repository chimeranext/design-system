---
name: ChimeraNext Academy
description: Dungeon-fantasy dark-first identity for all ChimeraNext surfaces (website + academy).
colors:
  primary: "#B78E3B"
  secondary: "#142A46"
  tertiary: "#7C5CFF"
  accent: "#EC4899"
  parchment: "#F2EAD8"
  goldDeep: "#A67E34"
  blood: "#A33B3B"
  frost: "#3B82F6"
  mana: "#22D3EE"
  ink: "#0B1526"
  card: "#142A46"
  border: "#2A2640"
  text: "#F2EAD8"
  muted: "#9AA3B2"
  success: "#34D399"
  warning: "#FBBF24"
  destructive: "#FB7185"
typography:
  h1:
    fontFamily: Alegreya
    fontSize: 3rem
    fontWeight: 800
  h2:
    fontFamily: Piazzolla
    fontSize: 1.75rem
    fontWeight: 600
  h3:
    fontFamily: Piazzolla
    fontSize: 1rem
    fontWeight: 400
    letterSpacing: 0.12em
  body-md:
    fontFamily: Alegreya Sans
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Alegreya Sans
    fontSize: 0.75rem
    fontWeight: 700
    letterSpacing: 0.08em
  code:
    fontFamily: Inconsolata
    fontSize: 0.875rem
    fontWeight: 400
rounded:
  sm: 6px
  md: 8px
  lg: 10px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 16px
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 12px
  alert-error:
    backgroundColor: "{colors.card}"
    textColor: "{colors.destructive}"
    rounded: "{rounded.md}"
    padding: 12px
  alert-success:
    backgroundColor: "{colors.card}"
    textColor: "{colors.success}"
    rounded: "{rounded.md}"
    padding: 12px
  alert-warning:
    backgroundColor: "{colors.card}"
    textColor: "{colors.warning}"
    rounded: "{rounded.md}"
    padding: 12px
  badge-frost:
    backgroundColor: "{colors.frost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px
  badge-mana:
    backgroundColor: "{colors.mana}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px
  badge-blood:
    backgroundColor: "{colors.blood}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.md}"
    padding: 8px
  chip-gold:
    backgroundColor: "{colors.goldDeep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px
  code-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.md}"
    padding: 16px
  divider:
    backgroundColor: "{colors.border}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: 8px
---

## Overview

Dungeon-fantasy dark-first system — the single ChimeraNext identity for website
and academy. Ink-navy night surfaces, antique gold as the sole CTA metal,
arcane violet for magic/links, parchment for light text. Dark is default;
`.light` (quest-scroll) is opt-in.

SSOT loop: `packages/tokens/tokens.json` (W3C DTCG, Style Dictionary +
style-dictionary-utils build) is the normative build source; this file is the
agent-facing contract. CI runs `design:lint` — token drift between this file
and `tokens.json` build output is a defect. Stitch consumes this file to
generate on-brand UI (`stitch-design-md` loop).

## Colors

Night surfaces with one metal and three magic accents (legacy neon repurposed).

- **Primary (#B78E3B):** Antique gold — CTAs, brand moments, progress.
- **Secondary (#142A46):** Ink navy — cards, panels, primary text on gold.
- **Tertiary (#7C5CFF):** Arcane — magic, links, certificates.
- **Accent (#EC4899):** Charm — rare only, never body text.
- **Parchment (#F2EAD8):** Light surfaces and dark-mode text.
- **Blood (#A33B3B):** Destructive fills; `#FB7185` for destructive text on dark.
- **Frost (#3B82F6) / Mana (#22D3EE):** Info and highlights, sparing use.

## Typography

H1 Alegreya 800 (hero voice). H2 Piazzolla 600 (section voice). H3 Piazzolla
400 all-caps letterspaced (eyebrows). Body and UI in Alegreya Sans 400/700
(buttons explicitly set — never inherit system sans). Code in Inconsolata.

## Layout

Dark-first rhythm: section padding `spacing.lg` minimum, card padding
`spacing.md`, densest UI never below `spacing.sm`.

## Elevation & Depth

Depth from layered night surfaces (ink → card) plus a gold hairline on hero
elements. Borders (`border` token) separate planes. No drop shadows on dark.

## Shapes

`rounded.md` (8px) buttons/inputs, `rounded.lg` (10px) cards. Pills only for
chips/badges. Match `radius` tokens exactly.

## Components

- **button-primary:** gold fill, ink text, 12px padding. Ghost variant: blood
  outline, blood text, transparent fill.
- **card:** ink surface on darker bg, parchment text, 16px padding.
- **input:** darkest surface, gold border on focus, never borderless.
- **alert-error:** ink surface, blood-light text, never blood fill.

## Do's and Don'ts

- Do keep charm/mana under 5% of any viewport.
- Do use the gold gradient (deep→light) for brand moments; flat gold for UI.
- Don't introduce new hex values — extend `tokens.json` first, then this file.
- Don't ship light-mode-only pairs; dark is default, verify AA there.
- Don't re-draw the griffin mark; canonical SVG lives in
  `packages/ui/src/assets/brand/chimeranext.svg`.
