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
import { projects } from "../data/BlogData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Helmet } from "react-helmet";

function Blog() {
  // const { blogRef } = useContext(RefContext);

  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  return (
    <Flex
      w={"100vw"}
      minH={"100vh"}
      alignItems={"center"}
      // justifyContent={"center"}
      py={"2"}
      flexDir={"column"}
    >
      <Helmet>
        <title>Welcome to My Blog</title>
        <meta
          name="description"
          content="Description of my page for SEO purposes."
        />
        <meta
          name="keywords"
          content="Blog, Welcome, Articles, Posts, Topics, Insights, Opinions, Personal Blog, Commentary, Discussion, Blogging, Writing, Readers, Community"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mastering React Hooks: Comprehensive Tutorials on Our Blog" />
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
        bg={colorMode === "light" ? "gray.300" : "gray.700"}
      >
        <Link to="/">
          <Button className="space-mono-bold">HOME</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box
        as="section"
        w={{ md: "70%", base: "90%" }}
        gap={"8"}
        display="flex"
        flexDir="column"
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
          // h='70%'
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              direction={{ base: "column", sm: "column" }}
              overflow="hidden"
              variant="outline"
              w={{ base: "100%", sm: "400px" }}
              h={{ base: "fit-content", sm: "fit-content" }}
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
                    colorScheme="blue"
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
