import type { Meta, StoryObj } from "@storybook/react";
import { HeroTerminal } from "./HeroTerminal";

const meta: Meta<typeof HeroTerminal> = {
  title: "Platform/Organisms/HeroTerminal",
  component: HeroTerminal,
  args: {
    command: "claude plugin marketplace add chimeranext/better-toolkits",
    readyLine: "10 toolkits ready. Operate like a studio.",
    copyLabel: "Copy",
    copied: "Copied ✓",
    lines: [
      { name: "make-no-mistakes-toolkit", suffix: " v1.4.0 — installed" },
      { name: "atomic-design-toolkit", suffix: " v1.2.0 — installed" },
      { name: "business-model-toolkit", suffix: " v1.0.0 — installed" },
      { name: "ux-research-toolkit", suffix: " v1.1.0 — installed" },
      { name: "app-gtm-release-toolkit", suffix: " v1.0.0 — installed" },
    ],
  },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof HeroTerminal>;

export const Default: Story = {};

export const ShortList: Story = {
  args: {
    command: "npm i @chimeranext/ui @chimeranext/tokens",
    readyLine: "Design system wired. Ship consistent UI.",
    lines: [
      { name: "@chimeranext/tokens", suffix: " v0.1.0 — installed" },
      { name: "@chimeranext/ui", suffix: " v0.1.0 — installed" },
    ],
  },
};
