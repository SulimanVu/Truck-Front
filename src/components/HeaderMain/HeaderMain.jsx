import React from "react";
import styles from "./headermain.module.scss";
import logo from "../../public/logo_2.png";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img alt="#" src={logo} />
      </div>
      <div className={styles.nav_top}>
        <ul>
          <Link to="/cars" className={styles.link}>
            <li>cars</li>
          </Link>
          <Link to="/user/:id" className={styles.link}>
            <li>profile</li>
          </Link>
          <Link to="/cars" className={styles.link}>
            <li>Service</li>
          </Link>
          <Link to="/about" className={styles.link}>
            <li>about us</li>
          </Link>
          <Link to="/" className={styles.link}>
            <li>Main</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMain;
