import React, { useEffect } from "react";
import styles from "./request.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../features/requestSlice";

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
      {request.map((item) => {
        return (
          <section className={styles.request}>
            <div className={styles.map}>Здесь должна быть карта</div>
            <div>
                <div>Ваша машина: {item.car.model}</div>
                <div> Отправка от: {item.from}</div>
                <div>Прибытие товара в: {item.to}</div>
                <div>Общее растояние: {item.km} км</div>
                <div>К оплате: {item.price} <span>₽</span></div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Request;
