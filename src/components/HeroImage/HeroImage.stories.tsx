import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    backgroundImage: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    backgroundImage: "https://via.placeholder.com/800x300",
    title: "Welcome to UI Garden",
    subtitle: "Build beautiful components with ease",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundImage: "https://via.placeholder.com/800x300",
    title: "Access Restricted",
    subtitle: "You can't interact with this section",
    disabled: true,
  },
};
