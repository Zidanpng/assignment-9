import React from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router";

const ServiceCard = ({ service }) => {
  // const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-white rounded-lg p-4 cursor-pointer border border-transparent 
             transition-all duration-300 ease-in-out 
             hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200"
      >
        <div className="aspect-square w-full  rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-contain  rounded-lg"
          />
        </div>
        <h3 className="font-semibold text-gray-800 text-[23px] text-center py-3">
          {service.serviceName}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center  p-1 rounded-sm">
            <span className="text-yellow-400 mr-1">
              <FaStar />
            </span>
            <span className="text-base font-medium text-blue-400">
              {service.rating}
            </span>
          </div>
          <div className="flex items-center bg-[#F1F5E8] p-1 rounded-sm w-12">
            <span className="text-green-600">
              <FaDollarSign />
            </span>
            <span className="text-base font-medium text-blue-400">
              {service.price}
            </span>
          </div>
        </div>
        <button
          // onClick={() => navigate(`/service/${service.serviceId}`)}
          className="px-8 py-3 mt-3 bg-blue-600 text-white font-semibold rounded-full w-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
