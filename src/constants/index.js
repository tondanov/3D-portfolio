import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  cvapp,
  eshop,
  searchbar,
  awwwards,
  lectureeasily,
  travelapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "O mně",
  },
  {
    id: "work",
    title: "Projekty",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Stále čekám na první zkušenost",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [""],
  },
];

const projects = [
  {
    name: "CV Application",
    description:
      "CV Application byl můj první projekt, ve kterém jsem pracoval s Reactem.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: cvapp,
    source_code_link: "https://github.com/tondanov/CV-Application",
    source_live_link: "https://cv-application-ivory.vercel.app",
  },
  {
    name: "LectureEasily",
    description: "Jednoduchá  stránka s použitím Reactu a TailwindCSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lectureeasily,
    source_code_link: "https://github.com/tondanov/LectureEasily",
    source_live_link: "https://lecture-easily.vercel.app",
  },
  {
    name: "Awwwards",
    description:
      "Projekt, ve kterém jsem převáděl návrh z Figmy do funkčního webu ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: awwwards,
    source_code_link: "https://github.com/tondanov/Awwwards",
    source_live_link: "https://awards-pi.vercel.app",
  },
  {
    name: "Travel App",
    description: "Jednoduchá  stránka s použitím NextJS a TailwindCSS ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelapp,
    source_code_link: "https://github.com/tondanov/travel-app",
    source_live_link: "https://travel-app-omega-three.vercel.app",
  },
];

export { services, technologies, experiences, projects };
