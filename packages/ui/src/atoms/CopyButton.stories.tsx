import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Platform/Atoms/CopyButton",
  component: CopyButton,
  args: { text: "claude plugin marketplace add chimeranext/better-toolkits", label: "Copy", copied: "Copied ✓" },
};
export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {};

export const CustomLabels: Story = {
  args: { label: "Copiar", copied: "Copiado ✓" },
};

/** Click the button in the canvas to see the 2-second confirmation state. */
export const InteractiveHint: Story = {
  args: { text: "npm i @chimeranext/ui", label: "Copy install" },
};
