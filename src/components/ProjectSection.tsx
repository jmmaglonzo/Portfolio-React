import Projects from "../UI/Projects";
import { projects } from "../data/data";

function ProjectSection() {
  return (
    <section className="container mt-20 py-20 text-center" id="projects">
      <span className="text-xl font-semibold uppercase text-lightBlue dark:text-darkRed">
        Projects
      </span>
      <p className="mt-6 text-sm text-darkFont dark:text-light md:text-xl">
        Here are the projects that I've built.
      </p>
      <div className=" flex flex-col space-y-20">
        {projects.map((items, index) => (
          <Projects key={index} project={items} order={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
