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
import {motion} from "framer-motion"
const Testimonial = () => {
  return (
    <motion.div id="testimonial" name="work" className="w-full md:h-screen opacity-1 py-4 text-gray-300 bg-[#0a192f]"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1000px] mx-auto py-2 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-3xl font-bold inline border-b-4 text-gray-300  border-green-600">
            Testimonials
          </p>
          <p className="py-3">// Check out the Testimonials </p>
        </div>
          <Swiper
            navigation={true}
            modules={[Navigation,Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{        
              480: {
                slidesPerView: 1,
                spaceBetween:10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween:10
              },
              1080: {
                slidesPerView: 3,
                spaceBetween:10,
              },
            }}
            className=" swiper-b "
          >
            {TestimonialData.map((data) => {
              return (
                <SwiperSlide key={data.id} className=" swiper-body">
                  <div className="swiper">
                    <div className="flex flex-row gap-5 img-contain">
                      
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
    </motion.div>
  );
};

export default Testimonial;
