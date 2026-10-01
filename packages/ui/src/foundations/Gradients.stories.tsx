import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";

const meta: Meta = {
  title: "Platform/Foundations/Gradients",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Brand: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        style={{
          height: 140,
          borderRadius: "var(--radius-lg)",
          background: tokens.gradient.brand,
        }}
      />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "hsl(var(--muted-foreground))" }}>
        gradient.brand — {tokens.gradient.brand}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 48,
          backgroundImage: tokens.gradient.brand,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Operate like a studio.
      </div>
    </div>
  ),
};
