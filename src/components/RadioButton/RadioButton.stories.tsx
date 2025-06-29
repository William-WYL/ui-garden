import React from "react";
import RadioButton from "./RadioButton";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Option 1",
    name: "group1",
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Option 2",
    name: "group1",
    checked: true,
    disabled: true,
  },
};
