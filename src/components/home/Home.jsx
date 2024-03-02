import {
  Box,
  Button,
  Flex,
  Img,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import imageP from "../../../public/images/imageP.png";
import { forwardRef, useContext, useEffect } from "react";
import RefContext from "../../context/RefContext";
import { motion, useAnimation, useInView } from "framer-motion";
import { textVariants, iconVars } from "../animations/Animations";
import { socials, infoHome } from "../data/Data";
import { Helmet } from "react-helmet";

function Home() {
  const { homeRef } = useContext(RefContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const isInView = useInView(homeRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView]);

  return (
    <Flex
      ref={homeRef}
      id="home"
      w={"100%"}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={{ base: "column-reverse", md: "row" }}
      // marginTop={"2"}
      marginBottom={{ base: "35", md: "2" }}
    >
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Box
        display={"flex"}
        flex={"1"}
        flexDir={"column"}
        w={{ base: "100%", md: "50%" }}
        h={{ base: "60%", md: "100%" }}
        gap={"2rem"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Box display={"flex"} w="100%" flexDir={"column"}>
          <Box lineHeight={1}>
            <Text
              fontSize={"2xl"}
              as={motion.p}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="poppins-regular"
            >
              {infoHome.title}
            </Text>
            <Text className="ubuntu-bold" fontSize={"5xl"} fontWeight={"bold"}>
              {infoHome.name}
            </Text>
          </Box>
          <Text
            className="poppins-regular"
            fontSize={"1.2rem"}
            mt={"10px"}
            lineHeight={1.2}
          >
            {infoHome.description}
          </Text>
        </Box>
        <Button
          bg={colorMode === "light" ? "#00A9FF" : "#cdf5fd"}
          as={motion.button}
          size="md"
          w={"fit-content"}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition="0.3s linear"
          className="poppins-regular"
        >
          Download CV
        </Button>
        <Stack
          direction={"row"}
          spacing={4}
          mt={{ base: "3rem", md: "3rem" }}
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          {socials.map((social, index) => (
            <Text
              color={colorMode === "light" ? "#00A9FF" : "#cdf5fd"}
              _hover={{ color: "red.200" }}
              key={index}
              fontSize={"3xl"}
              cursor={"pointer"}
              as={motion.p}
              custom={index}
              variants={iconVars}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <a href={social.lien}>
                <i className={social.name}></i>
              </a>
            </Text>
          ))}
        </Stack>
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        h={{ base: "40%", md: "100%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Img
          src={imageP}
          borderRadius="30"
          alt="imageP"
          w={{ base: "60%", md: "auto" }}
          h={"fit-content"}
          justifyContent={"center"}
          alignSelf={{ base: "flex-end", md: "center" }}
        />
      </Box>
    </Flex>
  );
}
export default forwardRef(Home);
