import React, { useContext } from "react";
import { FaDog } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const btnStyles = ({ isActive }) => {
  return isActive
    ? " text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-blue-500 inline-block border-b-2 border-b border-blue-800"
    : "text-gray-600 hover:text-blue-500 transition-colors px-1 pb-1";
};
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm px-1 md:px-4 lg:px-8 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700"
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-1000 mt-3 w-52 p-2 shadow"
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
            {user && (
              <li>
                <NavLink to="/profile" className={btnStyles}>
                  My Profile
                </NavLink>
              </li>
            )}
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
          {user && (
            <li>
              <NavLink to="/profile" className={btnStyles}>
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-3">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-blue-500 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </div>
            <button
              onClick={logOut}
              className="btn btn-sm md:btn-md text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn btn-sm md:btn-md text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
            >
              LOG IN
            </Link>
            <Link
              to="/register"
              className="btn text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
            >
              REGISTER
            </Link>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
