export const iconVars = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: custom * 0.4,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export const skillsVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      // duration: custom * 1,
      type: "spring",
      stiffness: 120,
    },
  }),
};
export const boxMenuVars = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const menuVars = {
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

export const linkVars = {
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
};

export const boxVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const filtButtonVars = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    // transition: { delay: custom * 0.1 },
  },
  animate: (index) => ({
    opacity: 1,
    scaleY: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  }),
};
