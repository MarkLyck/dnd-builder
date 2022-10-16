import { styled } from "stitches";
import { ButtonIcon } from "@icons";
import { Dragger } from "../Dragger";

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
  return (
    <Container>
      <SectionTitle>Layout</SectionTitle>
      <Grid>
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
      </Grid>
      <SectionTitle>Inputs</SectionTitle>
      <Grid>
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
      </Grid>
      <SectionTitle>Files</SectionTitle>
      <Grid>
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
        <Dragger icon={<ButtonIcon />} />
      </Grid>
    </Container>
  );
};
