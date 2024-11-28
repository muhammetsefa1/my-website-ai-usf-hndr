import React from 'react';
import './Home.css';
import myImage from './assets/images/AI.jpg';

const Home = () => {
  return (
    <div>
      <div className="background">
        <div className="intro-container">
          <h1 className="intro-title">Welcome to My Website</h1>
          <p className="intro-text">
            
          </p>
        </div>
        <div className="image-container">
          <img src={myImage} alt="AI Visual" />
        </div>
      </div>
    </div>
  );
};

export default Home;
