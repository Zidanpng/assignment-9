import React from "react";
import error from "../assets/App-Error.png";
import { useNavigate } from "react-router";

const ErrorService = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-2 md:px-4 lg:px-8 mx-auto">
        {/* header */}
        <div>
          <img className="mx-auto mt-20 " src={error} alt="Error" />
        </div>
        <div className="text-center my-6">
          <h1 className="text-3xl md:text-4xl font-bold my-3">
            OOPS!!SERVICE NOT FOUND
          </h1>
          <p className="text-gray-600 text-sm">
            The Service you are requesting is not found on our system. please
            try other services
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 mb-12 items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="btn text-white text-lg w-full sm:w-auto px-8 bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform"
          >
            Go Back
          </button>
          {onClear && (
            <button
              onClick={onClear}
              className="btn text-white text-lg  w-full sm:w-auto px-8 bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorService;
