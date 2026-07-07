#!/usr/bin/env bash
# PreToolUse hook (Write|Edit) — enforces the pillar-first atomic story-title rule:
#   a *.stories.tsx `title:` must equal "<Pillar>/<AtomicLevel>/<Component>",
#   derived from the file's path under the components root.
# Block on Write (new stories born correct); allow on Edit (legacy migrates).
# Honors an `@atomic-exempt: <reason>` marker in the first lines.
# Exit 2 = block (stderr shown to the model). Exit 0 = allow.
set -euo pipefail

INPUT="$(cat)"
TOOL="$(printf '%s' "$INPUT" | jq -r '.tool_name // empty' 2>/dev/null || true)"
FILE_PATH="$(printf '%s' "$INPUT" | jq -r '.tool_input.file_path // empty' 2>/dev/null || true)"
[ -z "$FILE_PATH" ] && exit 0

# Only story files.
case "$FILE_PATH" in
  *.stories.tsx) ;;
  *) exit 0 ;;
esac

# Allow edits to migrate legacy stories; only new writes are enforced.
[ "$TOOL" = "Edit" ] && exit 0

CONTENT="$(printf '%s' "$INPUT" | jq -r '.tool_input.content // empty' 2>/dev/null || true)"

# Exemption marker in the first few lines.
if printf '%s' "$CONTENT" | head -5 | grep -q '@atomic-exempt:'; then
  exit 0
fi

REPO_ROOT="${CLAUDE_PROJECT_DIR:-$(pwd)}"
RULES="$REPO_ROOT/.atomic-design-rules.json"
ROOT_REL="packages/ui/src"
PILLAR="Platform"
if [ -f "$RULES" ]; then
  ROOT_REL="$(jq -r '.storyTitleRule.componentsRoot // "packages/ui/src"' "$RULES" 2>/dev/null || echo packages/ui/src)"
  PILLAR="$(jq -r '.storyTitleRule.pillar // "Platform"' "$RULES" 2>/dev/null || echo Platform)"
fi

REL="${FILE_PATH#"$REPO_ROOT"/}"
SUB="${REL#"$ROOT_REL"/}"                 # e.g. atoms/CopyButton.stories.tsx
LEVEL_DIR="${SUB%%/*}"                     # e.g. atoms
BASE="$(basename "$SUB" .stories.tsx)"     # e.g. CopyButton
LEVEL="$(printf '%s' "$LEVEL_DIR" | sed 's/^./\U&/')"  # Atoms
EXPECTED="$PILLAR/$LEVEL/$BASE"

ACTUAL="$(printf '%s' "$CONTENT" | grep -oE "title:[[:space:]]*[\"'][^\"']+" | head -1 | sed -E "s/title:[[:space:]]*[\"']//")"

if [ "$ACTUAL" != "$EXPECTED" ]; then
  echo "BLOCKED by atomic-design story-title rule: '$REL'" >&2
  echo "  title: is '${ACTUAL:-<none>}' but must be '$EXPECTED' (derived from the path under $ROOT_REL/)." >&2
  echo "  Fix the title, or add '@atomic-exempt: <reason>' in the first lines. See .atomic-design-rules.json." >&2
  exit 2
fi

exit 0
