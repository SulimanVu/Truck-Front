import React from "react";
import cardOne from "../../public/card1.jpg";
import cardTwo from "../../public/card2.jpg";
import cardThree from "../../public/card3.jpg";
import styles from "./mainblock.module.scss";
import { motion } from "framer-motion";

const MainBlock = () => {
  return (
    <div className={styles.bg_img}>
      <section className={styles.cards}>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.card}
        >
          <div className={styles.card_img}>
            <img src={cardOne} />
          </div>
          <div className={styles.card_text}>
            <h4>ВАШ ГРУЗ НАША ЗАБОТА</h4>
            <br />
            <hr />
            <br />
            <p>
              Мы предлагаем широкий спектр транспортных услуг от проектных
              грузов до международных перевозок и внутренней розничной
              дистрибуции и доставки.
            </p>
            <h3>ЧИТАТЬ ДАЛЕЕ</h3>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 2 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.card}
        >
          <div className={styles.card_img}>
            <img src={cardTwo} />
          </div>
          <div className={styles.card_text}>
            <h4>100% БЕЗОПАСНАЯ ДОСТАВКА</h4>
            <br />
            <hr />
            <br />
            <p>
              Наши мощности дают нам свободу выполнения проектов различного
              масштаба. От небольших личных проектов до строительства
              мега-строек большого масштаба.
            </p>
            <h3>ЧИТАТЬ ДАЛЕЕ</h3>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 3 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.card}
        >
          <div className={styles.card_img}>
            <img src={cardThree} />
          </div>
          <div className={styles.card_text}>
            <h4>СОВРЕМЕННЫЙ АВТОПАРК</h4>
            <br />
            <hr />
            <br />
            <p>
              Наши современно оборудованные автомобили работают в странах по
              всему миру под нашим собственным флагом или в цветах наших
              клиентов. В нашем автопарке более 30 автомобилей.
            </p>
            <h3>ЧИТАТЬ ДАЛЕЕ</h3>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MainBlock;
