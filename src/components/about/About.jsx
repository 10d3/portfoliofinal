import { Flex, Box, Text, Card, CardBody } from "@chakra-ui/react";
import { forwardRef, useContext } from "react";
import RefContext from "../../context/RefContext";
import Milestones from "../timeline/Timeline";

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


  return (
    <Flex
      ref={aboutRef}
      id="about"
      w={"100%"}
      pos={"relative"}
      h={"fit-content"}
      // minH="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      // mx={{ base: "15px", md: "50px" }}
      // pl={{ base: "auto", md: "30px" }}
      flexDir='column'
      // my={{base:"35rem",md:"14rem"}}
    >
      <Box
        display="flex"
        h={{base:'fit-content',md:"80%"}}
        w="100%"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "fit-content", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>education</Text>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "fit-content", md: "100%" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>My Skill</Text>
        </Box>
      </Box>
      <Box w="100%" display="flex" flexDir={{ base: "column", md: "row" }} gap={'4'}>
        {info.map((item, index) => (
          <Card key={index} h='auto'>
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
