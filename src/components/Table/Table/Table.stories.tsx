import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </tr>
      </tbody>
    ),
  },
};
