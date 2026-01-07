import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  const topServices = (services || []).slice(0, 8);
  return (
    <div className="min-h-screen bg-[#f5f5f5] overflow-hidden">
      <div className="h-96">This is first div</div>
      <div>
        <p className="text-4xl md:text-5xl text-center font-bold pt-16 pb-4 text-[#001931]">
          Our Services
        </p>
        <p className="text-gray-400 text-center pb-10">
          Select the best care for your furry friend
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 px-2 md:px-4 lg:px-8 items-stretch">
        {topServices.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-8 mb-12 flex justify-center">
        <button
          // onClick={() => navigate("/apps")}
          className="btn btn-lg px-10 text-white text-lg bg-gradient-to-br from-blue-900 to-blue-500 border-none hover:scale-105 transition-transform"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;
