import React, { useState } from "react";
import Request from "../../components/Request/Request";
import Header from "../../components/Header/Header";
import User from "../../components/User/User"
import styles from "./userpage.module.scss";
import { Link, Navigate } from "react-router-dom";

const UserPage = () => {
  const [path, setPath] = useState('user')
  return (
    <>
      <Header />
      <section>
        <div className={styles.request}>
          {path === 'user' && <User />}
          {path === 'request' && <Request />}
          {/* {path === 'addRequest' && <AddRequest />} */}
          {path === 'card' && <Navigate to={'/cars'} />}
        </div>
        <div className={styles.aside}>
          <div onClick={()=>setPath('user')}>Личная страница</div>
          <div onClick={()=>setPath('request')}>Заявки</div>
          <div onClick={()=>setPath('addRequest')}>Сделать заявку</div>
          <div onClick={()=>setPath('cars')}>Заказанные машины</div>
          <Link to='/' className={styles.Link}><div>Выход</div></Link>
        </div>
      </section>
    </>
  );
};

export default UserPage;
