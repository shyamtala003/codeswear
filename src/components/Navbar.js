import React, { useState } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
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
    setOpen(!isOpen);
  }

  return (
    <nav style={{ position: "sticky", top: "0px" }}>
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

      <div className={styles.navbar_responsive}>
        <div className={styles.navbar_left_content}>
          <Hamburger size={20} onToggle={toggleMenubar}></Hamburger>
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

        <ul
          className={styles.navbar_links}
          style={isOpen ? { left: "0%" } : null}
        >
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
