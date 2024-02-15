const Navbar = () => {
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-around p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            ELP
          </div>
          <div className="flex justify-between space-x-5 text-lg items-center font-bold">
            <h1 className="text-white">Room</h1>
            <h1 className="text-white">games</h1>
          </div>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
            <button className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
              Sign in
            </button>
            <button className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
