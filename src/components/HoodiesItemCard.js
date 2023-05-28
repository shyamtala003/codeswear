import React from "react";
import styles from "../styles/HoodieItemCard.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const HoodiesItemCard = () => {
  return (
    <>
      <Link href={"/"} className={styles.hoodies_item_card}>
        <div className={styles.hoodies_img_wrapper}>
          <div className={styles.slider}>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={styles.mySwiper}
            >
              <SwiperSlide>
                <img src="./h1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./h2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./h3.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.hoodies_info_wrapper}>
          <p className={styles.company_name}>Nike</p>
          <p className={styles.hoodies_desc}>
            Nike Sportswear Sport Essentials T-shirt
          </p>
          <p className={styles.hoodies_price}>
            <span className={styles.price}>₹122</span>
            <span className={styles.discount_strike}>₹1,200</span>
            <span className={styles.discount_percentage}>(30%) off</span>
          </p>
          <div className={styles.hoodies_size}>
            <p className={styles.size}>
              Size <span className={styles.n_of_size}>S, M, L, X, XL, XXL</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HoodiesItemCard;
