import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../features/applicationSlice';

const SignUp = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
        dispatch(authSignUp({name, phone, mail, login, password}))
        setName('');
        setPhone('');
        setMail("");
        setLogin('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <input type="text" value={name} placeholder='имя...' onChange={(e) => handleName(e)}/>
                <input type="tel" value={phone} placeholder='телефон' onChange={(e)=>handlePhone(e)}/>
                <input type="email" value={mail} placeholder='mail...' onChange={(e)=>handleMail(e)}/>
                <input type="text" value={login} placeholder='логин...' onChange={(e)=> handleLogin(e)}/>
                <input type="password" value={password} placeholder='пароль...' onChange={(e)=> handlePassword(e)}/>
                <button type='submit'>add</button>
            </form>
        </div>
    );
};

export default SignUp;