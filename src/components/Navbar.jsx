import React from "react";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "sm:text-xl text-md text-white  bg-black p-1.5 rounded-md "
      : "sm:text-xl text-white   p-1.5 rounded-md text-md ";
  

    return (
      <>
        <nav className=" bg-indigo-700 border-b border-b-indigo-500  ">
          <div className="flex w-full sm:max-w-7xl  justify-between items-center gap-5 mx-auto p-5">
            <div>
              <NavLink to="/" className="flex items-center  gap-3">
                <img src={logo} alt=" React Jobs" className="h-10 w-auto" />
                <span className="text-white text-2xl font-bold hidden md:block">
                  React Jobs
                </span>
              </NavLink>
            </div>

            <div className="flex sm:gap-5 gap-2 ">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/jobs" className={linkClass}>
                Jobs
              </NavLink>
              <NavLink to="/add-job" className={linkClass}>
                Add Job
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;
