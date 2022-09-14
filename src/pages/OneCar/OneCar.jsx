import React from 'react';
import styles from './onecar.module.scss'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCar } from '../../features/carSlice';

const OneCar = () => {

    // const {id} = useParams()

    // const car = useSelector(state => state.car.car.filter(item => {
    //     if (!id) return true;

    //     return id === item._id
    // }))

    // const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(fetchCar)
    // }, [dispatch])

    let num = 2333;
    return (
        <div>
            <div className={styles.img_block}><img src="https://rating-avto.ru/wp-content/uploads/2021/05/luchshie-gruzoviki-v-mire.jpg" alt=""  className={styles.img}/></div>
            <div className={styles.container}>
                <div className={styles.cargo_container}>
                        <img src="https://cdn-icons-png.flaticon.com/128/28/28326.png" alt="" className={styles.cargo_img}/>
                        <p>Грузоподъемность в киллограмах: {num} </p>
                       
                </div>

                <div>
                    <img src="" alt="" />
                </div>
                <div>
                 
                </div>
            </div>
        </div>
    );
};

export default OneCar;