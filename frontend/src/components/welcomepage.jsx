import React from 'react';
import './welcomepage.css';
import home from '../assets/home.svg';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';
import pawn from '../assets/pawn.svg';

const Welcome = () => {
    const name = 'meowmeow';

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${home})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
            />
            <div className="container">
            <div className="glow-background pawndr">Pawndr</div>
                <div className='sayhello'>
                    Hi there, <span className="underlined">{name}!</span>  <a href='/' className="underlinedsmall">Logout</a>
                </div>
                <img className='pawn' src={pawn}/>
                <div className='welcomeText'>
                    Welcome! Pawn is excited to meet you.
                </div>
                <div className='startText'>
                    To start, please text 
                </div>
            </div>
        </div>
    );
};

export default Welcome;
