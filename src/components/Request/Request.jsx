import React, { useEffect } from "react";
import styles from "./request.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../features/requestSlice";
import { motion } from "framer-motion";

const Request = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.request.request.filter((item) => {
      return item.user === id;
    })
  );

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  return (
    <div>
      {request.map((item, index) => {
        return (
          <div className={styles.request} key={index}>
            {/* <div className={styles.map}>Здесь должна быть карта</div> */}
            <motion.div
              transition={{ duration: 1 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.info}
            >
              <div className={styles.text}>
                <div>Заявка № &ensp;{index + 1}</div>
                <div>Водитель :&ensp; {item.car.name}</div>
                <div>Номер для связи :&ensp; {item.car.phone}</div>
                <div>Ваша машина :&ensp; {item.car.model}</div>
                <div>Отправка от :&ensp; {item.from}</div>
                <div>Прибытие товара в :&ensp; {item.to}</div>
                <div>Общее растояние :&ensp; {item.km} км</div>
                <div>
                  К оплате :&ensp; {item.price} <span>₽</span>
                </div>
              </div>
              <div className={styles.img}>
                {/* Возможно и здесь будет карта */}
                <img src={`http://localhost:3030/${item.car.img}`} alt="" />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
