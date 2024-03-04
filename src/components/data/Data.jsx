import { Tag } from "@chakra-ui/react";

// start home section
export const infoHome = {
  title: "Hey I Am",
  name: "Marc-Herley Antoine",
  description: (
    <>
      a passionate <span style={{ color: "red" }}>front-end developer</span>{" "}
      from Haiti. My goal is to create{" "}
      <span style={{ color: "red" }}>impactful</span> and{" "}
      <span style={{ color: "red" }}>functional</span> digital experiences.
      Welcome to my <span style={{ color: "red" }}>portfolio</span>, where you can explore my work and discover how I
      can help you achieve your <span style={{ color: "red" }}>online goals</span>.
    </>
  ),
};

export const socials = [
  { name: "fa-brands fa-github", lien: "https://github.com/10d3" },
  {
    name: "fa-brands fa-linkedin",
    lien: "https://www.linkedin.com/in/aherleym/",
  },
  // { name: "fa-brands fa-twitter", lien: "" },
  // { name: "fa-brands fa-instagram", lien: "" },
];

// start portfolio section
export const seaBut = ["Design", "Front", "Back", "Cyber", "all"];

export const projects = [
  {
    id: 0,
    title: "Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    technologies: ["react", "node", "express", "mongo"],
    image: "",
    liveHref: "",
    gitHref: "",
    iconGit: "fa-brands fa-github",
    iconLive: "fa-solid fa-arrow-up-right-from-square",
    typePro: ["Design", "all"],
  },
  {
    id: 1,
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    technologies: ["react", "node", "express", "mongo"],
    image: "",
    liveHref: "",
    gitHref: "",
    iconGit: "fa-brands fa-github",
    iconLive: "fa-solid fa-arrow-up-right-from-square",
    typePro: ["Front", "all"],
  },
  {
    id: 2,
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    technologies: ["react", "node", "express", "mongo"],
    image: "",
    liveHref: "",
    gitHref: "",
    iconGit: "fa-brands fa-github",
    iconLive: "fa-solid fa-arrow-up-right-from-square",
    typePro: ["Back", "all"],
  },
  {
    id: 3,
    title: "project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    technologies: ["react", "node", "express", "mongo"],
    image: "",
    liveHref: "",
    gitHref: "",
    iconGit: "fa-brands fa-github",
    iconLive: "fa-solid fa-arrow-up-right-from-square",
    typePro: ["Cyber", "all"],
  },
];

// start about section
export const info = [
  {
    title: "UI/UX Design",
    description: "At in proin consequat ut cursus venenatis sapien.",
    skills: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    title: "Full-Stack",
    description: "At in proin consequat ut cursus venenatis sapien.",
    skills: ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"],
  },
  {
    title: "Cyber Security",
    description: "At in proin consequat ut cursus venenatis sapien.",
    skills: ["Kali Linux", "Nmap", "Wireshark", "Metasploit"],
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "Figma",
  "Redux",
  "Chakra UI",
  "Bootstrap",
  "Tailwind",
  "Next.js",
  "Git",
  "Github",
  "Gitlab",
];
export const aboutMe = (
  <>
    Hello, I&apos;m Herley, a 21-year-old with a profound passion for computer
    science and technology. From a young age, I&apos;ve been deeply curious
    about all things related to computing. Growing up in a country where
    accessing a computer and electricity posed significant challenges, I was
    fortunate to have older cousins who shared my curiosity and had access to
    computer resources, which I leveraged for my own learning.
    <br />
    <br /> Navigating this profession in a country like Haiti has been a
    significant challenge. Despite the obstacles, access to the internet has
    been pivotal in my education. It has enabled me to study and acquire skills
    in software development, website creation, and phone repair. Currently,
    I&apos;m focused on expanding my expertise in cybersecurity.
    <br />
    <br /> Throughout my journey, I&apos;ve had the opportunity to work as a
    freelancer with individuals from various parts of the world. In this
    portfolio, you&apos;ll find a showcase of the diverse projects and websites
    I&apos;ve developed.
    <br />
    <br /> I am dedicated to my professional and personal growth and am open to
    new opportunities and challenges. Please don&apos;t hesitate to reach out to
    me for any inquiries or potential collaborations.
  </>
);
