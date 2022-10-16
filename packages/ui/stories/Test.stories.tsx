import type { StoryFn } from "@storybook/react";

const Button = () => <button>test</button>;

const story = {
  component: Button,
};
export default story;

export const MyStory: StoryFn = () => <Button />;
