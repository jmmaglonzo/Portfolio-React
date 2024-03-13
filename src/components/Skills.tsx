import { Zoom } from "react-awesome-reveal";
import Cards from "../UI/Cards";
import { skillIcons } from "../data/data";
import Marquee from "react-fast-marquee";
function Skills() {
  return (
    <section className="mt-20 scroll-mt-20 text-center " id="skills">
      <span className="text-xl font-semibold uppercase text-lightBlue dark:text-darkRed">
        TECH ARSENAL FOR WEB DEVELOPMENT
      </span>

      <div className=" mt-10 hidden overflow-hidden bg-cards py-12 dark:bg-light md:block">
        <Marquee speed={10} pauseOnHover={true}>
          <div className="logo-slide flex items-center">
            {skillIcons.map((icon, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="mx-16 h-10 md:h-14"
                />
                <span
                  className="font-medium text-light dark:text-darkFont"
                  key={icon.id}
                >
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="container mt-8 grid  grid-cols-2 gap-4 md:hidden">
        <Zoom cascade={true} duration={500} triggerOnce={true}>
          {skillIcons.map((icon) => (
            <Cards key={icon.id} images={icon} />
          ))}
        </Zoom>
      </div>
    </section>
  );
}

export default Skills;
