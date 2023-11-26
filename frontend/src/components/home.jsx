import React from 'react';
import './home.css';
import home from '../assets/home.svg';
import Calendar from 'react-calendar';


const Home = () => {
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
        <div className="pawndr">Pawndr</div>
          <Calendar />
      </div>
    </div>
  );
}

export default Home;
