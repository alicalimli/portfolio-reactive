import profileImg from "../../Assets/my-profile.png";

const Header = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col lg:flex-row  gap-3  items-center justify-center lg:justify-between p-4 lg:px-44">
      <div className="text-left min-w-max">
        <h2 className="text-white text-5xl font-bold">Hello, I am</h2>
        <h1 className="text-white text-7xl font-bold">Ali Calimli</h1>
        <p className="text-slate-200 text-lg">
          A Front-end web developer based from turkey
        </p>
      </div>
      <img src={profileImg} className="w-84" alt="" />
    </div>
  );
};

export default Header;
