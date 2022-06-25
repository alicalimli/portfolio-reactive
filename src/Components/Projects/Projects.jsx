import clipBoardPreview from "../../Assets/clipboard-preview.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 p-4 lg:ml-52 ">
      <h2 className="text-4xl font-bold text-white">My Projects</h2>
      <div className="flex flex-wrap">
        <div className="relative rounded ">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/20"></div>
          <img src={clipBoardPreview} alt="" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
