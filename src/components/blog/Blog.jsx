// import { forwardRef, useContext } from "react";
// import RefContext from "../../context/RefContext";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
// import BlogCard from "./blogCard/BlogCard";
import { projects } from "../data/BlogData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Helmet } from "react-helmet";

function Blog() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  const lightText = "black";
  const darkText = "white";
  const bgLight = "#a9a9a9";
  const bgDark = "#1D3C56";

  return (
    <Flex
      w={"100vw"}
      H={"100vh"}
      overflow={"auto"}
      alignItems={"center"}
      // justifyContent={"center"}
      pb={"2"}
      flexDir={"column"}
      bg={colorMode === "light" ? "#efefef" : "#265073"}
    >
      <Helmet>
        <title>Welcome to My Blog</title>
        <meta
          name="description"
          content="Mastering React Hooks: Comprehensive Tutorials on Our Blog"
        />
        <meta
          name="keywords"
          content="Blog, Welcome, Articles, Posts, Topics, Insights, Opinions, Personal Blog, Commentary, Discussion, Blogging, Writing, Readers, Community"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Mastering React Hooks: Comprehensive Tutorials on Our Blog"
        />
        <meta
          property="og:description"
          content="Welcome to our blog! Explore our comprehensive tutorials on React Hooks. Learn about useState, useEffect, useContext, and more to enhance your React development skills."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="URL_TO_PAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box
        as="nav"
        pos={"fixed"}
        right="0"
        top="0"
        display="flex"
        w={{ md: "100%", base: "100%" }}
        px={{ md: "15%", base: "5%" }}
        h="fit-content"
        py={2}
        alignItems="center"
        justifyContent="space-between"
        // mb={4}
        zIndex={10}
        bg={colorMode === "light" ? bgLight : bgDark}
        transition="background-color 1s"
        color={colorMode === "light" ? lightText : darkText}
      >
        <Link to="/">
          <Button className="ubuntu-bold">HOME</Button>
        </Link>
        <Button
          bg={colorMode === "light" ? "#efefef" : "#265073"}
          onClick={toggleColorMode}
        >
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box
        as="section"
        w={{ md: "70%", base: "90%" }}
        gap={"8"}
        display="flex"
        flexDir="column"
        h={"auto"}
        // justifyContent="center"
        alignItems="center"
        mt="5rem"
      >
        <Box
          pos="relative"
          //  mt={{base:'16', md:'0'}}
        >
          <Heading size="xl" className="ubuntu-regular">
            Welcome to my Blog
          </Heading>
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
          // bg={colorMode === "light" ? "#cdf5fd" : "#265073"}
          // h='70%'
          h={"auto"}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              direction={{ base: "column", sm: "column" }}
              overflow="hidden"
              variant="outline"
              w={{ base: "100%", sm: "400px" }}
              h={{ base: "fit-content", sm: "fit-content" }}
              bg={colorMode === "light" ? bgLight : bgDark}
              color={colorMode === "light" ? lightText : darkText}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "100%" }}
                src={project.img}
                alt="Caffe Latte"
              />
              <Stack>
                <CardBody>
                  <Heading className="ubuntu-regular" size="md">
                    {project.title}
                  </Heading>
                  <Text className="poppins-regular" py="2">
                    {project.description}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    className="ubuntu-regular"
                    variant="solid"
                    bg={colorMode === "light" ? darkText : "#cdf5fd"}
                    color={colorMode === "light" ? lightText : "#265073"}
                  >
                    <Link to={`/blog/${project.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>
    </Flex>
  );
}

// export default forwardRef(Blog);
export default Blog;
