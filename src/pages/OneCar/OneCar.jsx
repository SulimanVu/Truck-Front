import React from 'react';
import styles from './onecar.module.scss'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCar } from '../../features/carSlice';
import Header from '../../components/Header/Header';
import {motion} from "framer-motion"

const OneCar = () => {

    const {id} = useParams()

    const car = useSelector((state) => state.car.car.filter(item => {
    
        return id === item._id
    }))

    console.log(car);

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchCar())
    }, [dispatch])

    let num = 2333;
    return (
        <>
            <Header />
        <div>

           {car.map(el => {
            return (
                <div className={styles.container}> 

                <motion.div
                transition={{duration:2}}
                initial={{opacity:0, x:-100}} 
                animate={{opacity:1, x:0}}
                className={styles.img_container}><img src={`http://localhost:3030/${el.img}`} alt="" className={styles.img}/></motion.div>

                <motion.div
                    transition={{duration:2}}
                    initial={{opacity:0, x:100}} 
                    animate={{opacity:1, x:0}}
                    
                 className={styles.description_container}>
                    <h3 className={styles.name}>{el.name}</h3>

                   <div className={styles.loadCapcity_block}>
                   <img src="https://cdn-icons-png.flaticon.com/128/38/38075.png" alt=""  className={styles.loadCapcity}/>
                   <p className={styles.str}>&nbsp;&nbsp;Грузоподъемность {el.loadСapacity} киллограмм</p>
                   </div>

                   <div className={styles.width_block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/722/722304.png" alt="" className={styles.width_img}/>
                    <p className={styles.width_txt}>&nbsp;&nbsp;Ширина борта {el.bottleWidth} м</p>
                   </div>

                   <div className={styles.height_block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1629/1629503.png" alt=""  className={styles.height_img}/>
                    <p className={styles.height_txt}>&nbsp;&nbsp;Высота борта {el.bottleHeight} м</p>
                   </div>

                  {el.fridge ?  <div className={styles.frigde_block}>
                     <img src="https://cdn-icons-png.flaticon.com/512/2935/2935024.png" alt="" className={styles.frigde_img}/>
                     <p className={styles.frigde_txt}>&nbsp;&nbsp;Наличие холодильника</p>
                   </div> : null}

                  {el.carTransporter ?  <div className={styles.carTransportet_block}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6651/6651425.png" alt=""  className={styles.carTransportet_img}/>
                    <p className={styles.carTransportet_txt}>&nbsp;&nbsp;Возможность перевозки авто</p>
                   </div> : null}
                </motion.div>
                
                 </div>
                
            )
           })}
           
        </div>
        </>
    );
};

export default OneCar;