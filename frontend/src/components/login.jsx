import React from 'react';
import "./login.css";
import loginpage from '../assets/loginpage.svg'
import logoLight from '../assets/logoLight.svg';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLoginClick = () => {
        window.location.href = '/';
    };

    return (
        <div style={{ 
            backgroundImage: `url(${loginpage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'fixed',
            overflow: 'hidden'
            }}>
            
            <div className='container'>
                <img className='logo' src={logoLight}/>
                <div className='title'>Hello! Welcome to Pawndr</div>
                <div className='logintitle'>Please log in:</div>
            </div>
            <div className='inputs'>
            <input
            type='text'
            placeholder='Phone Number'
            className='loginphoneInput'
            />
            <input
            type='password'
            placeholder='Password'
            className='loginpasswordInput'
            />
            </div>
            <button className='loginButton' onClick={handleLoginClick} >Login</button>
            <a className='create' href='/createaccount'>Create Account</a>
            </div>
    )
}

export default Login