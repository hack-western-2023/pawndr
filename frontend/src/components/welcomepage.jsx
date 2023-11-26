import React, { useState, useEffect } from 'react';
import './welcomepage.css';
import home from '../assets/home.svg';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';
import { useUser } from '../UserContext';
import pawn from '../assets/pawn.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Welcome = ({ onLogin }) => {
    const { user } = useUser();
    const name = user.name || 'User';
    const navigate = useNavigate();

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
                <div className='sayhello'>
                    Hi there, <span className="underlined">Welcome to Pawndr!</span>  <a href='/' className="underlinedsmall">Logout</a>
                </div>
                <img className='pawn' src={pawn}/>
                <div className='welcomeText'>
                    Welcome! Pawn is excited to meet you.
                </div>
                <div className='startText'>
                    To start, please text us on WhatsApp at +1 249-663-8103
                </div>
                <Link to="/home">
                    <button className='homeButton'>Home</button>
                    </Link>
            </div>
        </div>
    );
};

export default Welcome;