import React from "react";
import Header from "../../components/Header/Header";
import styles from "./about.module.scss";

const About = () => {
  return (
    <>
      <Header />
      <section className={styles.general}>
        <div className={styles.left_block}></div>
        <div className={styles.right_block}>
          <div className={styles.info}>
            <h1>Гарантия.</h1>
            <h4>
              Пользуясь нашими услугами, Вы тем самым автоматически страхуете
              свой груз и не переживаете за его сохранность.
            </h4>
          </div>
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

      <div className={styles.general2}>
        <div className={styles.left_block}>
          <div className={styles.info}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
          <div className={styles.info}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
          <div className={styles.info}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.general3}>
        <div className={styles.left_block}></div>
        <div className={styles.right_block}>
          <div className={styles.info}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
          <div className={styles.info2}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
          <div className={styles.info3}>
            <h1>Lorem</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quisquam similique repudiandae. Repellat quam, officia temporibus
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
