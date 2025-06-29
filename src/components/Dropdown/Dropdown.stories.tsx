import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DropdownProps } from "./Dropdown.types";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    selectedValue: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
  { label: "Option 3", value: "opt3" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    selectedValue: "opt1",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    selectedValue: "opt2",
    disabled: true,
  },
};
