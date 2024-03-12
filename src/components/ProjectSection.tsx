import Projects from "../UI/Projects";
import { projects } from "../data/data";

function ProjectSection() {
  return (
    <section className="container mt-20 py-20 text-center">
      <span className="text-xl font-semibold uppercase text-lightBlue dark:text-darkRed">
        Projects
      </span>
      <div className="mt-14 flex flex-col space-y-16 md:gap-10">
        {projects.map((items, index) => (
          <Projects key={index} project={items} order={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
