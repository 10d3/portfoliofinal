import { useContext } from "react";
import RefContext from "../../context/RefContext";
import { Box, Heading, Text } from "@chakra-ui/react";

function Contact() {
  const { contactRef } = useContext(RefContext);
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
      link:'',
    },
    {
        name: "fa-brands fa-telegram",
        link: "",
    }
  ]
  return (
    <Box
      ref={contactRef}
      id="contact"
      minH="98vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Heading>Get in touch</Heading>
        <br />
        <Text className="poppins-regular" fontSize='xl'>I’m always up for a chat!</Text>
        <Text className="poppins-regular" fontSize='xl'>I can be reached at <a href={contact[0].link}>marcherleyantoine@gmail.com</a> or give me a shout on social media.</Text>
        <Box display='flex' flexDir='row' gap={4}>
        {
            contact.map((item, index) => (
                <Text fontSize='4xl' key={index}>
                    <a href={item.link}><i className={item.name}></i></a>
                </Text>
            ))
        }
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
