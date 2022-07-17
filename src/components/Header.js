export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex gap-8">
          <div className="flex flex-col items-center cursor-pointer">
            <h2 className="text-3xl">BizWorld</h2>
            <p className="text-xs">Video</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="hover:font-bold cursor-pointer">Explore</p>
            <p className="hover:font-bold cursor-pointer">Playlists</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative">
            <input
              placeholder="Search here"
              className="border-2 px-2 py-1 rounded-lg w-56"
            />
            <i className="fas fa-search absolute top-2 right-3"></i>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <i className="fas fa-user"></i>
            <span>Login</span>
          </div>
        </div>
      </div>
    </header>
  );
};
