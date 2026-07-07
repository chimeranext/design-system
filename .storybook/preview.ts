import type { Preview, Decorator } from "@storybook/react";
import { createElement } from "react";
import "./preview.css";

const atomicOrder = ["Foundations", "Atoms", "Molecules", "Organisms", "Templates"];

/** Wrap every story in the selected token theme. Dark is the default `:root`;
 *  `light` applies the `.light` override class. */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "dark";
  return createElement(
    "div",
    {
      className: theme === "light" ? "light" : "",
      style: {
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        padding: "2rem",
        minHeight: "100vh",
      },
    },
    createElement(Story),
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: "Token theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark", icon: "circle" },
          { value: "light", title: "Light", icon: "circlehollow" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: ["Platform", atomicOrder, "*"],
      },
    },
  },
};

export default preview;
