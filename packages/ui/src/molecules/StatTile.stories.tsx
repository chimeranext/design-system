import type { Meta, StoryObj } from "@storybook/react";
import { StatTile } from "./StatTile";

const meta: Meta<typeof StatTile> = {
  title: "Platform/Molecules/StatTile",
  component: StatTile,
  args: { value: "10", label: "toolkits" },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof StatTile>;

export const Default: Story = {};

export const Row: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 560 }}>
      <StatTile value="10" label="toolkits" />
      <StatTile value="96" label="skills" />
      <StatTile value="65,000" label="lines of methodology" />
    </div>
  ),
};
