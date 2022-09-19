import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import styles from "../Registr/signup.module.scss";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(true);
  const [iconPassword, setIconPassword] = useState(true);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setPassword("");
    setLogin("");
    dispatch(authSignIn({ login, password }));
  };

  const handleClick = () => {
    setText(!text);
    setIconPassword(!iconPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block_signUp}>
        <div className={styles.block_two}>
          <h1 className={styles.title}>Sign In</h1>
          <form onSubmit={handleSignUp} className={styles.form_signUp}>
            <input
              type="text"
              value={login}
              placeholder="Логин"
              onChange={(e) => handleLogin(e)}
              className={`${styles.input4} ${styles.inp}`}
            />
            <input
              type={text ? "password" : "text"}
              value={password}
              placeholder="Пароль"
              onChange={(e) => handlePassword(e)}
              className={styles.input5}
            />
            <img
              src={
                iconPassword
                  ? "https://cdn-icons-png.flaticon.com/512/159/159604.png"
                  : "https://cdn-icons-png.flaticon.com/512/7615/7615155.png"
              }
              alt="#"
              className={styles.eyeForPasswor}
              onClick={handleClick}
            />

            <button type="submit" className={styles.btn}>
              ВХОД
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
