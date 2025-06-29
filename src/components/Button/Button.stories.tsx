import Button from "./Button";
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't Click Me",
    disabled: true,
  },
};
