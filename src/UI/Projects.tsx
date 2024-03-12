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
    <div className="container mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center">
      <div
        className={` order-2 flex flex-col space-y-2 ${order ? "md:order-2" : "md:order-1"} `}
      >
        <span className="text-center font-bold uppercase text-darkFont dark:text-light md:text-left">
          {project.title}
        </span>
        <div className="shado flex flex-col items-center space-y-2 rounded-md bg-cards p-4 text-center text-xs leading-relaxed text-white shadow-lg md:text-start md:text-sm">
          {project.desc}
        </div>
        <div className="flex justify-center gap-2 text-xs text-darkFont dark:text-light md:justify-start">
          {tech}
        </div>
        <div className="flex items-center justify-center space-x-2 text-xl text-darkFont dark:text-light md:justify-start">
          <a href={project.github} target="_blank">
            <FaGithub />
          </a>
          <a href={project.link}>
            <FaLink />
          </a>
        </div>
      </div>
      <div className={`${order ? "md:order-1" : "md:order-2"}`}>
        <a href={project.link} target="_blank">
          <img src={project.img} alt={project.title} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
