import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { forwardRef, useContext, useEffect, useState } from "react";
import RefContext from "../../context/RefContext";
import Cards from "../card/Card";
import { motion, useInView, useAnimation } from "framer-motion";

function Portfolio() {
  const { portfolioRef } = useContext(RefContext);

  const projects = [
    {
      title: "project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-brands fa-github",
      iconLive: "fa-solid fa-arrow-up-right-from-square",
      typePro: ["design", "all"]
    },
    {
      title: "project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-brands fa-github",
      iconLive: "fa-solid fa-arrow-up-right-from-square",
      typePro: ["front", "all"]
    },
    {
      title: "project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-brands fa-github",
      iconLive: "fa-solid fa-arrow-up-right-from-square",
      typePro: ["back", "all"]
    },
    {
      title: "project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-brands fa-github",
      iconLive: "fa-solid fa-arrow-up-right-from-square",
      typePro: ["cyber", "all"]
    },
  ];

  const seaBut = ["design", "front", "back", "cyber", "all"];
  const [pent, setPent] = useState("all");

  console.table(
    projects
      .filter((project) => project.typePro.includes(pent))
      .sort((a, b) => (b.title - a.title ? 1 : -1))
  );

  const filt = projects
    .filter((project) => project.typePro.includes(pent))
    // .sort((a, b) => (b.title - a.title ? 1 : -1 ));

  console.log(filt);
  // console.table(
  //   projects.filter((project) => project.technologies.includes(pent))
  // );

  const isInView = useInView(portfolioRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView]);

  return (
    <Flex
      //   ref={portfolioRef}
      //   id="portfolio"
      // my={{ base: "35rem", md: "14rem" }}
      pos={"relative"}
      w={"100%"}
      // minH={"100vh"}
      h={"fit-content"}
      alignItems={"center"}
      justifyContent={"center"}
      // mx={{ base: "15px", md: "50px" }}
      // pl={{ base: "auto", md: "30px" }}
      flexDir={"column"}
      gap={"4"}
    >
      <Box
        ref={portfolioRef}
        id="portfolio"
        as={motion.div}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition="0.8s linear"
      >
        <Text fontSize="4xl" alignSelf="left">
          Portfolio
        </Text>
      </Box>
      <Box
        w="100%"
        gap={"4"}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition="0.8s linear"
      >
        <HStack width={{ base: "100%", md: "93%" }} overflow="hidden">
          {seaBut.map((item, index) => (
            <Button
              width="24.5%"
              key={index}
              fontSize="0.8rem"
              fontWeight="bold"
              color="blue.500"
              onClick={() => {
                setPent(item);
              }}
            >
              {item}
            </Button>
          ))}
        </HStack>
        {filt.map((project, index) => (
          <Cards key={index} projects={project} />
        ))}
      </Box>
    </Flex>
  );
}

export default forwardRef(Portfolio);
