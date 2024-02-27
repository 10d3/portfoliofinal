import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    light: {
      primary: "#007bff", // Adjust these colors to your preference
      secondary: "#6c757d",
      text: "#1a202c",
      background: "#fff",
    },
    dark: {
      primary: "#563d7c",
      secondary: "#404c56",
      text: "#f2f2f2",
      background: "#1a202c",
    },
  },
  fonts: {
    heading: "Roboto Slab",
    body: `'Raleway', sans-serif`,
    Text: "DM Sans",
  },
});
