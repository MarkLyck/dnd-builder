import { forwardRef } from "react";
import { styled } from "stitches";
import { Draggable } from "core";

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

type DraggableItemProps = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const Item = ({ children, ...props }: any) => {
  return <Container {...props}>{children}</Container>;
};
// const Item = forwardRef(({ children, ...props }: any, ref: any) => {
//   return (
//     <Container {...props} ref={ref}>
//       {children}
//     </Container>
//   );
// });
Item.displayName = "DraggableItem";

export const DraggableItem = ({ id, icon, label }: DraggableItemProps) => {
  return (
    <Draggable id={id}>
      <Item>
        {icon}
        <span>{label}</span>
      </Item>
    </Draggable>
  );
};
