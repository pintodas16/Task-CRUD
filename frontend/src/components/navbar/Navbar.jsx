import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const { pathname } = useLocation();

  // console.log(pathname);

  return (
    <header className="px-10 md:px-6 ">
      <nav className="border rounded-md bg-white shadow-md container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 flex justify-between items-center">
        {/* <!-- logo --> */}

        <NavLink to="/">
          <span className=" text-2xl font-bold cursor-pointer text-red-300 hover:opacity-70 ">
            Task Manager
          </span>
        </NavLink>

        {/* <!-- secarchbar --> */}
        <div className=" ">
          <form action="">
            <div className="hidden md:block relative">
              <span className="w-4 h-4 absolute left-2 top-2 text-center text-xl">
                <i className="fa-solid fa-magnifying-glass text-xl text-red-300"></i>
              </span>
              <input
                type="text"
                className="pl-8 py-2 px-4 text-lg font-semibold leading-3 border-2 rounded-md border-rose-300 focus:outline-none focus:border-red-300 "
              />
            </div>
          </form>
        </div>
        {/* <!-- add task  --> */}
        <NavLink
          to="/create-task"
          className="  px-6 py-2 bg-red-300 border border-bg-red-400 rounded-lg text-xl font-bold text-center text-gray-600 hover:bg-white hover:border-rose-500 hover:text-red-400 "
        >
          Create Task
        </NavLink>
      </nav>
    </header>
  );
}
export default Navbar;
