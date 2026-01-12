import React from "react";
import error404 from "../assets/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full">
      <div className="px-8 mx-auto">
        {/* header */}
        <div>
          <img className="mx-auto mt-10 md:mt-20" src={error404} alt="" />
        </div>
        <div className="text-center my-6">
          <h1 className="text-3xl text-blue-950 md:text-4xl font-bold my-3">
            Oops, page not found!
          </h1>
          <p className="text-gray-600 text-sm">
            The page you are looking for is not available.
          </p>
        </div>
        <div className="mt-4 sm:mt-8 mb-6 sm:mb-12 flex items-center justify-center">
          <button
            onClick={() => navigate("/")}
            className="btn border-none text-white text-lg bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
