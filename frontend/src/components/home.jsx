import React, { useEffect } from 'react';
import { useUser } from '../UserContext';
import './home.css';
import home from '../assets/home.svg';
import Calendar from 'react-calendar';
import cat from '../assets/cat.svg';
import plant from '../assets/plant.svg';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Set initial date to the current date
    const [responseContent, setResponseContent] = useState(null);
    const [sentiment, setSentiment] = useState(null);
    const [summary, setSummary] = useState(null);

    const { user } = useUser();
    const name = user.name || 'User';
    const phoneNumber = user.phoneNumber;

    const handleDateClick = async (value, event) => {
        const formattedDate = value.toISOString();
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/message/${phoneNumber}`, { date: formattedDate })
                .then(response => {
                    console.log(response.data);
                    setResponseContent(response.data.chat);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setResponseContent("");
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
    };

    useEffect(() => {
        const formattedDate = selectedDate.toISOString();
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/message/${phoneNumber}`, { date: formattedDate })
                .then(response => {
                    console.log(response.data);
                    setResponseContent(response.data.chat);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setResponseContent("");
                });
        } catch (error) {
            console.error('Error making API request:', error);
        }
    }, [selectedDate, phoneNumber]);

    useEffect(() => {
        const today = new Date();
        setSelectedDate(today);
        handleDateClick(today); // Fetch data for today's date
    }, []);

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
                <div className="glow-background">Pawndr</div>
                <div className='sayhello'>
                    Hi there, <span className="underlined">{name}!</span>  <a href='/' className="underlinedsmall">Logout</a>
                </div>
                <img className='cat' src={cat}/>
                <div className='journalentries'>
                    <div className='analysis-container'>
                    <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#3C4356', fontSize: '25px' }}>Summary:</h1>
                        <span className='sentiment'>From your conversation with Pawn, you sounded... {sentiment}</span>
                        <span className='analysis'>{summary}</span>
                    </div>
                    <div className='journal-container' style={{ marginTop: '50px' }}>
                    <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#3C4356', fontSize: '25px' }}>Your Journal Entry:</h1>
                    {responseContent && (
                            <span className='journal'>{responseContent}</span>
                        )}
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