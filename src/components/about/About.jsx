import { Flex, Box, Text, Card, CardBody, Button, CardHeader } from "@chakra-ui/react";
import { forwardRef, useContext } from "react";
import RefContext from "../../context/RefContext";
// import Milestones from "../timeline/Timeline";
import { motion } from "framer-motion";
import { info, skills, aboutMe } from "../data/Data";
import { skillsVariants } from "../animations/Animations";

function About() {
  const { aboutRef } = useContext(RefContext);

  return (
    <Flex
      // ref={aboutRef}
      // id="about"
      w={"100%"}
      pos={"relative"}
      h={"fit-content"}
      alignItems={"center"}
      // justifyContent={"center"}
      flexDir="column"
    >
      <Text
        className="ubuntu-regular"
        fontSize="4xl"
        display="flex"
        textAlign="left"
        alignSelf="left"
        mt={10}
        ref={aboutRef}
        id="about"
      >
        About Me
      </Text>
      <Box
        display="flex"
        h={{ base: "auto", md: "80%" }}
        w="100%"
        flexDir={{ base: "column", md: "column" }}
        mb={{ base: "0", md: "4" }}
      >
        <Box
          w={{ base: "100%", md: "100%" }}
          h={{ base: "auto", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space"}
        >
          <Text className="poppins-regular" textAlign="justify">
            {aboutMe}
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "100%" }}
          h={{ base: "fit-content", md: "100%" }}
          my={{ base: "4", md: "0" }}
          display="none"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          ml={{ base: "0", md: "4" }}
        >
          <Text className="ubuntu-regular" textAlign="left">
            Use for Work and Fun
          </Text>
          <Box
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            alignItems="center"
            h={{ base: "15rem", md: "40%" }}
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
                className="space-mono-regular"
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
            <CardHeader>
              <Text
                className="ubuntu-regular"
                fontSize={"2xl"}
                fontWeight={"bold"}
              >
                {item.title}
              </Text>
              <Text
                className="poppins-regular"
                fontSize={"14px"}
                fontWeight={"100"}
                mt={"10px"}
              >
                {item.description}
              </Text>
            </CardHeader>
            {/* <CardBody>
              <Box
                display="flex"
                flexDir="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                {item.skills.map((skill, index) => (
                  <Button
                    key={index}
                    className="space-mono-regular"
                    fontSize={"14px"}
                    fontWeight={"100"}
                  >
                    {skill}
                  </Button>
                ))}
              </Box>
            </CardBody> */}
          </Card>
        ))}
      </Box>
    </Flex>
  );
}
export default forwardRef(About);
