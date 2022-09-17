import React, { useEffect } from "react";
import styles from "./request.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../features/requestSlice";
import { motion } from "framer-motion";

const Request = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  const request = useSelector((state) =>
    state.request.request.filter((item) => {
      return item.user === id;
    })
  );
  

  return (
    <div>
      {request.map((item, index) => {
        return (
          <div className={styles.request} key={index}>
            <motion.div
              transition={{ duration: 1 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.info}
            >
              <div className={styles.text}>
                <div>Заявка №&ensp;{index + 1}</div>
                <div><span>Водитель :</span>&ensp; {item.car.name}</div>
                <div><span>Номер для связи :</span>&ensp; {item.car.phone}</div>
                <div><span>Ваша машина :</span>&ensp; {item.car.model}</div>
                <div><span>Отправка от :</span>&ensp; {item.from}</div>
                <div><span>Прибытие товара в :</span>&ensp; {item.to}</div>
                <div><span>Общее растояние :</span>&ensp; {item.km} км</div>
                <div><span>Вес груза :</span>&ensp; {item.kg} кг</div>
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
