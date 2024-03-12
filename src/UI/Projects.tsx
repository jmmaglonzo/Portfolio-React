import { FaGithub, FaLink } from "react-icons/fa";

type ProjectProp = {
  project: {
    id: number;
    img: string;
    desc: string;
    tech: string[];
    title: string;
    github: string;
    link: string;
  };
  order: boolean;
};

function Projects({ project, order }: ProjectProp) {
  const tech = project.tech.map((items, index) => (
    <span key={index}>{items}</span>
  ));

  return (
    <div className="mt-14 flex flex-col gap-10 text-center md:mt-8 lg:flex-row lg:items-center lg:text-left">
      <div
        className={` order-2 flex flex-col space-y-2 ${order ? "lg:order-2" : "lg:order-1"} `}
      >
        <span className=" text-sm font-bold uppercase text-darkFont dark:text-light lg:text-base">
          {project.title}
        </span>
        <div className="flex items-center rounded-md bg-cards p-4  text-xs  text-white shadow-lg  md:text-sm">
          {project.desc}
        </div>
        <div className="flex justify-center gap-2 text-xs font-medium text-darkFont dark:text-light lg:justify-start lg:text-sm">
          {tech}
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-darkFont dark:text-light lg:justify-start">
          <a href={project.github} target="_blank">
            <FaGithub />
          </a>
          <a href={project.link}>
            <FaLink />
          </a>
        </div>
      </div>
      <div
        className={`${order ? "lg:order-1" : "lg:order-2"} duration-300 md:hover:-translate-y-12`}
      >
        <a href={project.link} target="_blank">
          <img src={project.img} alt={project.title} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
