import React from "react";
import styles from "./header.module.scss";
import logo from "../../public/logo_2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.application.token);

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
          {token ? (
            <Link to="/user/:id" className={styles.link}>
              <li>profile</li>
            </Link>
          ) : (
            <li className={styles.link_off}>profile</li>
          )}
          <Link to="/" className={styles.link}>
            <li>main</li>
          </Link>
          <Link to="/about" className={styles.link}>
            <li>about us</li>
          </Link>
          <Link to="/signin" className={styles.link}>
            <li className={styles.link_mg}>sign in</li>
          </Link>
          <Link to="/signup" className={styles.link}>
            <li>sign up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
