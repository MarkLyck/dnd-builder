import type { StoryFn } from "@storybook/react";
import { ButtonIcon } from "@icons";
import { Dragger } from ".";

export default {
  component: Dragger,
  parameters: {
    layout: "centered",
  },
};

export const dragger: StoryFn = () => <Dragger icon={<ButtonIcon />} />;
