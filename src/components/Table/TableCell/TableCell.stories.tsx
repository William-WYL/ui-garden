import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableCell from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/Table/TableCell",
  component: TableCell,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: "Cell content",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled cell",
    disabled: true,
  },
};
