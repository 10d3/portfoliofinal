import Home from "../home/Home";
import About from "../about/About";
import { Flex } from "@chakra-ui/react";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

export default function Body() {

  return (
    <Flex
      bg={colorMode === "light" ? "#efefef" : "#265073"}
      transformOrigin={"center"}
      // transition={"0.3s ease"}
      px={{ base: "5%", md: "15%" }}
      h={"100vh"}
      flexDir={"column"}
      overflow={"auto"}
      w={"100vw"}
    >
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </Flex>
  );
}
