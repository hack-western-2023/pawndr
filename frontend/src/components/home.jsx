import React from 'react';
import "./home.css";
import home from '../assets/home.png';
import cat from '../assets/cat.png';
import plant from '../assets/plant.png';

const CreateAccount = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${home})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'fixed',
            overflow: 'hidden'
          }}>
            <div className='container'>
                <div className='pawndr'>Pawndr</div>
                <div className='leftdiv'>Create your account:</div>
            </div>
            <div className='inputs'>

            </div>

        </div>
    )

}

export default CreateAccount