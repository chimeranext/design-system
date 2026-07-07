// Tailwind consumes the generated preset from @chimeranext/tokens (built by
// `npm run build:tokens`). Never hand-edit theme values here — change tokens.json.
const preset = require("@chimeranext/tokens/preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  darkMode: ["class"],
  content: [
    "./packages/ui/src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
};
