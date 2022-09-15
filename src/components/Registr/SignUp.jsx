import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../features/applicationSlice';
import styles from './signup.module.scss'





const SignUp = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState(true)
    const [iconPassword, setIconPassword] = useState(true)

    const dispatch = useDispatch()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleMail = (e) => {
        setMail(e.target.value)
    }

    const handleLogin = (e) => {
        setLogin(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setPassword('');
        setName('');
        setPhone('');
        setMail("");
        setLogin('');
        dispatch(authSignUp({name, phone, mail, login, password}))
        
    }








   const handleClick = () => {
        setText(!text)
        setIconPassword(!iconPassword)
    }

    return (
        <div className={styles.container}>
            <div className={styles.block_signUp}>
                <div className={styles.block_two}>
                    <h1 className={styles.title}>Sign Up</h1>
                    <form onSubmit={handleSignUp} className={styles.form_signUp}>
                        <input type="text" value={name} placeholder='Имя...' onChange={(e) => handleName(e)} className={styles.input}/>
                        <input type="tel" value={phone} placeholder='Телефон...' onChange={(e) => handlePhone(e)} className={styles.input2}/>
                        <input type="email" value={mail} placeholder='Mail....' onChange={(e) => handleMail(e)} className={styles.input3}/>
                        <input type="text" value={login} placeholder='Логин...' onChange={(e) => handleLogin(e)} className={styles.input4}/>
                        <input type={text ? 'password' : 'text'} value={password} placeholder='Пароль...' onChange={(e) => handlePassword(e)} className={styles.input5}/>
                        <img src={iconPassword ? "https://cdn-icons-png.flaticon.com/512/159/159604.png" : "https://cdn-icons-png.flaticon.com/512/7615/7615155.png"} alt="" className={styles.eyeForPassword} onClick={handleClick}/>

                        <button type='submit' className={styles.btn}>Регистрация</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignUp;