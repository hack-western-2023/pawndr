import React, { useState, useEffect } from 'react';
import './home.css';
import home from '../assets/home.png';

function Home() {
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
        </div>
      </div>
  );
}

export default Home;
