import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/BlogData";
import {
  Box,
  Button,
  Divider,
  Heading,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Helmet } from "react-helmet";

function CardDetail() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  const lightText = "black";
  const darkText = "white";
  const bgLight = "#a9a9a9";
  const bgDark = "#1D3C56";

  const params = useParams();
  return (
    <Box
    bg={colorMode === "light" ?  "#efefef" : "#265073"}
      display={"flex"}
      alignItems={"center"}
      flexDir={"column"}
      h={"100vh"}
      overflow={"auto"}
      w={"100vw"}
    >
      <Box
        as="nav"
        pos={"fixed"}
        right='0'
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
        <Helmet>
          <title>{projects[params.id].title}</title>
          <meta name="description" content={projects[params.id].description} />
          <meta name="keywords" content={projects[params.id].keyWords} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={projects[params.id].title} />
          <meta
            property="og:description"
            content={projects[params.id].description}
          />
          <meta property="og:image" content={projects[params.id].img} />
          <meta property="og:url" content="URL" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Link to="/blog">
          <Button className="ubuntu-bold">BACK</Button>
        </Link>
        <Button bg={colorMode === "light" ?  "#efefef" : "#265073"} onClick={toggleColorMode}>
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
        pos="relative"
        // bg={colorMode === "light" ? "#cdf5fd" : "#265073"}
      >
        <Heading
          mt={{ base: "4rem", md: "4rem" }}
          alignSelf={"start"}
          className="ubuntu-regular"
        >
          {projects[params.id].title}
        </Heading>
        <br />
        <Divider />
        <br />
        {projects[params.id].img && (
          <Img
            w={{ base: "100%", md: "fit-content" }}
            h={{ base: "fit-content", md: "35%" }}
            src={projects[params.id].img}
          />
        )}
        <br />
        <Box
          className="poppins-regular"
          maxW="100%"
          w="fit-content"
          textAlign={"justify"}
        >
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
          {projects[params.id].coffee && (
            <Text
              display="flex"
              alignSelf="center"
              w="fit-content"
              h="fit-content"
            >
              {projects[params.id].coffee}
            </Text>
          )}
          <br />
        </Box>
      </Box>
    </Box>
  );
}

export default CardDetail;
