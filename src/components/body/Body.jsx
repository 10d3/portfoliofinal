import Home from "../home/Home";
import About from "../about/About";
import { Flex } from "@chakra-ui/react";
import Portfolio from "../portfolio/Portfolio";
import Blog from "../blog/Blog";

export default function Body() {
  return (
    <Flex px={{base:'5%', md:'15%'}} h={"100vh"} flexDir={'column'} overflow={'auto'}>
      <Home />
      <Portfolio />
      <About />
      {/* <Blog /> */}
    </Flex>
  );
}
