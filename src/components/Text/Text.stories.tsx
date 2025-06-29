import Text from "./Text";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "Sample text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled text",
    disabled: true,
  },
};
