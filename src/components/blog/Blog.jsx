// import { forwardRef, useContext } from "react";
// import RefContext from "../../context/RefContext";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
// import BlogCard from "./blogCard/BlogCard";
import Cards from "../card/Card";
import { projects } from "../data/Data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Blog() {
  // const { blogRef } = useContext(RefContext);

  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  return (
    <Flex
      w={"100%"}
      // h={"fit-content"}
      // minH={"100vh"}
      alignItems={"center"}
      // justifyContent={"center"}
      py={"2"}
      flexDir={"column"}
      // gap={"4"}
    >
      <Box
        as="nav"
        pos={"fixed"}
        top="0"
        display="flex"
        w={{ md: "70%", base: "90%" }}
        h="fit-content"
        pt={2}
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box
        as="section"
        w={{ md: "70%", base: "90%" }}
        gap={"4"}
        display="flex"
        flexDir='column'
        // justifyContent="center"
        alignItems="center"
        // pos={"relative"}
        // h="fit-content"
        // top={"10%"}
      >
        <Box>
          <Heading size="xl">Welcome to my Blog</Heading>
        </Box>
        <Box
          as="section"
          w={"100%"}
          gap={"4"}
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          // h='70%'
        >
          {projects.map((project) => (
            <Card h={"fit-content"} key={project.id}>
              <CardBody>
                {/* <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            /> */}
                <Stack mt="6" spacing="3">
                  <HStack justifyContent="space-between">
                    <Heading size="md">{project.title}</Heading>
                    <Button>{project.typePro[0]}</Button>
                  </HStack>
                  <Text>{project.description}</Text>
                  <ButtonGroup spacing="2">
                    {project.technologies.map((tech, index) => {
                      return (
                        <Button key={index} size="sm">
                          {tech}
                        </Button>
                      );
                    })}
                  </ButtonGroup>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup
                  w="100%"
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                >
                  <Button variant="solid" colorScheme="blue">
                    <a href={project.gitHref}>
                      <i className={project.iconGit}></i>
                    </a>
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    <Link to={`/blog/${project.id}`}>
                      <i className={project.iconLive}></i>
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Box>
      </Box>
    </Flex>
  );
}

// export default forwardRef(Blog);
export default Blog;
