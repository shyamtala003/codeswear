import React, { useState } from "react";
import Link from "next/link";
import { Squash as Hamburger, Turn } from "hamburger-react";
import {
  AiOutlineSearch,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsBag, BsInstagram, BsFacebook } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import styles from "../styles/Navabar.module.css";

const Navbar = () => {
  let [searchText, setsearchText] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleSearch(e) {
    setsearchText(e.target.value);
  }

  function clearSearchInput() {
    setsearchText("");
  }

  function toggleMenubar() {
    // code for removing sccrolling on menu opening
    if (!isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      {/* menu for big screens */}
      <div className={styles.navbar_wrapper}>
        <div className={styles.left_navbar_content}>
          <Link href={"/"} className={styles.logo}>
            <img src="./logo.png" alt="" />
          </Link>

          <div className={styles.navbar_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link href={"/"}>Tshirts</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Hoodies</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Sweatshirts</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Zippper</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Hoodies</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Mousepads</Link>
              </li>
              <li className={styles.nav_link}>
                <Link href={"/"}>Caps</Link>
              </li>
            </ul>

            <div className={styles.search_wrapper}>
              <AiOutlineSearch className={styles.search_icon}></AiOutlineSearch>
              <input
                type="text"
                name="search"
                className={styles.search}
                placeholder="Search on Melborn"
                value={searchText}
                onChange={handleSearch}
              />
              <GrClose
                className={styles.clear_icon}
                onClick={clearSearchInput}
              />
            </div>
          </div>
        </div>

        <div className={styles.right_navbar_content}>
          <Link href={"/"} className={styles.signup_btn}>
            Signup
          </Link>
          <BsBag className={styles.cart_btn} />
        </div>
      </div>

      {/* code for small and medium  screen */}
      <div className={styles.navbar_responsive}>
        <div className={styles.navbar_left_content}>
          <Hamburger
            size={20}
            toggled={isOpen}
            toggle={toggleMenubar}
          ></Hamburger>
          <AiOutlineSearch className={styles.icon} />
        </div>
        <div className={styles.navbar_center_content}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.navbar_right_content}>
          <BsBag className={styles.icon} />
          <div className={styles.user_menu}>
            <BiUser className={styles.icon} />
          </div>
        </div>
        <div
          className={styles.navbar_link_content}
          style={isOpen ? { left: "0%", minWidth: "100%", opacity: 1 } : null}
        >
          <ul className={styles.navbar_links}>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Tshirts
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Hoodies
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Sweatshirts
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Mugs
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Zippper
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Hoodies
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Mousepads
              </Link>
            </li>
            <li className={styles.navbar_link}>
              <Link href={"/"} className={styles.link}>
                Caps
              </Link>
            </li>

            {/* social media links */}
            <li className={styles.social_links}>
              <Link href={"/"} className={styles.social_link}>
                <BsInstagram></BsInstagram>
              </Link>
              <Link href={"/"} className={styles.social_link}>
                <BsFacebook></BsFacebook>
              </Link>
              <Link href={"/"} className={styles.social_link}>
                <AiFillLinkedin></AiFillLinkedin>
              </Link>
              <Link href={"/"} className={styles.social_link}>
                <AiOutlineTwitter></AiOutlineTwitter>
              </Link>
            </li>
          </ul>
          <div className={styles.navbar_closer} onClick={toggleMenubar}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
