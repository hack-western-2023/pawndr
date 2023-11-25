import React from 'react';
import "./login.css";
import loginpage from '../assets/loginpage.png'


const Login = () => {

    // route to home
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
                <div className='title'>Hello! Welcome to Pawndr</div>
                <div className='logintitle'>Please log in:</div>
            </div>
            <div className='inputs'>
            <input
            type='text'
            placeholder='Phone Number'
            className='phoneInput'
            />
            <input
            type='password'
            placeholder='Password'
            className='passwordInput'
            />
            </div>
            <button className='loginButton' onClick={handleLoginClick} >Login</button>

        </div>
    )
}

export default Login