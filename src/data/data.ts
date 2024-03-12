import icon1 from "src/assets/icons/html5.webp";
import icon2 from "src/assets/icons/css.webp";
import icon3 from "src/assets/icons/javascript.webp";
import icon4 from "src/assets/icons/react.webp";
import icon5 from "src/assets/icons/vuejs.webp";
import icon6 from "src/assets/icons/tailwind.svg";
import icon7 from "src/assets/icons/bootstrap.webp";
import icon8 from "src/assets/icons/sass.webp";
import icon9 from "src/assets/icons/vite.svg";
import icon10 from "src/assets/icons/vscode.webp";
import icon11 from "src/assets/icons/figma.webp";
import icon12 from "src/assets/icons/git.webp";
import img1 from "src/assets/mockups/omnifood.webp";
import img2 from "src/assets/mockups/portfolio.webp";
import img3 from "src/assets/mockups/hj.webp";
import img4 from "src/assets/mockups/clipboard.webp";

export const skillIcons = [
  { id: 1, name: "HTML", icon: icon1 },
  { id: 2, name: "CSS", icon: icon2 },
  { id: 3, name: "JAVASCRIPT", icon: icon3 },
  { id: 4, name: "REACT", icon: icon4 },
  { id: 5, name: "VUE", icon: icon5 },
  { id: 6, name: "TAILWIND-CSS", icon: icon6 },
  { id: 7, name: "BOOTSTRAP", icon: icon7 },
  { id: 8, name: "SASS", icon: icon8 },
  { id: 9, name: "VITE", icon: icon9 },
  { id: 10, name: "VS CODE", icon: icon10 },
  { id: 11, name: "FIGMA", icon: icon11 },
  { id: 12, name: "GIT", icon: icon12 },
];

export type SkillProps = {
  images: {
    id: number;
    name: string;
    icon: string;
  };
};

export const projects = [
  {
    id: 9,
    img: img1,
    desc: "Omnifood AI, my React and Tailwind Css project. With redesigned and new sections, I've revamped this site to offer a fresh and improved experience.",
    tech: ["REACT", "TAILWIND-CSS", "TYPESCRIPT"],
    title: "Omnifood-Ai",
    github: "https://github.com/jmmaglonzo/Omnifood-Reacts",
    link: "https://omnifood-react.vercel.app/",
  },
  {
    id: 8,
    img: img2,
    desc: "Welcome to my portfolio powered by TypeScript plus React and Tailwind. Discover my responsive projects, explore skills, and let's discuss collaboration possibilities for a modern user experience.",
    tech: ["REACT", "TAILWIND-CSS", "TYPESCRIPT"],
    title: "PORTFOLIO",
    github: "https://github.com/jmmaglonzo/Omnifood-Reacts",
    link: "https://lonzo-react.vercel.app/",
  },
  {
    id: 7,
    img: img3,
    desc: "Developed using Vue.js for dynamic interactivity, Vue Router for seamless navigation, and Tailwind CSS for a modern, visually appealing design.",
    tech: ["VUE", "VUE-ROUTER", "TAILWIND-CSS"],
    title: "HJ LAYOUT & DESIGNS",
    github: "https://github.com/jmmaglonzo/HJLD",
    link: "https://hjld.vercel.app/",
  },
  {
    id: 6,
    img: img4,
    desc: "My First Tailwind CSS project reflects my learning journey and growth, conquering a Front-End Mentor challenge. Explore evolving web development skills through engaging, responsive designs.",
    tech: ["HTML", "TAILWIND-CSS"],
    title: "CLIPBOARD LANDING PAGE",
    github: "https://github.com/jmmaglonzo/Clipboard-Landing-Page",
    link: "https://clipboard-landing-page-azure.vercel.app/",
  },
];

export const navLinks = [
  {
    link: "Home",
    hash: "hero",
  },
  {
    link: "Skills",
    hash: "skills",
  },
  {
    link: "Projects",
    hash: "projects",
  },
  {
    link: "Contact",
    hash: "contact",
  },
];

export const socials = [
  {
    links: "https://github.com/jmmaglonzo",
    iconNames: "FaGitHub",
  },
  {
    links: "https://www.linkedin.com/in/jmmaglonzo/",
    iconNames: "FaLinkedin",
  },
  {
    links: "https://www.frontendmentor.io/profile/jmmaglonzo",
    iconNames: "SiFrontendmentor",
  },
  {
    links: "https://twitter.com/iocrpyto",
    iconNames: "FaXTwitter",
  },
];
