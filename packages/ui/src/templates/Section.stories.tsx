import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "Platform/Templates/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  argTypes: { tone: { control: "inline-radio", options: ["dark", "light"] } },
};
export default meta;
type Story = StoryObj<typeof Section>;

const Demo = (
  <div style={{ textAlign: "center" }}>
    <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 40, color: "hsl(var(--foreground))" }}>
      From zero to operating system
    </h2>
    <p style={{ marginTop: 12, color: "hsl(var(--muted-foreground))" }}>
      A fluid section that breathes from ~1440px up to 4K.
    </p>
  </div>
);

export const Dark: Story = { args: { tone: "dark", children: Demo } };

/** `light` applies the `.light` token theme regardless of the global toolbar. */
export const Light: Story = { args: { tone: "light", children: Demo } };
