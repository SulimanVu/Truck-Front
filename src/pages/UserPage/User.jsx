import React from "react";
import Request from "../../components/Request/Request";
import Header from "../../components/Header/Header";
import styles from "./user.module.scss";

const User = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.request}>
          <Request />
        </div>
        <div className={styles.aside}>
          <div>Регистрация</div>
          <div>Заявки</div>
          <div>Сделать заявку</div>
          <div>Заказанные машины</div>
          <div>Выход</div>
        </div>
      </section>
    </>
  );
};

export default User;
