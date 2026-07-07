import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";

const meta: Meta = {
  title: "Platform/Foundations/Radius",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {Object.entries(tokens.radius).map(([name, value]) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: value,
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--primary))",
            }}
          />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--foreground))" }}>
            radius.{name} — {value}
          </div>
        </div>
      ))}
    </div>
  ),
};
