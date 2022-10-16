import { styled } from "stitches";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  br: "$rounded",
  border: "2px solid $neutral6",
  cursor: "pointer",
  bg: "$neutral1",

  svg: {
    size: "$6",
    fill: "$neutral11",
    mb: "$2",
  },
  span: {
    textTransform: "capitalize",
  },

  "&:hover": {
    transform: "scale(0.98)",
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

type SidebarFieldProps = {
  field: any;
  overlay: any;
};

export const Item = ({ field }: SidebarFieldProps) => {
  const { label } = field;

  return <Container>{label}</Container>;
};
