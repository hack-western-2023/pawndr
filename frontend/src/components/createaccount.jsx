import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./createaccount.css";
import createbackground from '../assets/createbackground.svg';
import logoLight from '../assets/logoLight.svg';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        gender: '',
        password: '',
        phoneNumber: '',
        name: '',
        pronouns: '',
        preferredTimeOfDay: ''
    });

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(process.env.BACKEND_ENDPOINT);
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/signup`, userDetails);
            if (response.data.message === "User created successfully") {
                navigate('/');
            }
        } catch (error) {
            console.error("Signup error", error);
        }
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
                    name='name'
                    value={userDetails.name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Phone Number'
                    className='phoneInput'
                    name='phoneNumber'
                    value={userDetails.phoneNumber}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='passwordInput'
                    name='password'
                    value={userDetails.password}
                    onChange={handleChange}
                />
            </div>
            <button className='registerButton' onClick={handleSubmit}>Create Account</button>

        </div>
    )
}

export default CreateAccount;
