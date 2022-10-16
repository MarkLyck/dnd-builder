import type { StoryFn } from "@storybook/react";
import App from "./App";

export default {
  component: App,
  parameters: {
    layout: "centered",
  },
};

export const AppStory: StoryFn = () => <App />;
