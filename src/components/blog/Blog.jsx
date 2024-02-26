import { forwardRef, useContext } from "react";
import RefContext from "../../context/RefContext";
import { Box, Flex, Text } from "@chakra-ui/react";
// import BlogCard from "./blogCard/BlogCard";
import Cards from "../card/Card";

function Blog() {
  const { blogRef } = useContext(RefContext);

  const projects = [
    {
      title: "project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-regular fa-share-from-square",
      iconLive: "fa-brands fa-readme",
    },
    {
      title: "project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-regular fa-share-from-square",
      iconLive: "fa-brands fa-readme",
    },
    {
      title: "project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-regular fa-share-from-square",
      iconLive: "fa-brands fa-readme",
    },
    {
      title: "project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: ["react", "node", "express", "mongo"],
      image: "",
      liveHref: "",
      gitHref: "",
      iconGit: "fa-regular fa-share-from-square",
      iconLive: "fa-brands fa-readme",
    },
  ];


  return (
    <Flex
      w={"100%"}
      h={"100%"}
      // minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      // mx={{ base: "15px", md: "50px" }}
      // pl={{ base: "auto", md: "30px" }}
      // flexDir="column"
      my={"2"}
      flexDir={"column"}
      gap={"4"}
    >
      <Box ref={blogRef} id="blog">
        <Text fontSize="4xl" alignSelf="left">
          Blog
        </Text>
      </Box>
      <Box
        w="100%"
        gap={"4"}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems='center'
      >
        {projects.map((project, index) => (
          <Cards key={index} projects={project} />
        ))}
      </Box>
    </Flex>
  );
}

export default forwardRef(Blog);
