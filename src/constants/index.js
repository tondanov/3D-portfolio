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
  lectureeasily,
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
    name: "Search Bar",
    description: "Projekt, který mi ukázal jak pracovat s API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: searchbar,
    source_code_link: "https://github.com/tondanov/SearchBar-API",
  },
];

export { services, technologies, experiences, projects };
