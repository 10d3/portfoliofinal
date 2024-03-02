import { Flex, useColorMode } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import RefContext from "./context/RefContext";
import { useRef } from "react";

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const { colorMode } = useColorMode();


  return (
    <RefContext.Provider value={{homeRef, aboutRef, portfolioRef, contactRef}}>
      <Flex
        w="100vw"
        h="100vh"
        // maxW={{base:"90%",md:'75%'}}
        flexDirection={"column"}
        my={"0"}
        p={"0"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={colorMode === "light" ? "#cdf5fd" : "#265073"}
      >
        <Navbar />
        <Body />
      </Flex>
    </RefContext.Provider>
  );
}

export default App;
