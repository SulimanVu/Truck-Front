import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../CarsPage/cars.module.scss";
import { fetchCar } from "../../features/carSlice";
import { useSelector } from "react-redux/es/exports";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchCategory } from "../../features/categorySlice";
import Header from "../../components/Header/Header";

const CarsPage = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.car.car);
  const categories = useSelector((state) => state.category.category);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCar());
    dispatch(fetchCategory());
  }, [dispatch]);

  const filterCars = cars.filter((item) => {
    if (!id) {
      return true;
    }
    return id === item.category._id;
  });

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1>
          <span>НАШ АВТОПАРК</span>
        </h1>
        <div className={styles.categoryBlock}>
          <Link to="/cars" className={styles.links}>
            Все
          </Link>
          {categories.map((item, index) => {
            return (
              <div key={index} className={styles.link_blog}>
                <Link
                  className={styles.links}
                  key={item._id}
                  to={`/cars/category/${item._id}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.cards}>
          {filterCars.length ? (
            filterCars.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  transition={{ duration: 2 }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={styles.onecard}
                >
                  <div className={styles.headline}></div>
                  <img src={`http://localhost:3030/${item.img}`} alt="" />
                  <h3 className={styles.title}>{item.model}</h3>
                  <div className={styles.btnSeeMore}>
                    <Link to={`/car/${item._id}`}>Подробнее</Link>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              transition={{ duration: 2 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={styles.not_auto}
            >
              <h1>НЕТ МАШИН</h1>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
