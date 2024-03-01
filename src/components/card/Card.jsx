import React from "react";
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
} from "@chakra-ui/react";

export default function Cards({ projects }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <HStack justifyContent='space-between'>
          <Heading className="ubuntu-regular" size="md">{projects.title}</Heading>
          <Button className="space-mono-regular">{projects.typePro[0]}</Button>
          </HStack>
          <Text className="poppins-regular">{projects.description}</Text>
          <ButtonGroup className="space-mono-regular" spacing="2">
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
        <ButtonGroup w='100%' display='flex' flexDir='row' justifyContent='space-between' >
          <Button variant="solid" colorScheme="blue">
            <a href={projects.gitHref}>
              <i className={projects.iconGit}></i>
            </a>
          </Button>
          <Button variant="ghost" colorScheme="blue">
            <a href={projects.liveHref}>
              <i className={projects.iconLive}></i>
            </a>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
