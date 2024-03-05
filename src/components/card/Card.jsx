import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Cards({ projects, index }) {
  const { colorMode } = useColorMode();

  const lightText = "black";
  const darkText = "white";
  const bgLight = "#a9a9a9";
  const bgDark = "#1D3C56";

  return (
    <Card
      as={motion.div}
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50,
        scale: 0.8, // Start small
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        scale: 1, // Animate to full size
        transition: {
          duration: 1, // Animation duration
          // type: "spring",
          // stiffness: 120,
        },
      }}
      viewport={{ once: true }}
      bg={colorMode === "light" ? bgLight : bgDark}
      color={colorMode === "light" ? lightText : darkText}
      maxW="sm"
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <HStack justifyContent="space-between">
            <Heading className="ubuntu-regular" size="md">
              {projects.title}
            </Heading>
            <Button className="space-mono-regular">
              {projects.typePro[0]}
            </Button>
          </HStack>
          <Text className="poppins-regular">{projects.description}</Text>
          <ButtonGroup className="ubuntu-regular" spacing="2">
            {projects.technologies.map((tech, index) => {
              return (
                <Button key={index} size="sm">
                  {tech}
                </Button>
              );
            })}
          </ButtonGroup>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          w="100%"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Button
            variant="solid"
            bg={colorMode === "light" ? darkText : "#cdf5fd"}
            color={colorMode === "light" ? lightText : "#265073"}
          >
            <a href={projects.gitHref}>
              <i className={projects.iconGit}></i>
            </a>
          </Button>
          <Button
            variant="ghost"
            bg={colorMode === "light" ? darkText : "#cdf5fd"}
            color={colorMode === "light" ? lightText : "#265073"}
          >
            <a href={projects.liveHref}>
              <i className={projects.iconLive}></i>
            </a>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
