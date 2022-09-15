import React from "react";
import Header from "../../components/Header/Header";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import styles from "./about.module.scss";

const About = () => {
  return (
    <>
      <HeaderMain />
      <section className={styles.general}>
        <div className={styles.info}>
          <h1>Гарантия.</h1>
          <h4>
            Пользуясь нашими услугами, Вы тем самым автоматически страхуете свой
            груз и не переживаете за его сохранность.
          </h4>
          <div className={styles.info2}>
            <h1>Отвественность.</h1>
            <h4>
              Каждый наш работник понимает всю значимость дела, которым он
              занимается и с ответсвенностью относится к своей работе
            </h4>
          </div>
          <div className={styles.info3}>
            <h1>Качество.</h1>
            <h4>Мне надоело что-то придумывать и держите тупо текст</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
