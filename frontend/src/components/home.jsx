import React from 'react';
import './home.css';
import home from '../assets/home.svg';
import Calendar from 'react-calendar';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';

const Home = () => {
    const name = 'meowmeow';

    const journal = 'journal entry here'

    return (
    <div
    style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
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
        <div className="pawndr">Pawndr</div>
        <div className='sayhello'>
        Hi there <span className="underlined">{name}</span>!
        </div>
        <img className='cat' src={cat}/>
        <div className='journalentries'>
            <span className='journal'>{journal}</span>
        </div>
        <img className='plant' src={plant}/>
        {/* <Calendar /> */}
        </div>
    </div>
);
}

export default Home;
