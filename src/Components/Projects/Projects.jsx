import clipBoardPreview from "../../Assets/clipboard-preview.jpg";
import { AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const projectsObj = {
    title: "Clipboard",
    preview: clipBoardPreview,
    link: "https://clipboard-ali.netlify.app/",
  };

  return (
    <div className="flex flex-col gap-12 p-4 lg:ml-52 ">
      <h2 className="text-4xl font-bold text-white">My Projects</h2>
      <div className="flex flex-wrap">
        <a href={projectsObj.link} className="group relative rounded ">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/20"></div>
          <AiOutlineLink
            className="absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 h-16 w-16 text-cyan-500 scale-150 opacity-0 duration-300 group-hover:opacity-100 group-hover:scale-100"
          />
          <img
            src={projectsObj.preview}
            alt={`${projectsObj.title} preview`}
            className="rounded"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
