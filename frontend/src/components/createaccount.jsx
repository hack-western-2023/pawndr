import React from 'react';
import "./createaccount.css";
import createbackground from '../assets/createbackground.svg';
import logoLight from '../assets/logoLight.svg';


const CreateAccount = () => {

    const handleLoginClick = () => {
        window.location.href = '/';
      };

    return (
        <div style={{ 
            backgroundImage: `url(${createbackground})`, 
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
                <div className='title'>So happy you're joining Pawndr!</div>
                <div className='createtitle'>Create your account:</div>
            </div>
            <div className='inputs'>
            <input
            type='text'
            placeholder='Name'
            className='nameInput'
            />
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
            <button className='registerButton' onClick={handleLoginClick} >Create Account</button>

        </div>
    )

}

export default CreateAccount