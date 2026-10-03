import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";
import { BentoCard } from "./BentoCard";

// Accents come from the token build — never a hardcoded palette in the story.
const meta: Meta<typeof BentoCard> = {
  title: "Platform/Molecules/BentoCard",
  component: BentoCard,
  args: {
    label: "Architecture & Code Health",
    items: ["Strangler Fig (Fowler)", "DDD (Evans)", "Hexagonal (Cockburn)", "1NF (Codd)"],
    accent: tokens.bento.dark["1"],
  },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof BentoCard>;

export const DarkAccent: Story = { args: { accent: tokens.bento.dark["1"] } };

export const LightAccent: Story = { args: { accent: tokens.bento.light["4"], label: "Design & UX", items: ["Atomic Design (Frost)", "Service Blueprint (Shostack)"] } };

export const AllAccents: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {Object.values(tokens.bento.dark).map((accent, i) => (
        <BentoCard key={accent} accent={accent} label={`Discipline ${i + 1}`} items={["Method A", "Method B", "Method C"]} />
      ))}
    </div>
  ),
};
