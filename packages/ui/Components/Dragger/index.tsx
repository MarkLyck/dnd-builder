import { styled } from "stitches";
import { ButtonIcon } from "@icons";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  color: "$primary9",
  br: "$rounded",
  border: "2px solid $neutral6",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",
  bg: "$neutral1",

  svg: {
    size: "$6",
    fill: "$neutral11",
  },

  "&:hover": {
    transform: "scale(0.95)",
    borderColor: "$neutral7",
  },
  "&:active": {
    transform: "scale(0.95)",
    borderColor: "$neutral8",
    svg: {
      fill: "$neutral12",
    },
  },
});

type DraggerProps = {
  icon: React.ReactNode;
};

export const Dragger = ({ icon }: DraggerProps) => {
  return <Container>{icon}</Container>;
};
