import React from 'react';
import './home.css';
import home from '../assets/home.svg';
import Calendar from 'react-calendar';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';

const Home = () => {
    const name = 'meowmeow';

    const journal = 'journal goes here';
    const analysis = 'analysis here';

    const handleDateClick = (value, event) => {
        const formattedDate = value.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        });
        console.log('Selected date:', formattedDate);
    };

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
                    Hi there <span className="underlined">{name}</span>!
                </div>
                <img className='cat' src={cat}/>
                <div className='journalentries'>
                    <div className='analysis-container'>
                        <span className='analysis'>{analysis}</span>
                    </div>
                    <div className='journal-container' style={{ marginTop: '50px' }}>
                        <span className='journal'>{journal}</span>
                    </div>
                </div>
                <img className='plant' src={plant}/>
                <Calendar
                    className="calendar-container"
                    onClickDay={handleDateClick}
                />
            </div>
        </div>
    );
};

export default Home;
