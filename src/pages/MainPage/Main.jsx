import React from 'react';
import styles from './main.module.scss'

const Main = () => {
    return (
        <div className={styles.main_img}>
            <h1>ДОСТАВКА В ЛЮБЫЕ ТОЧКИ</h1>
            <h2>100% ГАРАНТИЯ ЦЕЛЛОСТНОСТИ С БОЛЕЕ ЧЕМ 5 МОДЕРНИЗИРОВАННЫМИ ТРАНСПОРТНЫМИ СРЕДСТВАМИ ДОСТАВКИ КАК НА МЕСТНЫЕБ ТФК И НА МЕЖДУНАРОДНЫЕ ЦЕЛИ.</h2>
            <button>КУПИТЬ СЕЙЧАС</button>
            <button>ПОЛУЧИТЬ ЦЕНУ</button>
        </div>
    );
};

export default Main;