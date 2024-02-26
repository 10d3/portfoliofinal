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

function useMobileView() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default function Navbar() {
  const { homeRef, aboutRef, portfolioRef, blogRef } = useContext(RefContext);
  const isMobile = useMobileView();

  const menuVars = {
    initial: {
      scaleY: 0,
      transition: {
        staggerChildren: 0.9,
      },
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
        type: "spring",
        // stiffness: 120,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "60vh",
    },
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        // stiffness: 120,
      },
    },
  };

  const links = [
    { name: "Home", href: homeRef },
    { name: "Portfolio", href: portfolioRef },
    { name: "About", href: aboutRef },
    // { name: "Blog", href: blogRef },
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
        as={motion.div}
        variants={isMobile ? menuVars : {}}
        initial={isMobile ? "initial" : ""}
        animate={isMobile ? (isOpen ? "animate" : "exit") : ""}
        style={{ originY: 0 }}
        overflow={{ base: "hidden", md: "visible" }}
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
            as={motion.div}
            variants={isMobile ? linkVars : {}}
            initial={isMobile ? "initial" : ""}
            animate={isMobile ? (isOpen ? "open" : "") : ""}
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
