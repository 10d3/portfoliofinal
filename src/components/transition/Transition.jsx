import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Transition(Ogcomponent) {
    const styleIn = {
        top: 0,
        position: "fixed",
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        "transform-origin": "top",
    }

    const styleout = {
        top: 0,
        position: "fixed",
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        "transform-origin": "bottom",
    }
  return (
    <>
      <Ogcomponent />
      <Box
        className={styleIn}
        as={motion.div}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <Box
        className={styleout}
        as={motion.div}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

export default Transition;
