import React from "react";
import styles from "./main.module.scss";
import MainBlock from "../../components/MainBlocks/MainBlock";
import HeaderMain from "../../components/HeaderMain/HeaderMain"

const Main = () => {
  return (
    <>
      <HeaderMain />
      <section className={styles.main_img}>
        <div className={styles.container}>
          <div className={styles.text_block}>
            <h1>ДОСТАВКА В ЛЮБЫЕ ТОЧКИ</h1>
            <h2>
              100% ГАРАНТИЯ ЦЕЛЛОСТНОСТИ С БОЛЕЕ ЧЕМ 5 МОДЕРНИЗИРОВАННЫМИ
              ТРАНСПОРТНЫМИ СРЕДСТВАМИ ДОСТАВКИ КАК НА МЕСТНЫЕБ ТФК И НА
              МЕЖДУНАРОДНЫЕ ЦЕЛИ.
            </h2>
          </div>
          <div className={styles.btn_block}>
            <button>КУПИТЬ СЕЙЧАС</button>
            <button>ПОЛУЧИТЬ ЦЕНУ</button>
          </div>
        </div>
      </section>
      <MainBlock />
    </>
  );
};

export default Main;
