import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 sm:py-8 lg:py-16 font-sans">
      {/* Title */}
      <h2 className="text-xl sm:text-3xl lg:text-5xl text-center text-[#40566F] mb-10 font-light">
        Happy Pet Parents are our favorite Pet Parents
      </h2>

      <section className="h-60 md:h-125px w-full mb-10 z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="h-full w-full rounded-xl"
        >
          <SwiperSlide>
            <div className="h-full items-center justify-center p-10">
              <h2 className="text-sm md:text-xl font-bold text-purple-900">
                "My dog Murphy looked like he had a fantastic experience at
                petsuites. All the staff were great at getting us checked in and
                following the instructions from the pre-check."
              </h2>
              <p className="text-sm md:text-xl font-bold text-blue-900 mt-2">
                - Bruce Wayne
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full items-center justify-center p-10">
              <h2 className="text-sm md:text-xl font-bold text-blue-900">
                "This was my first time boarding Luna and I was so nervous. The
                team sent me updates and she came back smelling fresh and
                looking incredibly happy. Best facility in town!"
              </h2>
              <p className="text-sm md:text-xl font-bold text-purple-900 mt-2">
                - Clark Kent
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full items-center justify-center p-10">
              <h2 className="text-sm md:text-xl font-bold text-purple-900">
                "The grooming team is miraculous. My golden retriever has never
                looked better, and they handled his anxiety with such grace. We
                won't go anywhere else."
              </h2>
              <p className="text-sm md:text-xl font-bold text-blue-900 mt-2">
                - Barry Allen
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full items-center justify-center p-10">
              <h2 className="text-sm md:text-xl font-bold text-blue-900">
                "Clean, professional, and genuinely caring. You can tell the
                people here love animals. It's such a relief to travel knowing
                my pets are in safe hands."
              </h2>
              <p className="text-sm md:text-xl font-bold text-purple-900 mt-2">
                - Diana
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Bottom Buttons */}
      <div className="flex flex-row justify-center gap-5 mt-12">
        {/* <button className="bg-gradient-to-br from-blue-900 to-blue-500 border-none hover:scale-105 transition-transform text-white px-10 py-4 rounded-lg text-xl font-medium">
          Write a Review
        </button>
        <button className="bg-gradient-to-br from-blue-900 to-blue-500 border-none hover:scale-105 transition-transform text-white px-10 py-4 rounded-lg text-xl font-medium">
          Read More Reviews
        </button> */}
        <div
          to="/register"
          className="btn btn-sm md:btn-md  text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
        >
          Write a Review
        </div>
        <div
          to="/register"
          className="btn btn-sm md:btn-md  text-white bg-gradient-to-br from-blue-900 to-blue-500 hover:scale-105 transition-transform border-none"
        >
          Read More Reviews
        </div>
      </div>
    </div>
  );
};

export default Review;
