import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { socials } from "../data/Data";

function Footer() {
  return (
    <Flex
      h={{ base: "10rem", md: "20rem" }}
      w="100%"
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
        <br />
        <Divider />
      <Box
        w={{ base: "100%", md: "50%" }}
        display="flex"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Text className="space-mono-regular">© 2024 10d3</Text>
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="row"
        gap={4}
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        {socials.map((social, index) => (
          <Text fontSize="xl" key={index}>
            <a href={social.lien}>
              <i className={social.name}></i>
            </a>
          </Text>
        ))}
      </Box>
    </Flex>
  );
}

export default Footer;
