import React, { useRef, useEffect, useState, useCallback } from "react";
import { animateScroll } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";

const Product = () => {
  let [product, setProduct] = useState("");
  let [selectedColor, setSelectedColor] = useState(null);
  let [pincode, setPincode] = useState("");
  let [isServiceable, setisServiceable] = useState(null);
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  let router = useRouter();

  const fetchProduct = useCallback(async () => {
    let { slug } = router.query;
    let response = await fetch(`/api/product/${slug}`);
    response = await response.json();
    setProduct(response.product);
    setSelectedColor(response.product.colors[0]);
  }, [router.query]);

  function colorSelctionHandler(color) {
    let getdata = product.colors.filter((item) => {
      return item.color === color;
    });
    setSelectedColor(getdata[0]);
    animateScroll.scrollToTop({
      duration: 500, // Set the duration of the scroll animation
      smooth: true, // Enable smooth scrolling
    });
  }

  useEffect(() => {
    if (router.isReady) {
      fetchProduct();
    }
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
        {selectedColor &&
          selectedColor.images &&
          selectedColor.images.map((item) => {
            return (
              <SplideSlide key={item}>
                <img src={item} alt="" />
              </SplideSlide>
            );
          })}
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
        <div className={styles.product_brand}>{product.brand}</div>
        <div className={styles.product_short_description}>
          {product.product_name}
        </div>
        <div className={styles.product_description}>
          <p className={styles.bold_text}>Product Description</p>
          {product.description}
        </div>
        <div className={styles.product_heightlights}>
          <p className={styles.bold_text}>Product Highlights</p>
          <ul className={styles.point_list}>
            {product.product_highlights &&
              product.product_highlights.map((item) => {
                return (
                  <li key={item} className={styles.point}>
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>

        <div className={styles.tags}>
          <span className={styles.bold_text}>Tags: </span>
          {product.tags && product.tags.join(", ")}
        </div>

        <div className={styles.product_Size_wrapper}>
          <legend className={styles.radio__legend}>
            <span className={styles.radio__legend__label}>Size</span>
            <span className={styles.size_chart_btn}>Size/Fit Guide</span>
          </legend>
        </div>

        <div className={styles.product_sizes}>
          {selectedColor &&
            selectedColor.sizes &&
            selectedColor.sizes.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className={`${styles.input_group} ${
                    item.stock === 0 ? styles.disabled : ""
                  }`}
                >
                  <input
                    className={styles.size_radio_btn}
                    type="radio"
                    name="size"
                    id={item.name}
                    value={item.name}
                    disabled={item.stock > 0 ? false : true}
                  />
                  <label htmlFor={item.name} className={styles.size_label}>
                    {item.name}
                  </label>
                </div>
              );
            })}
        </div>

        <div className={styles.product_colors}>
          <div className={styles.product_color_name}>
            <span>COLOR:</span> {product && product.colors[0].color}
          </div>
          <div className={styles.color_group}>
            {product.colors &&
              product.colors.map((item) => {
                return (
                  <div key={item.color} className={styles.color_wrapper}>
                    <input
                      type="radio"
                      name="t_shirt_color"
                      id={item.color}
                      value={item.color}
                      defaultChecked={
                        item.color == selectedColor.color ? true : false
                      }
                      onChange={() => {
                        colorSelctionHandler(item.color);
                      }}
                    />
                    <label
                      htmlFor={item.color}
                      className={styles.product_color_label}
                      checked
                    >
                      <img src={item.images && item.images[0]} alt="" />
                    </label>
                  </div>
                );
              })}
          </div>
        </div>

        <p className={styles.product_price_wrapper}>
          <span className={styles.strike_price}>₹{product.price * 3}</span>
          <span className={styles.price}>₹{product.price}</span>
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
