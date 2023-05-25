import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const index = () => {
  return (
    <>
      <div className="slider">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default index;
