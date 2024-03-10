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
