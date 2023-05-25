import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.column}>
          <Link className={styles.footer_link} href={"/"}>
            <img src="/logo.png" className={styles.logo}></img>
          </Link>
          <p className={styles.small_text}>Wear the code</p>
          <p className={styles.small_text}>
            Premium coding tshirts, hoodies and apparals
          </p>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Shop</h1>
          <Link className={styles.footer_link} href={"/"}>
            T-Shirts
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Sweatshirts
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Hoodies
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Zippper
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Hoodies
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Mugs
          </Link>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>CUSTOMER SERVICE</h1>
          <Link className={styles.footer_link} href={"/"}>
            Contact Us
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            About Us
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Return Policy
          </Link>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>POLICY</h1>
          <Link className={styles.footer_link} href={"/"}>
            Privacy Policy
          </Link>
          <Link className={styles.footer_link} href={"/"}>
            Terms and Conditions
          </Link>
        </div>
        <div className={styles.column}>
          <img src="/pay.png" alt="" className={styles.pay_img} />
        </div>
      </div>
      <p className={styles.copyright}>
        © {currentYear} CodesWear.com — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
