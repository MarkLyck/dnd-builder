import type { StoryFn } from "@storybook/react";
import { ButtonIcon } from "@icons";
import { DraggableItem } from ".";

export default {
  component: DraggableItem,
  parameters: {
    layout: "centered",
  },
};

export const dragger: StoryFn = () => (
  <DraggableItem id="1" icon={<ButtonIcon />} label="button" />
);
