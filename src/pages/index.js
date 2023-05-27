import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Online Shopping - Buy Tshirts, Hoodies, Mugs, Sweatshirts, Caps and
          Mousepads at best Price in India on CodesWear.com
        </title>
        <meta
          name="description"
          content="CodesWear is an Online Shopping site for Geek Clothing. Shop from a wide range of Tshirts, Hoodies, Mugs, Sweatshirts, Caps and Mousepads at the best prices."
        ></meta>
      </Head>
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
            <img
              src="/1.webp"
              alt=""
              className="big-screen-only"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <img
              src="/m1.webp"
              alt=""
              style={{ minHeight: "300px" }}
              className="mobile-only"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/2.webp"
              className="big-screen-only"
              alt=""
              style={{ minHeight: "300px" }}
            />
            <img
              src="/m2.webp"
              alt=""
              style={{ minHeight: "300px" }}
              className="mobile-only"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="big-screen-only"
              src="/3.webp"
              alt=""
              style={{ minHeight: "300px" }}
            />
            <img
              src="/m3.webp"
              alt=""
              style={{ minHeight: "300px" }}
              className="mobile-only"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default index;
