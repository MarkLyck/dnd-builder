import type { StoryFn } from "@storybook/react";
import { AddElements } from ".";
// import { DndContext } from "@dnd-kit/core";
import { Frame, Droppable } from "core";

export default {
  component: AddElements,
  parameters: {
    layout: "centered",
  },
};

export const add_elements: StoryFn = () => (
  <Frame>
    <Droppable id="test" />
    <AddElements />
  </Frame>
);
