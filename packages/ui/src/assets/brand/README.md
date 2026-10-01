# Brand assets (canonical)

- `chimeranext.svg` — official ChimeraNext lockup (Affinity vector export, pure paths, no text elements so **no font dependency**).
- Source of truth delivered 2026-09-30 (`Downloads/chimeranext.svg`, 57 KB).
- Exact brand colors sampled from this file: ink navy `#142A46`, golds `#A67E34` / `#B08637` / `#B78E3B` / `#BA913D`.

Consumers (academy, website) copy these bytes until the `@chimeranext/ui` package
publishes an asset pipeline. Never re-draw or re-export from raster.

> Drift note: `packages/tokens/tokens.json` still holds the legacy neon identity
> (`#7C5CFF` + Sora/Inter). Re-tokenizing to ink/gold + Alegreya needs a
> governance decision — see open questions.
