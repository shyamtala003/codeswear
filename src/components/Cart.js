import React from "react";
import { FiTrash } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { IoBagRemoveOutline } from "react-icons/io5";
import styles from "../styles/Cart.module.css";
import CartToggler from "@/context/CartToggler";

const Cart = () => {
  let { cart, togglerCart } = CartToggler();
  return (
    <>
      <div
        className={styles.cart}
        style={cart ? { left: "0%", opacity: 1 } : {}}
      >
        <div className={styles.cart_close_btn}>
          <GrClose
            onClick={() => {
              togglerCart(false);
            }}
          ></GrClose>
        </div>
        <div
          className={styles.cart_closer}
          onClick={() => {
            togglerCart(!cart);
          }}
        ></div>
        <div className={styles.cart_wrapper}>
          <h1 className={styles.cart_title}>Your Cart</h1>
          <div className={styles.cart_items_container}>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
            <div className={styles.cart_item}>
              <div className={styles.product_image}>
                <img src="/tshirt.avif" alt="" />
              </div>
              <div className={styles.product_info}>
                <div className={styles.title_and_remover}>
                  <h3 className={styles.product_name}>
                    Malbon x Nike Dri-FIT Player Half Zip Top
                  </h3>
                  <FiTrash className={styles.icon}></FiTrash>
                </div>
                <p className={styles.product_desc}>S / Dust/White</p>
                <div className={styles.quantity_and_price}>
                  <div className={styles.quantity}>
                    <button className={styles.incrementer}>+</button>
                    <p className={styles.quantity_text}>2</p>
                    <button className={styles.decrementer}>-</button>
                  </div>
                  <div className={styles.price}>₹500</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.checkout_info}>
            <div className={styles.cart_item_details}>
              <p className={styles.subtotal}>SUBTOTAL (3 Items)</p>
              <p className={styles.total_price}>₹329.00</p>
            </div>
            <button className={styles.checkout_button}>
              <BsBagCheck className={styles.icon}></BsBagCheck> CHECKOUT
            </button>
            <button className={styles.clear_cart_button}>
              <IoBagRemoveOutline className={styles.icon} />
              CLEAR CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
