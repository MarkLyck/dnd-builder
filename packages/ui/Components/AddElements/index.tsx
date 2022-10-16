import { styled } from "stitches";
import { ButtonIcon } from "@icons";
import { DraggableItem } from "../DraggableItem";
import { useDnDStore } from "core";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "1rem",
  bg: "$neutral1",
  border: "1px solid $neutral6",
  br: "$rounded",
  gap: "$2",
});

const SectionTitle = styled("h4", {
  m: 0,
});

const Grid = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",
});

export const AddElements = () => {
  const regenKey = useDnDStore((state: any) => state.regenKey);

  return (
    <Container>
      <SectionTitle>Layout</SectionTitle>
      <Grid>
        <DraggableItem
          id={`${regenKey}-1`}
          icon={<ButtonIcon />}
          label="button"
        />
        <DraggableItem
          id={`${regenKey}-2`}
          icon={<ButtonIcon />}
          label="button"
        />
        <DraggableItem
          id={`${regenKey}-3`}
          icon={<ButtonIcon />}
          label="button"
        />
      </Grid>
      <SectionTitle>Inputs</SectionTitle>
      <Grid>
        <DraggableItem
          id={`${regenKey}-4`}
          icon={<ButtonIcon />}
          label="button"
        />
        <DraggableItem
          id={`${regenKey}-5`}
          icon={<ButtonIcon />}
          label="button"
        />
        <DraggableItem
          id={`${regenKey}-6`}
          icon={<ButtonIcon />}
          label="button"
        />
      </Grid>
      <SectionTitle>Files</SectionTitle>
      <Grid>
        <DraggableItem
          id={`${regenKey}-7`}
          icon={<ButtonIcon />}
          label="button"
        />
        <DraggableItem id="8" icon={<ButtonIcon />} label="button" />
        <DraggableItem id="9" icon={<ButtonIcon />} label="button" />
      </Grid>
    </Container>
  );
};
