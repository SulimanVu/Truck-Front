import React from "react";
import styles from "./headermain.module.scss";
import logo from "../../public/logo_2.png";

const HeaderMain = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img alt="#" src={logo} />
      </div>
      <div className={styles.nav_top}>
        <ul>
          <li>cars</li>
          <li>profile</li>
          <li>Service</li>
          <li>Pages</li>
          <li>Main</li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMain;
