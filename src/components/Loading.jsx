import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4">
      <span className="loading loading-spinner loading-lg w-24 text-blue-600"></span>
      <p className="text-gray-500 sm:text-xl md:text-4xl font-medium animate-pulse">
        Loading Care For Pets...
      </p>
    </div>
  );
};

export default Loading;
