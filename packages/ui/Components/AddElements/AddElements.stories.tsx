import type { StoryFn } from "@storybook/react";
import { AddElements } from ".";

export default {
  component: AddElements,
  parameters: {
    layout: "centered",
  },
};

export const add_elements: StoryFn = () => <AddElements />;
