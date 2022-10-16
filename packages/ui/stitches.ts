import { createStitches } from "@stitches/react";
import { gray, indigo, red, green } from "@radix-ui/colors";

const stitches = createStitches({
  theme: {
    colors: {
      ...gray,
      ...indigo,
      ...red,
      ...green,
      // neutral
      neutral1: "$gray1",
      neutral2: "$gray2",
      neutral3: "$gray3",
      neutral4: "$gray4",
      neutral5: "$gray5",
      neutral6: "$gray6",
      neutral7: "$gray7",
      neutral8: "$gray8",
      neutral9: "$gray9",
      neutral10: "$gray10",
      neutral11: "$gray11",
      neutral12: "$gray12",
      // primary
      primary1: "$indigo1",
      primary2: "$indigo2",
      primary3: "$indigo3",
      primary4: "$indigo4",
      primary5: "$indigo5",
      primary6: "$indigo6",
      primary7: "$indigo7",
      primary8: "$indigo8",
      primary9: "$indigo9",
      primary10: "$indigo10",
      primary11: "$indigo11",
      primary12: "$indigo12",
      // success
      success1: "$green1",
      success2: "$green2",
      success3: "$green3",
      success4: "$green4",
      success5: "$green5",
      success6: "$green6",
      success7: "$green7",
      success8: "$green8",
      success9: "$green9",
      success10: "$green10",
      success11: "$green11",
      success12: "$green12",
      // danger
      danger1: "$red1",
      danger2: "$red2",
      danger3: "$red3",
      danger4: "$red4",
      danger5: "$red5",
      danger6: "$red6",
      danger7: "$red7",
      danger8: "$red8",
      danger9: "$red9",
      danger10: "$red10",
      danger11: "$red11",

      danger12: "$red12",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
    },
    radii: {
      rounded: "4px",
      round: "9999px",
    },
  },
  utils: {
    // Abbreviated size properties
    h: (value: number | string) => ({
      height: value,
    }),
    w: (value: number | string) => ({
      width: value,
    }),

    // Abbreviated margin properties
    m: (value: number | string) => ({
      margin: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    pad: (value: number | string) => ({
      padding: value,
    }),
    pt: (value: number | string) => ({
      paddingTop: value,
    }),
    pr: (value: number | string) => ({
      paddingRight: value,
    }),
    pb: (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: (value: number | string) => ({
      paddingLeft: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: number | string) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value: number | string) => ({
      borderRadius: value,
    }),
    // An abbreviated property for background
    bg: (value: string) => ({
      background: value,
    }),
  },
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;
