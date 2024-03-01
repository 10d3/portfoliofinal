import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { forwardRef, useContext, useEffect, useState } from "react";
import RefContext from "../../context/RefContext";
import Cards from "../card/Card";
import { motion, useInView, useAnimation } from "framer-motion";
import {projects, seaBut} from '../data/Data'

function Portfolio() {
  const { portfolioRef } = useContext(RefContext);

  const [pent, setPent] = useState("all");

  const filt = projects.filter((project) => project.typePro.includes(pent));
  // .sort((a, b) => (b.title - a.title ? 1 : -1 ));

  const isInView = useInView(portfolioRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      console.log(isInView);
    }
  }, [isInView]);

  const filtButtonVars = {
    hidden:{
      opacity: 0,
      scaleY: 0,
      // transition: { delay: custom * 0.1 },
    },
    animate: (index) => ({
      opacity: 1,
      scaleY: 1,
      transition: { delay: index * 0.2 },
    }),
  };

  return (
    <Flex
      pos={"relative"}
      w={"100%"}
      h={"fit-content"}
      alignItems={"center"}
      justifyContent={"center"}
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
        pt={14}
      >
        <Text className="ubuntu-regular" fontSize="4xl" alignSelf="left">
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
              as={motion.div}
              custom={index}
              variants={filtButtonVars}
              initial="hidden"
              whileInView="animate"
              viewport={{once: true}}
              width="24.5%"
              key={index}
              fontSize="0.8rem"
              fontWeight="bold"
              color="blue.500"
              onClick={() => {
                setPent(item);
              }}
              className="space-mono-regular"
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
