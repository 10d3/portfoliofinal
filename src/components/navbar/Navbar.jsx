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
import { motion } from "framer-motion";
import { boxMenuVars, menuVars, linkVars } from "../animations/Animations";
import { Link } from "react-router-dom";
import "../../font.css";

function useMobileView() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return isMobile;
}

export default function Navbar() {
  const { homeRef, aboutRef, portfolioRef, contactRef } =
    useContext(RefContext);
  const isMobile = useMobileView();

  const links = [
    { name: "Home", href: homeRef },
    { name: "Portfolio", href: portfolioRef },
    { name: "About", href: aboutRef },
    { name: "Contact", href: contactRef },
  ];

  const lightText = "black";
  const darkText = "white";
  const bgLight = "#a9a9a9";
  const bgDark = "#1D3C56";

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
      pos={{ base: isOpen ? "absolute" : "absolute", md: "sticky" }}
      justifyContent="space-between"
      alignItems="center"
      top="0%"
      paddingTop="2"
      paddingBottom="2"
      px={{ base: "5%", md: "15%" }}
      flexDir={{ base: "column", md: "row" }}
      zIndex="4"
      // bg={{ base: isOpen ? "red.500" : "white", md: "white" }}
      bg={colorMode === "light" ? bgLight : bgDark}
      transition="background-color 1s"
      color={colorMode === "light" ? lightText : darkText}
    >
      <Box
        display="flex"
        flexDir={{ base: "row" }}
        justifyContent={{ base: "space-between" }}
        alignItems={"center"}
        w="100%"
      >
        <Text
          className="ubuntu-bold"
          as={motion.p}
          variants={boxMenuVars}
          initial="initial"
          animate="animate"
          fontSize={"xl"}
          cursor={"pointer"}
        >
          <a
            onClick={() =>
              links[0].href.current.scrollIntoView({ behavior: "smooth" })
            }
            target={links[0].href}
            className="link"
          >
            /10D3
          </a>
        </Text>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            bg={colorMode === "light" ?  "#efefef" : "#265073"}
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
        as={motion.div}
        variants={isMobile ? menuVars : {}}
        initial={isMobile ? "initial" : ""}
        animate={isMobile ? (isOpen ? "animate" : "exit") : ""}
        style={{ originY: 0 }}
        overflow={{ base: "hidden", md: "visible" }}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {links.map((link, index) => (
          <Text
            key={index}
            // target={link.href}
            px={{ base: "0", md: "10px" }}
            color={colorMode === "light" ? "black" : "white"}
            w="100%"
            // h="25%"
            h={"fit-content"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "2xl", md: "md" }}
            // fontWeight="bold"
            cursor={"pointer"}
            onClick={isOpen ? onClose : onOpen}
            as={motion.div}
            variants={isMobile ? linkVars : {}}
            initial={isMobile ? "initial" : ""}
            animate={isMobile ? (isOpen ? "open" : "") : ""}
            className="ubuntu-bold"
          >
            <a
              onClick={() =>
                link.href.current.scrollIntoView({ behavior: "smooth" })
              }
              target={link.href}
              className="link"
            >
              {link.name.toUpperCase()}
            </a>
          </Text>
        ))}
        <Link className="link" to="/blog">
          <Text
            className="ubuntu-bold"
            fontSize={{ base: "2xl", md: "md" }}
            color={colorMode === "light" ? lightText : darkText}
            // fontFamily={'"Space Mono", monospace'}
            // fontWeight={'700'}
          >
            BLOG
          </Text>
        </Link>
        <Button
          bg={colorMode === "light" ? bgLight : bgDark}
          color={colorMode === "light" ? lightText : darkText}
          onClick={toggleColorMode}
          fontSize={{ base: "2xl", md: "md" }}
        >
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
        <Text className="ubuntu-bold" color={colorMode === "light" ? lightText : darkText}>©2024 10D3</Text>
      </Box>
    </Flex>
  );
}
