import profile from "src/assets/profile.webp";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Hero() {
  return (
    <section
      className="container mt-36 flex flex-col items-center gap-4 uppercase md:gap-8"
      id="hero"
    >
      <figure>
        <img
          src={profile}
          alt="John Mark Profile"
          className="h-32 w-32 rounded-full ring-4 ring-lightBlue dark:ring-white"
        />
      </figure>
      <article className="flex flex-col items-center space-y-2 md:w-2/3 lg:w-3/5">
        <h4 className="text-sm  font-semibold text-lightBlue dark:text-darkRed md:text-xl">
          crafting code with creativity
        </h4>
        <h1 className="text-center text-sm font-bold text-darkFont dark:text-white sm:text-base md:text-lg lg:text-2xl xl:text-4xl  ">
          Hello, I'm John Mark, a Self-Taught{" "}
          <span className="text-lightBlue dark:text-darkRed">
            Front End Developer
          </span>
          . I Enjoy Building Apps and Sites with{" "}
          <span className="text-lightBlue dark:text-darkRed">React.JS!</span>
        </h1>
      </article>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <button className="flex items-center gap-2 rounded-full bg-lightBlue px-4 py-2 text-xs font-medium uppercase text-white dark:bg-darkRed md:text-sm ">
          Contact me here <FaArrowRight />
        </button>
        <a
          href="#"
          className="bg- flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-light dark:bg-light dark:text-darkFont md:text-sm "
        >
          <MdOutlineFileDownload className="md:text-xl" />
          Download CV
        </a>
      </div>

      <MdKeyboardDoubleArrowDown
        className="mt-20 animate-pulse text-lightBlue dark:text-darkRed md:mt-28"
        size={50}
      />
    </section>
  );
}

export default Hero;
