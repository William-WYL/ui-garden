import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableHeader from "./TableHeader";
import TableCell from "../TableCell/TableCell";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </>
    ),
    disabled: true,
  },
};
