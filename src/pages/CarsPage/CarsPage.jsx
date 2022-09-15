import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../CarsPage/cars.module.scss";
import { fetchCar } from "../../features/carSlice";
import { useSelector } from "react-redux/es/exports";
import {Link, useParams} from 'react-router-dom'

import { fetchCategory } from "../../features/categorySlice";
import Header from "../../components/Header/Header";

const CarsPage = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.car.car);
  const categories = useSelector((state) => state.category.category)

  const { id } = useParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCar());
    dispatch(fetchCategory())
  }, [dispatch]);

  const filterCars = cars.filter((item) => {
    if (!id) {
        return true
    }
    return id === item.category._id
  })
//   const filtered = filterCars.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase())
//   })

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <h1>
          <span>НАШ АВТОПАРК</span>
        </h1>
        <div className={styles.categoryBlock}>
            {categories.map((item) => {
                return (
                    <Link className={styles.links} key={item._id} to={`/cars/category/${item._id}`}>{item.name}</Link>
                )
            })}
        </div>
        <div className={styles.cards}>
          {filterCars.map((item) => {
            return (
              <div className={styles.onecard}>
                <div className={styles.headline}></div>
                <img src={`http://localhost:3030/${item.img}`} alt="" />
                <h3 className={styles.title}>{item.model}</h3>
                <div className={styles.btnSeeMore}>
                  <Link to={`/car/${item._id}`}>Подробнее</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
