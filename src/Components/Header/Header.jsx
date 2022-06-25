const Header = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center p-4">
      <div className="flex flex-row md:flex-col">
        <div className="text-left">
          <h2 className="text-white text-4xl font-bold">Hello, I'm</h2>
          <h1 className="text-white text-6xl font-bold">Ali Calimli</h1>
          <p className="text-slate-200">
            A Front-end web develope based from turkey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
