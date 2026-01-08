import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ServiceCard from "../components/ServiceCard";
import ErrorService from "./ErrorService";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loading></Loading>;

  const filteredApps = serviceData.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-1 md:px-2 lg:px-4 py-2 md:py-6">
      <div className="px-1 md:px-2 lg:px-4 mx-auto">
        {/* header */}
        <div className="text-center mb-6">
          <h1 className="text-[#001931] text-3xl md:text-4xl font-bold my-3">
            Our Services
          </h1>
          <p className="text-gray-600 text-sm">
            Explore all the services we provide for your cozy friend.
          </p>
        </div>
        {/* search bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="font-bold text-[#001931]">
            ({filteredApps.length}) Services Found
          </div>
          <div className="w-1/2 md:w-80">
            <label className="input bg-white text-[#001931]">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search Apps"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredApps.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        ) : (
          <ErrorService onClear={() => setSearchTerm("")}></ErrorService>
        )}
      </div>
    </div>
  );
};

export default Services;
