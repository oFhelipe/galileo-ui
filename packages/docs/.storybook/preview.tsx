import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@galileo-ui/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#2D2D2D" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
