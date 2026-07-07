import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";

const meta: Meta = {
  title: "Platform/Foundations/Typography",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const cssVar: Record<string, string> = {
  heading: "var(--font-heading)",
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

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {[
        ["H1 / clamp", "clamp(2.1rem,1rem+3vw,4.75rem)"],
        ["H2 / clamp", "clamp(1.75rem,1.1rem+1.7vw,3.25rem)"],
        ["Body", "1.125rem"],
        ["Small", "0.875rem"],
        ["Mono / caption", "0.75rem"],
      ].map(([label, size]) => (
        <div key={label} style={{ fontFamily: "var(--font-heading)", fontSize: size, color: "hsl(var(--foreground))" }}>
          {label} — {size}
        </div>
      ))}
    </div>
  ),
};
