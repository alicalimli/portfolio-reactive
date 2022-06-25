import { projectsObj } from "../../projectsDB";
import Project from "../Project/Project.jsx";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 p-4 lg:ml-52 h-screen">
      <h2 className="text-4xl font-bold text-white text-center lg:text-left ">
        My Projects
      </h2>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {projectsObj.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
