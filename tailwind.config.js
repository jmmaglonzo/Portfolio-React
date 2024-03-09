/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundColor: "#101019",
        darkRed: "#fd0037",
        lightBlue: "#0075F2",
        light: "#E2E2E2",
        cards: "#2b2c35",
        forms: "#161925",
        lightAccent: "#D9D9D9",
        navBar: "#13141f",
        darkFont: "#000411",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    fontFamily: {
      Fira: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
