import { Box, Button, Flex, Img, Stack, Text } from "@chakra-ui/react";
import imageP from "../../../public/images/imageP.png";
import { forwardRef, useContext, useEffect } from "react";
import RefContext from "../../context/RefContext";
import { motion, useAnimation, useInView } from "framer-motion";

function Home() {
  const { homeRef } = useContext(RefContext);

  const isInView = useInView(homeRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView)
    }
  }, [isInView])

  const socials = [
    { name: "fa-brands fa-github", lien: "https://github.com/10d3" },
    {
      name: "fa-brands fa-linkedin",
      lien: "https://www.linkedin.com/in/aherleym/",
    },
    // { name: "fa-brands fa-twitter", lien: "" },
    // { name: "fa-brands fa-instagram", lien: "" },
  ];
  return (
    <Flex
      ref={homeRef}
      id="home"
      w={"100%"}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      // mx={{ base: "15px", md: "50px" }}
      // pl={{ base: "auto", md: "30px" }}
      flexDir={{ base: "column-reverse", md: "row" }}
      marginTop={"2"}
      marginBottom={{ base: "35", md: "2" }}
    >
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
        <Box display={"flex"} flexDir={"column"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Hey I Am{" "}
          </Text>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Herley Antoine
          </Text>
          <Text fontSize={"14px"} fontWeight={"100"} mt={"10px"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla
            vitae, voluptate natus odit accusantium nemo adipisci? Porro est hic
            nulla, neque illo quibusdam dolor libero quidem dolorem, consectetur
            fuga.
          </Text>
        </Box>
        <Button
          bg="blue.300"
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
              color={"purple.400"}
              _hover={{ color: "red.200" }}
              key={index}
              fontSize={"3xl"}
              cursor={"pointer"}
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
        // h={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Img
          src={imageP}
          alt="imageP"
          w={{ base: "60%", md: "auto" }}
          h={"fit-content"}
          alignSelf={{ base: "flex-end", md: "center" }}
        />
      </Box>
    </Flex>
  );
}
export default forwardRef(Home);
