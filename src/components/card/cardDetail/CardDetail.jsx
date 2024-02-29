import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/BlogData";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function CardDetail() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  const params = useParams();
  return (
    <>
      <Box
        as="nav"
        pos={"sticky"}
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
        <Link to="/blog">
          <Button>Back</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box
        minH="100vh"
        //  px={{ md: "15%", base: "5%" }}
        w={{ md: "70%", base: "90%" }}
        // gap={"8"}
        display="flex"
        flexDir="column"
        // justifyContent="center"
        alignItems="center"
        // mt="5rem"
        pos='relative'
      >
        <Heading
        mt={{ base: "4rem", md: "4rem", }}
        alignSelf={"start"}>
          {projects[params.id].title}
        </Heading>
        <br/>
        <Divider />
        <br/>
        {projects[params.id].img && (
          <Img w="100%" h="fit-content" src={projects[params.id].img} />
        )}
        <br />
        <Box maxW='100%' w='fit-content' textAlign={"justify"}>
          <Text>{projects[params.id].p1}</Text>
          <br />
          {projects[params.id].fh1 && <h2>{projects[params.id].fH1}</h2>}
          {projects[params.id].reas && (
            <ul>
              {projects[params.id].reas.map((reason, index) => {
                return <li key={index}>{reason}</li>;
              })}
            </ul>
          )}
          <br />
          {projects[params.id].fh2 && <h2>{projects[params.id].fh2}</h2>}
          {projects[params.id].des1 && <Text>{projects[params.id].des1}</Text>}
          <br />
          {projects[params.id].fh3 && <h2>{projects[params.id].fh3}</h2>}
          {projects[params.id].reas1 && (
            <ol>
              {projects[params.id].reas1.map((reason, index) => {
                return <li key={index}>{reason}</li>;
              })}
            </ol>
          )}
          <br />
          {projects[params.id].fh4 && <h2>{projects[params.id].fh4}</h2>}
          {projects[params.id].des2 && <Text>{projects[params.id].des2}</Text>}
          {projects[params.id].code && <ul>{projects[params.id].code}</ul>}
          {projects[params.id].des3 && <Text>{projects[params.id].des3}</Text>}
          {projects[params.id].conclusion && (
            <Text>{projects[params.id].conclusion}</Text>
          )}
          <br />
          {projects[params.id].coffee && <Text display='flex' alignSelf='center' w='fit-content' h='fit-content'>{projects[params.id].coffee}</Text> }
          <br />
        </Box>
      </Box>
    </>
  );
}

export default CardDetail;
