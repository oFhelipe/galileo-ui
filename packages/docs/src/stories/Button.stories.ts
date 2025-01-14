import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonProps } from "@galileo-ui/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "tertiary"],
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Label",
    size: "md",
    variant: "default",
  },
};
