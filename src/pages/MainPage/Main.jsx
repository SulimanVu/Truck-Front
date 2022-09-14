import React from "react";
import styles from "./main.module.scss";
import MainBlock from "../../components/MainBlocks/MainBlock";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <HeaderMain />
      <section className={styles.main_img}>
        <div className={styles.container}>
          <div className={styles.text_block}>
            <motion.h1
              transition={{ duration: 2 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              ДОСТАВКА В ЛЮБЫЕ ТОЧКИ
            </motion.h1>
            <motion.h2
              transition={{ duration: 3 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              100% ГАРАНТИЯ ЦЕЛЛОСТНОСТИ С БОЛЕЕ ЧЕМ 5 МОДЕРНИЗИРОВАННЫМИ
              ТРАНСПОРТНЫМИ СРЕДСТВАМИ ДОСТАВКИ КАК НА МЕСТНЫЕБ ТФК И НА
              МЕЖДУНАРОДНЫЕ ЦЕЛИ.
            </motion.h2>
          </div>
          <motion.div
            transition={{ duration: 2.5 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0, 0, 0.6, 0.8, 1], y: 0 }}
            className={styles.btn_block}
          >
            <button>ОФОРМИТЬ ЗАЯВКУ</button>
            <button>СФОРМИРОВАТЬ ЦЕНУ</button>
          </motion.div>
        </div>
      </section>
      <MainBlock />
    </>
  );
};

export default Main;
