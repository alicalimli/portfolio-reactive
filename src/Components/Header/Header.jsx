import profileImg from "../../Assets/my-profile.png";

const Header = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col lg:flex-row  gap-3  items-center justify-center lg:justify-between p-4 lg:px-44">
      <div className="text-left min-w-max">
        <h2 className="text-white text-5xl font-bold">Hello, I am</h2>
        <h1 className="text-white text-7xl font-bold">
          <span className="text-cyan-500">Ali</span> Calimli
        </h1>
        <p className="text-slate-200 text-lg">
          A Front-end web developer based from turkey
        </p>
        <button className="border border-cyan-500 rounded duration-300 hover:bg-cyan-500 p-2 px-4 mt-5 text-white">
          Contact me
        </button>
      </div>
      <img src={profileImg} className="w-84" alt="" />
    </div>
  );
};

export default Header;
