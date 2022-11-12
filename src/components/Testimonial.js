import React, { useEffect } from "react";
import TestimonialData from "./data/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Pagination } from "swiper";
const Testimonial = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-3xl font-bold inline border-b-4 text-gray-300  border-green-600">
            Testimonials
          </p>
          <p className="py-4">// Check out the Testimonials </p>
        </div>
        <div className=" swiper-container">
          <Swiper
            navigation={true}
            modules={[Navigation,Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            className="swiper-container"
          >
            {TestimonialData.map((data) => {
              return (
                <SwiperSlide key={data.id} className=" swiper-body">
                  <div className="swiper">
                    <div className="flex flex-row gap-3 img-contain">
                      <img className="image" src={data.picture} alt="my profile" />
                      <div className="social ">{data.social?.map((link)=>{
                        return(
                          <small className="s-link" key={link.id}>
                            <h5 className="l-name">{link.class}</h5>
                            <a href={link.mediaLink}><p className="media">{link.icon} view </p></a>
                          </small>
                        )
                      })}</div>
                    </div>
                    <div className="body-content">
                      <h4 className="name">{data.name}</h4>
                      <p className="content">{data.recomandation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
