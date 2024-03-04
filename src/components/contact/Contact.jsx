import { useContext } from "react";
import RefContext from "../../context/RefContext";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  const { contactRef } = useContext(RefContext);

  const { colorMode } = useColorMode();
  const contact = [
    {
      name: "fa-solid fa-inbox",
      link: "mailto:marcherleyantoine@gmail.com",
    },
    {
      name: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/marcherley-antoine/",
    },
    {
      name: "fa-brands fa-whatsapp",
      link: "",
    },
    {
      name: "fa-brands fa-telegram",
      link: "",
    },
  ];

  return (
    <Box
      ref={contactRef}
      id="contact"
      minH="90vh"
      h="fit-content"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mb={4}
    >
      {/* <Heading mb='4' fontSize='5xl' className="ubuntu-regular">Contact</Heading> */}
      <Box>
        <Heading fontSize="4xl" className="ubuntu-regular">
          GET IN TOUCH
        </Heading>
        <br />
        <Text className="poppins-regular" fontSize="1rem">
          I’m always up for a chat!
        </Text>
        <Text className="poppins-regular" fontSize="1rem">
          I can be reached at{" "}
          <a
            style={{ color: "red" }}
            className="poppins-regular-italic"
            href={contact[0].link}
          >
            marcherleyantoine@gmail.com
          </a>{" "}
          or give me a shout on social media.
        </Text>
        <Box display="flex" flexDir="row" gap={4}>
          {contact.map((item, index) => (
            <Text
              color={colorMode === "light" ? "black" : "#cdf5fd"}
              fontSize="4xl"
              key={index}
            >
              <a href={item.link}>
                <i className={item.name}></i>
              </a>
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
