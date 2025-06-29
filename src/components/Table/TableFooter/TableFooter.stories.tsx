import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableFooter from "./TableFooter";
import TableCell from "../TableCell/TableCell";

const meta: Meta<typeof TableFooter> = {
  title: "Components/Table/TableFooter",
  component: TableFooter,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
      </>
    ),
    disabled: true,
  },
};
