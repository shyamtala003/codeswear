import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { generateSlides } from "../../utils/generateSlides";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Product = () => {
  let [pincode, setPincode] = useState("");
  let [isServiceable, setisServiceable] = useState(null);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  let router = useRouter();

  useEffect(() => {
    let { slug } = router.query;
  }, [router.isReady]);

  // code for splide slider
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  function renderSlides() {
    return (
      <>
        <SplideSlide key={1}>
          <img src="/tshirt.avif" alt="" />
        </SplideSlide>
        <SplideSlide key={2}>
          <img src="/t2.webp" alt="" />
        </SplideSlide>
        <SplideSlide key={3}>
          <img src="/t3.jpg" alt="" />
        </SplideSlide>
      </>
    );
  }

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "100%",
    transition: "fade", // Add fade transition effect
    speed: 800, // Adjust the speed of the transition
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 100,
    cover: false,
    focus: "center",
    isNavigation: true,
    transition: "fade", // Add fade transition effect
    speed: 800, // Adjust the speed of the transition
  };

  // code for checking pin is serviceable or not
  const pincodeValidationSchema = Yup.object().shape({
    pincode: Yup.number()
      .required("Pincode is required")
      .min(100000, "Pincode must be 6 digits")
      .max(999999, "Pincode must be 6 digits"),
  });

  function inputPincodeHandler(e) {
    setPincode(e.target.value);
  }

  const checkPinServicibity = async (values, { setSubmitting }) => {
    const response = await fetch("/api/pincode");
    const data = await response.json();
    if (data.message.includes(Number(values.pincode))) {
      setisServiceable(true);
      setPincode("");
    } else {
      setisServiceable(false);
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.product_wrapper}>
      <div className={styles.wrapper}>
        <Splide
          options={mainOptions}
          ref={mainRef}
          aria-labelledby="thumbnail-slider-example"
        >
          {renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          {renderSlides()}
        </Splide>
      </div>

      <div className={styles.product_info}>
        <div className={styles.product_brand}>Nike T-Shirt</div>
        <div className={styles.product_short_description}>
          MALBON X NIKE DRI-FIT PLAYER HALF ZIP TOP
        </div>
        <div className={styles.product_description}>
          <p className={styles.bold_text}>Product Description</p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          ullam laboriosam accusamus voluptatibus in laudantium nulla quod,
          eveniet maxime nostrum, sequi consequatur amet aperiam, blanditiis
          deserunt ipsa maiores labore necessitatibus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ex quibusdam amet numquam.
        </div>
        <div className={styles.product_heightlights}>
          <p className={styles.bold_text}>Product Highlights</p>
          <ul className={styles.point_list}>
            <li className={styles.point}>
              Minimalist and sleek "Breaking Code" chest logo
            </li>
            <li className={styles.point}>
              High-quality and comfortable fabric
            </li>
            <li className={styles.point}>
              Perfect for tech enthusiasts and coding enthusiasts
            </li>
            <li className={styles.point}>Soft and breathable feel</li>
            <li className={styles.point}>
              Great for coding events and casual occasions
            </li>
          </ul>
        </div>

        <div className={styles.tags}>
          <span className={styles.bold_text}>Tags:</span> t-shirt, breaking
          code, logo, coding, programming, tech
        </div>

        <div className={styles.product_Size_wrapper}>
          <legend className={styles.radio__legend}>
            <span className={styles.radio__legend__label}>Size</span>
            <span className={styles.size_chart_btn}>Size/Fit Guide</span>
          </legend>
        </div>

        <div className={styles.product_sizes}>
          <div className={styles.input_group}>
            <input
              className={styles.size_radio_btn}
              type="radio"
              name="size"
              id="s"
              value="s"
              defaultChecked
            />
            <label htmlFor="s" className={styles.size_label}>
              S
            </label>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.size_radio_btn}
              type="radio"
              name="size"
              id="l"
              value="l"
            />
            <label htmlFor="l" className={styles.size_label}>
              L
            </label>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.size_radio_btn}
              type="radio"
              name="size"
              id="m"
              value="m"
            />
            <label htmlFor="m" className={styles.size_label}>
              M
            </label>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.size_radio_btn}
              type="radio"
              name="size"
              id="xl"
              value="xl"
            />
            <label htmlFor="xl" className={styles.size_label}>
              XL
            </label>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.size_radio_btn}
              type="radio"
              name="size"
              id="xxl"
              value="xxl"
            />
            <label htmlFor="xxl" className={styles.size_label}>
              XXL
            </label>
          </div>
        </div>

        <div className={styles.product_colors}>
          <div className={styles.product_color_name}>
            <span>COLOR:</span> LIGHT/BLUE
          </div>
          <div className={styles.color_group}>
            <div className={styles.color_wrapper}>
              <input
                type="radio"
                name="t_shirt_color"
                id="light/blue"
                value="light/blue"
                defaultChecked
              />
              <label
                htmlFor="light/blue"
                className={styles.product_color_label}
                checked
              >
                <img src="/tshirt.avif" alt="" />
              </label>
            </div>
            <div className={styles.color_wrapper}>
              <input
                type="radio"
                name="t_shirt_color"
                id="light/dark"
                value="light/dark"
              />
              <label
                htmlFor="light/dark"
                className={styles.product_color_label}
              >
                <img src="/h2.jpg" alt="" />
              </label>
            </div>
          </div>
        </div>

        <p className={styles.product_price_wrapper}>
          <span className={styles.strike_price}>₹300</span>
          <span className={styles.price}>₹126</span>
        </p>

        <div className={styles.delevery_avaibility_form}>
          <Formik
            initialValues={{ pincode: "" }}
            validationSchema={pincodeValidationSchema}
            onSubmit={checkPinServicibity}
          >
            {({ isSubmitting }) => (
              <Form className={styles.delevery_form}>
                <div className={styles.form_control_group}>
                  <Field
                    type="number"
                    name="pincode"
                    min={100000}
                    required
                    placeholder="Enter Your Pincode"
                    className={styles.pincode_input}
                  />

                  <button type="submit" disabled={isSubmitting}>
                    Check
                  </button>
                </div>
                <ErrorMessage
                  name="pincode"
                  component="div"
                  className={styles.error_message}
                />
              </Form>
            )}
          </Formik>
          {isServiceable == true && isServiceable !== null && (
            <p className={styles.available}>Delivery Services Available.</p>
          )}
          {isServiceable === false && isServiceable !== null && (
            <p className={styles.not_available}>
              Delivery Services Not Available!
            </p>
          )}
          <button className={styles.buy_now}>Buy Now</button>
          <button className={styles.add_to_cart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
