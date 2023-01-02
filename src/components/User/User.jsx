import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../features/requestSlice";
import { fetchUser } from "../../features/userSlice";
import styles from "./user.module.scss";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.user.users.filter((item) => {
      return id === item._id;
    })
  );
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchRequest())
  }, [dispatch]);

  const request = useSelector((state) =>
  state.request.request.filter((item) => {
    return item.user === id;
  })
);
  return (
    <div className={styles.main}>
      {user.map((item, index) => {
        return (
          <div className={styles.outfit} key={index}>
            <div className={styles.img}></div>
            <div className={styles.text}>
              <div>
                <span>Имя пользователя:</span>&nbsp;&nbsp;{item.name}
              </div>
              <div>
                <span>Номер телефона:</span>&nbsp;&nbsp;{item.phone}
              </div>
              <div>
                <span>E-mail:</span>&nbsp;&nbsp;{item.mail}
              </div>
              <div><span>Число заявок:</span>&nbsp;&nbsp;{request.length}</div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default User;
