import React from "react";
import { FaDog } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";

const btnStyles = ({ isActive }) => {
  return isActive
    ? " text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-blue-500 inline-block border-b-2 border-b border-blue-800"
    : "text-gray-600 hover:text-blue-500 transition-colors px-1 pb-1";
};
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm px-1 md:px-4 lg:px-8 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={btnStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={btnStyles}>
                Service Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={btnStyles}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-1 md:gap-2 cursor-pointer transition-transform active:scale-95"
        >
          <span className="text-black text-xl">
            <FaDog />
          </span>
          <span
            className="text-xl font-bold
            bg-gradient-to-br from-blue-900 to-blue-500 text-transparent bg-clip-text"
          >
            PET CARE
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center font-medium gap-8">
          <li>
            <NavLink to="/" className={btnStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={btnStyles}>
              Service Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={btnStyles}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <NavLink
            to="/register"
            className="btn text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
          >
            LOG IN/REGISTER
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
