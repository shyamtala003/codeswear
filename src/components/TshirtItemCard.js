import React from "react";
import styles from "../styles//TshirtItemCard.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const TshirtItemCard = ({ tshirt }) => {
  return (
    <>
      <Link href={`/product/${tshirt._id}`} className={styles.tshirt_item_card}>
        <div className={styles.tshirt_img_wrapper}>
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
              {tshirt.colors[0].images.map((item) => (
                <SwiperSlide key={uuidv4()}>
                  <img src={item} alt={item} />
                </SwiperSlide>
              ))}

              {/* <SwiperSlide>
                <img src="./t2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./t3.jpg" alt="" />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        <div className={styles.tshirt_info_wrapper}>
          <p className={styles.company_name}>{tshirt.brand}</p>
          <p className={styles.tshirt_desc}>{tshirt.product_name}</p>
          <p className={styles.tshirt_price}>
            <span className={styles.price}>₹{tshirt.price}</span>
            <span className={styles.discount_strike}>{tshirt.price * 2}</span>
            <span className={styles.discount_percentage}>(50%) off</span>
          </p>
          <div className={styles.tshirt_size}>
            <p className={styles.size}>
              Size
              <span className={styles.n_of_size}>
                {tshirt.colors[0].sizes.map((item) => item.name).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TshirtItemCard;
