import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableRow from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/Table/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <td>Disabled Cell 1</td>
        <td>Disabled Cell 2</td>
      </>
    ),
  },
};
