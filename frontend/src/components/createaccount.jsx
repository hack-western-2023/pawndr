import React from 'react';
import "./createaccount.css";
import createbackground from '../assets/createbackground.png'

const CreateAccount = () => {
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
                <div className='title'>So happy you're joining us!</div>
                <div className='logintitle'>Create your account:</div>
            </div>
            <div className='inputs'>

            </div>

        </div>
    )

}

export default CreateAccount