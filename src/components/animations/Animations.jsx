export const textVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
        },
    },
}

export const boxVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
}

export const filtButtonVars = {
    hidden:{
      opacity: 0,
      scaleY: 0,
      // transition: { delay: custom * 0.1 },
    },
    animate: (index) => ({
      opacity: 1,
      scaleY: 1,
      transition: { delay: index * 0.5 },
    }),
  };