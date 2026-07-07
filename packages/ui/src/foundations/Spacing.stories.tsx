import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Platform/Foundations/Spacing",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

// The DS inherits Tailwind's default 4px-base spacing scale (no bespoke spacing
// tokens). These are the steps used across the components.
const STEPS: [string, string][] = [
  ["1", "0.25rem"],
  ["2", "0.5rem"],
  ["3", "0.75rem"],
  ["4", "1rem"],
  ["5", "1.25rem"],
  ["6", "1.5rem"],
  ["8", "2rem"],
  ["10", "2.5rem"],
  ["12", "3rem"],
];

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 8 }}>
        Inherited from Tailwind (4px base). rem values shown.
      </div>
      {STEPS.map(([step, rem]) => (
        <div key={step} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--foreground))" }}>{step}</div>
          <div style={{ height: 16, width: rem, background: "hsl(var(--primary))", borderRadius: 3 }} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--muted-foreground))" }}>{rem}</div>
        </div>
      ))}
    </div>
  ),
};
