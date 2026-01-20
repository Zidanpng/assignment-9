import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Error from "./Error";
import { FaDollarSign } from "react-icons/fa";

const Details = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (service) => service.serviceId.toString() === serviceId,
        );
        setService(found);
        const saved = JSON.parse(
          localStorage.getItem("bookedServices") || "[]",
        );
        setIsBooked(
          saved.some((service) => service.serviceId.toString() === serviceId),
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
    window.scroll(0, 0);
  }, [serviceId]);
  const handleBooking = () => {
    const saved = JSON.parse(localStorage.getItem("bookedServices") || "[]");
    const updated = [...saved, service];
    localStorage.setItem("bookedServices", JSON.stringify(updated));
    setIsBooked(true);
    toast.success(`${service.serviceName} booked successfully!🎉`);
  };

  if (loading) {
    return <Loading />;
  }
  if (!service) {
    return <Error />;
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen  px-4 md:px-6 lg:p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-700 font font-bold py-4 "
      >
        <IoArrowBack />
        Go Back
      </button>
      <div className="max-w-6xl mx-auto p-0 md:p-6 pt-4 md:pt-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          <img
            className="w-full max-w-sm md:w-1/2  lg:max-w-md h-auto object-cover rounded-2xl"
            src={service.image}
            alt={service.serviceName}
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {service.serviceName}
            </h1>
            <p className="text-gray-500 mb-6 text-lg italic">
              With {service.providerName}
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-200">
              <div>
                <p className="text-gray-400 text-sm uppercase">Price</p>
                <p className="text-green-600 flex items-center">
                  <FaDollarSign />
                  <span className="text-xl font-bold text-blue-500">
                    {" "}
                    {service.price}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase">
                  Seat Available
                </p>
                <p className="text-2xl font-bold text-blue-500">
                  {service.slotsAvailable}
                </p>
              </div>
            </div>
            <button
              disabled={isBooked}
              onClick={handleBooking}
              className={`w-full sm:w-auto px-8 py-3 rounded-md font-semibold text-white transition-all ${
                isBooked
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isBooked ? "Already Booked" : "Book This Service"}
            </button>
          </div>
        </div>
        <hr className="my-5" />
        {/* description */}
        <hr className="my-12 border-slate-200" />
        <div className="max-w-5xl">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Description</h2>
          <div className="text-slate-500 text-[15px] leading-7 space-y-4 pb-4 whitespace-pre-line text-justify">
            {service.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
