import { AiOutlineLink } from "react-icons/ai";

import { projectsObj } from "../../projectsDB";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 p-4 lg:ml-52">
      <h2 className="text-4xl font-bold text-white text-center lg:text-left ">
        My Projects
      </h2>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {projectsObj.map((project, i) => (
          <a
            href={project.link}
            className="inline-block group relative rounded w-80 h-80 bg-contain bg-no-repeat"
            key={project.title + i}
            style={{
              backgroundImage: `url(${project.preview})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/20"></div>
            <AiOutlineLink
              className="absolute top-1/2 left-1/2 -translate-x-1/2 
                      -translate-y-1/2 h-16 w-16 text-cyan-500 scale-150 opacity-0 duration-300 group-hover:opacity-100 group-hover:scale-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
