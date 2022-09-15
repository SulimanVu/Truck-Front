import React from "react";
import styles from "./header.module.scss";
import logo from "../../public/logo_2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img alt="#" src={logo} />
        </Link>
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

export default Header;
