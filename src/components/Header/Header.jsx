import React from "react";
import styles from "./header.module.scss";
import burger from "../../public/burger.png";
import logo from "../../public/logo_2.png";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.nav_top}>
        <ul>
          <li>About</li>
          <li>Menu</li>
          <li>Service</li>
          <li>Pages</li>
          <li>Main</li>
        </ul>
        <div className={styles.menu}>
          <img src={burger} />
        </div>
      </div>
    </header>
  );
};

export default Header;