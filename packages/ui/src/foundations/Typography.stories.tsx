import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";

const meta: Meta = {
  title: "Platform/Foundations/Typography",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

// Token role → the CSS var the build emits for it (see variables.css).
const cssVar: Record<string, string> = {
  display: "var(--font-display)",
  epic: "var(--font-epic)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
};

export const Families: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {Object.entries(tokens.font).map(([role, family]) => (
        <div key={role}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 8 }}>
            font.{role} — {family}
          </div>
          <div style={{ fontFamily: cssVar[role], fontSize: 34, fontWeight: 700, color: "hsl(var(--foreground))" }}>
            Acme ships an operating system.
          </div>
          <div style={{ fontFamily: cssVar[role], fontSize: 16, color: "hsl(var(--foreground))" }}>
            The quick brown fox jumps over the lazy dog — 0123456789
          </div>
        </div>
      ))}
    </div>
  ),
};

// Academy type scale (DESIGN.md): H1 Alegreya 800, H2 Piazzolla 600,
// H3 Piazzolla 400 all-caps, body Alegreya Sans, code Inconsolata.
const SCALE: { label: string; style: React.CSSProperties }[] = [
  {
    label: "H1 / Alegreya 800 / 3rem",
    style: { fontFamily: tokens.font.display, fontSize: "3rem", fontWeight: 800, lineHeight: 1.1 },
  },
  {
    label: "H2 / Piazzolla 600 / 1.75rem",
    style: { fontFamily: tokens.font.epic, fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.2 },
  },
  {
    label: "H3 / Piazzolla 400 all-caps / 1rem +0.12em",
    style: {
      fontFamily: tokens.font.epic,
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },
  {
    label: "Body / Alegreya Sans 400 / 1rem",
    style: { fontFamily: tokens.font.body, fontSize: "1rem", fontWeight: 400 },
  },
  {
    label: "Label caps / Alegreya Sans 700 / 0.75rem +0.08em",
    style: {
      fontFamily: tokens.font.body,
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  {
    label: "Code / Inconsolata 400 / 0.875rem",
    style: { fontFamily: tokens.font.mono, fontSize: "0.875rem", fontWeight: 400 },
  },
];

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {SCALE.map(({ label, style }) => (
        <div key={label}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 4 }}>
            {label}
          </div>
          <div style={{ ...style, color: "hsl(var(--foreground))" }}>Operate like a studio.</div>
        </div>
      ))}
    </div>
  ),
};
