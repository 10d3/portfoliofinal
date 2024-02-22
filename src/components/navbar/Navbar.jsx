import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import RefContext from "../../context/RefContext";

export default function Navbar() {
  const { homeRef, aboutRef, portfolioRef, blogRef } = useContext(RefContext);

  const links = [
    { name: "Home", href: homeRef },
    { name: "Portfolio", href: portfolioRef },
    { name: "About", href: aboutRef },
    { name: "Blog", href: blogRef },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    setIsLightMode(colorMode === "light");
  }, [colorMode]);

  return (
    <Flex
      as="nav"
      h={{ base: isOpen ? "100%" : "fit-content", md: "fit-content" }}
      w={{ base: isOpen ? "100%" : "100%", md: "100%" }}
      pos={{ base: isOpen ? "absolute" : "sticky", md: "sticky" }}
      justifyContent="space-between"
      alignItems="center"
      top="0%"
      paddingTop="2"
      paddingBottom="2"
      px={{ base: "5%", md: "15%" }}
      flexDir={{ base: "column", md: "row" }}
      zIndex="4"
      // bg={{ base: isOpen ? "red.500" : "white", md: "white" }}
      bg={colorMode === "light" ? "gray.300" : "gray.700"}
    >
      <Box
        display="flex"
        flexDir={{ base: "row" }}
        justifyContent={{ base: "space-between" }}
        alignItems={"center"}
        w="100%"
      >
        <Text className="brand-text">Herley</Text>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
      </Box>
      <Box
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        flexDir={{ base: "column", md: "row" }}
        h={{ base: "50%", md: "auto" }}
        zIndex={{ base: "4", md: "0" }}
        pos="relative"
        alignSelf="center"
      >
        {links.map((link, index) => (
          <Text
            key={index}
            // target={link.href}
            px="10px"
            color="purple.400"
            w="100%"
            h="25%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="2xl"
            fontWeight="bold"
            cursor={"pointer"}
            onClick={isOpen ? onClose : onOpen}
          >
            <a
              onClick={() =>
                link.href.current.scrollIntoView({ behavior: "smooth" })
              }
              target={link.href}
              className="link"
            >
              {link.name}
            </a>
          </Text>
        ))}
        <Button onClick={toggleColorMode}>
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
      <Box
        display={{ base: isOpen ? "box" : "none", md: "none" }}
        h={"10%"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text>2024@Herley</Text>
      </Box>
    </Flex>
  );
}
