import { Flex, Box, Text, Card, CardBody, Button } from "@chakra-ui/react";
import { forwardRef, useContext } from "react";
import RefContext from "../../context/RefContext";
// import Milestones from "../timeline/Timeline";
import { motion } from "framer-motion";
import { info, skills } from "../data/Data";
import {skillsVariants} from '../animations/Animations'

function About() {
  const { aboutRef } = useContext(RefContext);

  return (
    <Flex
      // ref={aboutRef}
      // id="about"
      w={"100%"}
      pos={"relative"}
      h={"fit-content"}
      minH="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      flexDir="column"
    >
      <Text fontSize="4xl" alignSelf="left" mt={14} ref={aboutRef} id="about">
        About Me
      </Text>
      <Box
        display="flex"
        h={{ base: "80%", md: "80%" }}
        w="100%"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "65%" }}
          h={{ base: "50%", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>education</Text>
        </Box>
        <Box
          w={{ base: "100%", md: "35%" }}
          h={{ base: "100%", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text alignSelf="left">Use for Work and Fun</Text>
          <Box
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            alignItems="center"
            h={{ base: "100%", md: "40%" }}
            justifyContent="space-between"
          >
            {skills.map((skill, index) => (
              <Button
                as={motion.button}
                custom={index}
                variants={skillsVariants}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true }}
                key={index}
              >
                {skill}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        w="100%"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        gap={"4"}
        mb={2}
      >
        {info.map((item, index) => (
          <Card
            as={motion.div}
            custom={index * 1.5}
            variants={skillsVariants}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: false }}
            key={index}
            h="auto"
          >
            <CardBody>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {item.title}
              </Text>
              <Text fontSize={"14px"} fontWeight={"100"} mt={"10px"}>
                {item.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}
export default forwardRef(About);
