import React from "react";
import styles from "./headermain.module.scss";
import logo from "../../public/logo_2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const HeaderMain = () => {
  const id = useSelector((state) => state.application.userId);
  const token = useSelector((state) => state.application.token);

  return (
    <header>
      <motion.div
        transition={{ duration: 2 }}
        initial={{ x: -109, rotate: 0, y: -40 }}
        animate={{ x: 0, rotate: 0, y: -6 }}
        className={styles.logo}
      >
        <Link to="/">
          <img alt="#" src={logo} />
        </Link>
      </motion.div>
      <div className={styles.nav_top}>
        <ul>
          {token ? (
            <Link to={`/user/${id}`} className={styles.link}>
              <li>profile</li>
            </Link>
          ) : (
            <li className={styles.link_off}>profile</li>
          )}
          <Link to="/cars" className={styles.link}>
            <li>cars</li>
          </Link>
          <Link to="/about" className={styles.link}>
            <li>about us</li>
          </Link>
          <Link to="/login" className={styles.link}>
            <li className={styles.link_mg}>sign in / sign up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMain;
