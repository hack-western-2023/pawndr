import React from 'react';
import { useUser } from '../UserContext';
import './home.css';
import home from '../assets/home.svg';
import Calendar from 'react-calendar';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [responseContent, setResponseContent] = useState(null);
    const [sentiment, setSentiment] = useState(null);
    const [summary, setSummary] = useState(null);

    const { user } = useUser(); // Using useUser to get the user data
    const name = user.name || 'User';
    const phoneNumber = user.phoneNumber;

    const journal = 'journal goes here';
    const analysis = 'analysis here';

    const handleDateClick = async (value, event) => {
        const formattedDate = value.toISOString(); // ISO format
        try {
            // Make a POST request to your API
            axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/message/${phoneNumber}`, {date: formattedDate})
                .then(response => {
                    console.log(response.data);
                    // Process the response data here
                    setResponseContent(response.data.chat)
                })
                .catch(error => {
                    console.error('Error:', error);
                    setResponseContent("")
                });

            axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/sentiment/${phoneNumber}`, {date: formattedDate})
                .then(response => {
                    console.log(response.data);
                    // Process the response data here
                    setSentiment(response.data.sentiment)
                    setSummary(response.data.summary)
                })
                .catch(error => {
                    console.error('Error:', error);
                    setSentiment("")
                    setSummary("")
                });


        } catch (error) {
            console.error('Error making API request:', error);
        }
        /*
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
        */
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
                    Hi there, <span className="underlined">{name}!</span>  <a href='/' className="underlinedsmall">Logout</a>
                </div>
                <img className='cat' src={cat}/>
                <div className='journalentries'>
                    <div className='analysis-container'>
                        <span className='analysis'>{sentiment + summary}</span>
                    </div>
                    <div className='journal-container' style={{ marginTop: '50px' }}>
                        <span className='journal'>{responseContent}</span>
                    </div>
                </div>
                <img className='plant' src={plant}/>
                <Calendar
                    className="calendar-container"
                    onClickDay={(value, event) => {
                        handleDateClick(value, event);
                        setSelectedDate(value);
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
