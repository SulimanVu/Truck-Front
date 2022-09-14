import React from "react";
import { useDispatch } from "react-redux";
import styles from "../CarsPage/cars.module.scss";
import truck from "../../public/truck.jpg";

const CarsPage = () => {
  // const dispatch = useDispatch();

  // const cars = useSelector ((state) => state.)
  return (
    <div>
      <div className={styles.wrapper}>
        <h1>
          <span>OUR FLEET</span>
        </h1>
        <ul className={styles.filter}>
          <li>All</li>
          <li>Short Trucks</li>
          <li>Prime Trucks</li>
          <li>Vans</li>
          <li>Big load trucks</li>
        </ul>
        <div className={styles.cards}>
          <div className={styles.onecard}>
            <div className={styles.headline}></div>
            <img src={truck} alt="" />
            <h3 className={styles.title}>Short trucks</h3>
            <div className={styles.btnSeeMore}>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className={styles.onecard}>
            <div className={styles.headline}></div>
            <img src={truck} alt="" />
            <h3 className={styles.title}>Short trucks</h3>
            <div className={styles.btnSeeMore}>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className={styles.onecard}>
            <div className={styles.headline}></div>
            <img src={truck} alt="" />
            <h3 className={styles.title}>Short trucks</h3>
            <div className={styles.btnSeeMore}>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className={styles.onecard}>
            <div className={styles.headline}></div>
            <img src={truck} alt="" />
            <h3 className={styles.title}>Short trucks</h3>
            <div className={styles.btnSeeMore}>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
