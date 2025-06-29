import Label from "./Label";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Password",
    disabled: true,
  },
};
