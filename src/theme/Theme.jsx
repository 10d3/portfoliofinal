import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    light: {
      primary: "#f3eeea", // Adjust these colors to your preference
      secondary: "#ebe3d5",
      text: "#1a202c",
      background: "#cdf5fd",
    },
    dark: {
      primary: "#563d7c",
      secondary: "#404c56",
      text: "#f2f2f2",
      background: "#265073",
    },
  },
  fonts: {
    Heading: "Roboto Slab",
    body: `'Raleway', sans-serif`,
    Text: "DM Sans",
    Button: "Roboto Slab",
  },
});
