import React from 'react';
import './Home.css'; // CSS dosyasını içe aktarıyoruz
import myImage from './assets/images/AI.jpg'; // Resminizi doğru yoldan içe aktarın

const Home = () => {
  return (
    <div>

      <div className="intro-container">
        <h1 className="intro-title">Welcome to My Website</h1>
        <p className="intro-text">
          Discover amazing content and features tailored just for you.
        </p>
        <p className="intro-text">Explore our services and learn more about what we offer.</p>
      </div>
      <div className="image-container">
        <img src={myImage} alt="Blended Effect" />
      </div>


    </div>
  );
};

export default Home;
