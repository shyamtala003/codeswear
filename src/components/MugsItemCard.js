import React from "react";
import styles from "../styles/MugsItemCard.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const MugsItemCard = () => {
  return (
    <>
      <Link href={"/"} className={styles.mugs_item_card}>
        <div className={styles.mugs_img_wrapper}>
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
                <img src="./mug1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./mug2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./mug3.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.mugs_info_wrapper}>
          <p className={styles.company_name}>Mug</p>
          <p className={styles.mugs_desc}>Python No Problem MuG</p>
          <p className={styles.mugs_price}>
            <span className={styles.price}>₹122</span>
            <span className={styles.discount_strike}>₹1,200</span>
            <span className={styles.discount_percentage}>(30%) off</span>
          </p>
          <div className={styles.mugs_size}>
            <p className={styles.size}>
              Size <span className={styles.n_of_size}>STANDARD</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MugsItemCard;
