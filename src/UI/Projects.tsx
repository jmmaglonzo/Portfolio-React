import Omnifood from "src/assets/mockups/omnifood.webp";

function Projects() {
  return (
    <div className="container mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center">
      <div className="flex flex-col space-y-2">
        <span className="text-center font-bold uppercase md:text-left">
          Portfolio website
        </span>
        <div className="flex flex-col items-center space-y-2 rounded-md bg-cards p-4 text-center text-xs leading-relaxed text-white shadow-md md:text-start md:text-sm">
          Welcome to my portfolio powered by Vite,Vue.js and Tailwind. Discover
          my responsive projects, explore skills, and let's discuss
          collaboration possibilities for a modern user experience.{" "}
        </div>
        <div className="flex justify-center gap-2 text-xs md:justify-start">
          <p>VUE JS</p>
          <p>VUE ROUTER</p>
          <p>TAILWIND</p>
          <p>VITE</p>
          <p>JAVASCRIPT</p>
        </div>
        <div className="flex items-center justify-center space-x-2 text-xl md:justify-start">
          <a href="#">l1</a>
          <a href="#">l2</a>
        </div>
      </div>
      <img src={Omnifood} alt="" className="w-2/3" />
    </div>
  );
}

export default Projects;
