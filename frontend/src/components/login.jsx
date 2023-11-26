import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./login.css";
import loginpage from '../assets/loginpage.svg';
import logoLight from '../assets/logoLight.svg';
import { useNavigate } from 'react-router-dom';
import plant2 from '../assets/plant2.svg';
import cat2 from '../assets/cat2.svg';
import catsilly from '../assets/catsilly.svg';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ phoneNumber: '', password: '' });
    const [catPosition, setCatPosition] = useState(-100); // Initial position (off-screen)
    const [catImage, setCatImage] = useState(cat2); // Initial image source
    const navigate = useNavigate();

    useEffect(() => {
        // Move the cat forward smoothly on every load
        setCatPosition(0);

        // Change the cat image to catsilly after 2 seconds
        const timeoutId = setTimeout(() => {
            setCatImage(catsilly);
        }, 1000);

        // Clean up the timeout when the component unmounts
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/login`, credentials);
            if (response.data.message === "Login successful") {
                onLogin(true);  // Set isAuthenticated to true
                navigate('/home');
            } else {
                // Handle login failure (e.g., show error message)
            }
        } catch (error) {
            console.error("Login error", error);
            // Handle error (e.g., show error message)
        }
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
                <img className='logo' src={logoLight}/>
                <div className='title'>Hello! Welcome to Pawndr</div>
                <div className='logintitle'>Please log in:</div>
                <img className='plant2' src={plant2}/>
                <img
                    className='cat2'
                    src={catImage}
                    alt="Cat Image"
                    style={{
                        transform: `translateX(${catPosition}px)`,
                        transition: 'transform 1s ease-in-out',
                    }}
                />
            </div>
            <div className='inputs'>
                <input
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    className='loginphoneInput'
                    value={credentials.phoneNumber}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='loginpasswordInput'
                    value={credentials.password}
                    onChange={handleChange}
                />
            </div>
            <button className='loginButton' onClick={handleSubmit}>Login</button>
            <a className='create' href='/'>Create Account</a>
        </div>
    );
}

export default Login;
