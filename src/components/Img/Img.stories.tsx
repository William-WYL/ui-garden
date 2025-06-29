import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    width: "150px",
    height: "150px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Disabled Image",
    width: "150px",
    height: "150px",
    disabled: true,
  },
};
