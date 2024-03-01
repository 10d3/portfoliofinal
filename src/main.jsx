import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme/Theme";
import { BrowserRouter } from "react-router-dom";
import Routerage from "./Route.jsx";
import './font.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" theme={theme} />
      <BrowserRouter>
        <Routerage />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
