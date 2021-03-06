import { AiOutlineLink } from "react-icons/ai";

const Project = ({ project }) => {
  return (
    <a
      href={project.link}
      className="inline-block group relative rounded w-80 h-80 bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url(${project.preview})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/20"></div>
      <AiOutlineLink
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        h-16 w-16 text-cyan-500 scale-150 opacity-0 
        duration-300 group-hover:opacity-100 group-hover:scale-100"
      />
    </a>
  );
};

export default Project;
