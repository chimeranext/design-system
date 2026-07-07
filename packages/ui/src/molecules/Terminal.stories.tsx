import type { Meta, StoryObj } from "@storybook/react";
import { Terminal } from "./Terminal";

const meta: Meta<typeof Terminal> = {
  title: "Platform/Molecules/Terminal",
  component: Terminal,
  args: { cmd: "claude plugin marketplace add chimeranext/better-toolkits", copyLabel: "Copy", copied: "Copied ✓" },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {};

export const ShortCommand: Story = { args: { cmd: "/acme:audit" } };

export const LongCommand: Story = {
  args: { cmd: "claude plugin install make-no-mistakes@better-toolkits && /make-no-mistakes:audit ./apps/acme-web" },
};
