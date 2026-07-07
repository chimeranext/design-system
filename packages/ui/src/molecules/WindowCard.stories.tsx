import type { Meta, StoryObj } from "@storybook/react";
import { WindowCard } from "./WindowCard";

const meta: Meta<typeof WindowCard> = {
  title: "Platform/Molecules/WindowCard",
  component: WindowCard,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof WindowCard>;

export const VentureChip: Story = { args: { title: "AcmeLegal" } };

export const WithBadge: Story = { args: { title: "RapidEats", badge: "live" } };

export const WithMeta: Story = {
  args: {
    meta: "aaarrr-flywheel — /landing-page",
    badge: "live",
    children: (
      <div style={{ padding: "12px 14px", fontFamily: "var(--font-mono)", fontSize: 13, color: "hsl(var(--foreground))" }}>
        <span style={{ color: "hsl(var(--muted-foreground))" }}>$ </span>/landing-page --b2b acme-cloud
      </div>
    ),
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
      {["AcmeLegal", "RapidEats", "AcmeCloud", "InvoiceFlow", "AcmePay", "AcmeHealth"].map((v) => (
        <WindowCard key={v} title={v} badge="live" />
      ))}
    </div>
  ),
};
