import React from "react";
import styles from "../styles/CapsItemCard.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const CapsItemCard = () => {
  return (
    <>
      <Link href={"/"} className={styles.caps_item_card}>
        <div className={styles.caps_img_wrapper}>
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
                <img src="./C1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./C2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./C3.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.caps_info_wrapper}>
          <p className={styles.company_name}>Mug</p>
          <p className={styles.caps_desc}>Python No Problem MuG</p>
          <p className={styles.caps_price}>
            <span className={styles.price}>₹122</span>
            <span className={styles.discount_strike}>₹1,200</span>
            <span className={styles.discount_percentage}>(30%) off</span>
          </p>
          <div className={styles.caps_size}>
            <p className={styles.size}>
              Size <span className={styles.n_of_size}>L</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CapsItemCard;
