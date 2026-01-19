import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import dr1 from "../assets/images.jfif";
import dr2 from "../assets/images (1).jfif";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON", error);
        setLoading(false);
      });
  }, []);
  const topServices = (services || []).slice(0, 8);

  if (loading) return <Loading></Loading>;
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="h-80 md:h-125px w-full mb-10 z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div
              className="bg-blue-100 h-full flex items-center justify-center p-10"
              style={{
                backgroundImage: "url('https://i.postimg.cc/winter-bg1.png')",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                Cozy Winter Care for Your Best Friend
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-purple-100 h-full flex items-center justify-center text-center p-10">
              <h2 className="text-4xl font-bold text-blue-900">
                Keep Their paws Warm & Safe
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div>
        <p className="text-4xl md:text-5xl text-center font-bold pt-8 pb-4 text-[#001931]">
          Our Services
        </p>
        <p className="text-gray-400 text-center pb-10">
          Select the best care for your furry friend
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 px-2 md:px-4 lg:px-8 items-stretch">
        {topServices.map((service) => (
          <div key={service.serviceId} data-aos="fade-up">
            <ServiceCard service={service}></ServiceCard>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-12 flex justify-center">
        <button
          onClick={() => navigate("/services")}
          className="btn btn-lg px-10 text-white text-lg bg-gradient-to-br from-blue-900 to-blue-500 border-none hover:scale-105 transition-transform"
        >
          Show All
        </button>
      </div>
      <section data-aos="zoom-in" className="bg-blue-50 p-10 rounded-3xl mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Winter Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-black">
          <div className="p-4 bg-white rounded-xl shadow">Keep Paws Clean</div>
          <div className="p-4 bg-white rounded-xl shadow">
            Limit Outdoor Time
          </div>
          <div className="p-4 bg-white rounded-xl shadow">Extra Hydration</div>
        </div>
      </section>

      <section data-aos="fade-right" className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">
          Meet Our Expert Vets
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <img
              src={dr1}
              alt=""
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
            />
            <p className="font-bold text-black">Dr. Sarah Miller</p>
            <p className="text-sm text-gray-500">Winter Nutritionist</p>
          </div>
          <div className="text-center">
            <img
              src={dr2}
              alt=""
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
            />
            <p className="font-bold text-black">Dr. James Wilson</p>
            <p className="text-sm text-gray-500">Paw Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
