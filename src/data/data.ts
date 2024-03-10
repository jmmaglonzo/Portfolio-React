export const skillIcons = [
  { id: 1, name: "HTML", icon: "src/assets/icons/html5.webp" },
  { id: 2, name: "CSS", icon: "src/assets/icons/css.webp" },
  { id: 3, name: "JAVASCRIPT", icon: "src/assets/icons/javascript.webp" },
  { id: 4, name: "REACT", icon: "src/assets/icons/react.webp" },
  { id: 5, name: "VUE", icon: "src/assets/icons/vuejs.webp" },
  { id: 6, name: "TAILWIND-CSS", icon: "src/assets/icons/tailwind.svg" },
  { id: 7, name: "BOOTSTRAP", icon: "src/assets/icons/bootstrap.webp" },
  { id: 8, name: "SASS", icon: "src/assets/icons/sass.webp" },
  { id: 9, name: "VITE", icon: "src/assets/icons/vite.svg" },
  { id: 10, name: "VS CODE", icon: "src/assets/icons/vscode.webp" },
  { id: 11, name: "FIGMA", icon: "src/assets/icons/figma.webp" },
  { id: 12, name: "GIT", icon: "src/assets/icons/git.webp" },
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
    img: "src/assets/mockups/omnifood.webp",
    desc: "Omnifood AI, my React and Tailwind Css project. With redesigned and new sections, I've revamped this site to offer a fresh and improved experience.",
    tech: ["REACT", "TAILWIND-CSS", "TYPESCRIPT"],
    title: "Omnifood-Ai",
    github: "https://github.com/jmmaglonzo/Omnifood-Reacts",
    link: "https://omnifood-react.vercel.app/",
  },
  {
    id: 8,
    img: "src/assets/mockups/portfolio.webp",
    desc: "Welcome to my portfolio powered by TypeScript plus React and Tailwind. Discover my responsive projects, explore skills, and let's discuss collaboration possibilities for a modern user experience.",
    tech: ["REACT", "TAILWIND-CSS", "TYPESCRIPT"],
    title: "PORTFOLIO",
    github: "https://github.com/jmmaglonzo/Omnifood-Reacts",
    link: "https://omnifood-react.vercel.app/",
  },
  {
    id: 7,
    img: "src/assets/mockups/hj.webp",
    desc: "Developed using Vue.js for dynamic interactivity, Vue Router for seamless navigation, and Tailwind CSS for a modern, visually appealing design.",
    tech: ["VUE", "VUE-ROUTER", "TAILWIND-CSS"],
    title: "HJ LAYOUT & DESIGNS",
    github: "https://github.com/jmmaglonzo/HJLD",
    link: "https://hjld.vercel.app/",
  },
  {
    id: 6,
    img: "src/assets/mockups/clipboard.webp",
    desc: "My First Tailwind CSS project reflects my learning journey and growth, conquering a Front-End Mentor challenge. Explore evolving web development skills through engaging, responsive designs.",
    tech: ["HTML", "TAILWIND-CSS"],
    title: "CLIPBOARD LANDING PAGE",
    github: "https://github.com/jmmaglonzo/Clipboard-Landing-Page",
    link: "https://clipboard-landing-page-azure.vercel.app/",
  },
];
