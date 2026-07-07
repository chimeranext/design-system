import type { Meta, StoryObj } from "@storybook/react";
import { CtaLink } from "./CtaLink";

const meta: Meta<typeof CtaLink> = {
  title: "Platform/Atoms/CtaLink",
  component: CtaLink,
  args: { href: "#", children: "Book a call" },
  argTypes: { variant: { control: "inline-radio", options: ["solid", "outline", "ghost"] } },
};
export default meta;
type Story = StoryObj<typeof CtaLink>;

export const Solid: Story = { args: { variant: "solid", children: "Install the stack" } };
export const Outline: Story = { args: { variant: "outline", children: "Audit before you install" } };
export const Ghost: Story = { args: { variant: "ghost", children: "View on GitHub →" } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <CtaLink {...args} variant="solid">Solid</CtaLink>
      <CtaLink {...args} variant="outline">Outline</CtaLink>
      <CtaLink {...args} variant="ghost">Ghost</CtaLink>
    </div>
  ),
};
