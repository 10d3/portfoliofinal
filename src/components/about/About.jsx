import { Flex, Box, Text, Card, CardBody, Button } from "@chakra-ui/react";
import { forwardRef, useContext } from "react";
import RefContext from "../../context/RefContext";
// import Milestones from "../timeline/Timeline";
import { motion } from "framer-motion";

function About() {
  const { aboutRef } = useContext(RefContext);

  const info = [
    {
      title: "UI/UX Design",
      description: "At in proin consequat ut cursus venenatis sapien.",
    },
    {
      title: "Front Developer",
      description: "At in proin consequat ut cursus venenatis sapien.",
    },
    {
      title: "Cyber Security",
      description: "At in proin consequat ut cursus venenatis sapien.",
    },
  ];

  const skillsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Figma",
    "Redux",
    "Chakra UI",
    "Bootstrap",
    "Tailwind",
    "Next.js",
    "Git",
    "Github",
    "Gitlab",
  ];

  return (
    <Flex
      ref={aboutRef}
      id="about"
      w={"100%"}
      pos={"relative"}
      h={"fit-content"}
      minH="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      // mx={{ base: "15px", md: "50px" }}
      // pl={{ base: "auto", md: "30px" }}
      flexDir="column"
      // my={{base:"35rem",md:"14rem"}}
    >
      <Box
        display="flex"
        h={{ base: "80%", md: "80%" }}
        w="100%"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "50%", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>education</Text>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "100%", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text>My Skill</Text>
          <Box
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            alignItems="center"
            h={{base:'100%',md:"40%"}}
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
            custom={index}
            variants={skillsVariants}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
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
