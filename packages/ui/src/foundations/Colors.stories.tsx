import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "@chimeranext/tokens";

// Foundations render the REAL exported token values — no hardcoded hex here.

const meta: Meta = {
  title: "Platform/Foundations/Colors",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

function Swatch({ name, css }: { name: string; css: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          height: 64,
          borderRadius: "var(--radius-md)",
          border: "1px solid hsl(var(--border))",
          background: css,
        }}
      />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
        <div style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>{name}</div>
        <div style={{ color: "hsl(var(--muted-foreground))" }}>{css}</div>
      </div>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 16 }}>
      {children}
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, margin: "28px 0 12px", color: "hsl(var(--foreground))" }}>
      {children}
    </h3>
  );
}

export const Semantic: Story = {
  render: () => (
    <div>
      <H>Semantic — dark ({Object.keys(tokens.semantic.dark).length} tokens)</H>
      <Grid>
        {Object.entries(tokens.semantic.dark).map(([k, v]) => (
          <Swatch key={k} name={`--${k}`} css={`hsl(${v})`} />
        ))}
      </Grid>
      <H>Semantic — light ({Object.keys(tokens.semantic.light).length} tokens)</H>
      <Grid>
        {Object.entries(tokens.semantic.light).map(([k, v]) => (
          <Swatch key={k} name={`--${k}`} css={`hsl(${v})`} />
        ))}
      </Grid>
    </div>
  ),
};

export const Brand: Story = {
  render: () => (
    <div>
      <H>Brand raw hues</H>
      <Grid>
        {Object.entries(tokens.brand).map(([k, v]) => (
          <Swatch key={k} name={`brand.${k}`} css={v} />
        ))}
      </Grid>
    </div>
  ),
};

export const Bento: Story = {
  render: () => (
    <div>
      <H>Bento accents — dark</H>
      <Grid>
        {Object.entries(tokens.bento.dark).map(([k, v]) => (
          <Swatch key={k} name={`bento.dark.${k}`} css={v} />
        ))}
      </Grid>
      <H>Bento accents — light</H>
      <Grid>
        {Object.entries(tokens.bento.light).map(([k, v]) => (
          <Swatch key={k} name={`bento.light.${k}`} css={v} />
        ))}
      </Grid>
    </div>
  ),
};
