import React from 'react';
import './home.css'; // CSS dosyasını içe aktarıyoruz
import myImage from './assets/images/AI.jpg'; // Resminizi doğru yoldan içe aktarın

const Home = () => {
  return (
    <div className="image-container">
      <img src={myImage} alt="Blended Effect" />
    </div>
  );
};

export default Home;
