import React from 'react';
import './Home.css';
import instagramLogo from './assets/images/instagram-logo.png';
import twitterLogo from './assets/images/twitter-logo.png';
import myImage from './assets/images/AI.jpg';
import profile1 from './assets/images/profile1.jpg'; //profil fotoğraflarını import edin
import profile2 from './assets/images/profile2.jpg'
import profile3 from './assets/images/profile3.jpg'
const Home = () => {
  return (
    <div>
      <div className="background">
        <div className="intro-container">
          <h1 className="intro-title">Welcome to My Website</h1>
          <h2 className="eklenen-yazı">Merhaba benim adım mustafa</h2>
        </div>
        <div className="image-container">
          <img src={myImage} alt="AI Visual" />
        </div>
      </div>
      <div class="gray-section">
        <h2>AI Club Innovations</h2>
        <p>This section highlights AI club's activities and achievements.</p>
      </div>
      <div className="social-container">
        <a href="https://www.instagram.com/taic.usf/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram Logo" className="social-logo" />
        </a>
        <a href="https://twitter.com/yourclubusername" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter Logo" className="social-logo" />
        </a>
      </div>

      {/* Profil fotoğraflarının altına isim ve çalışma alanı eklemek */}
      <div className="profile-container">
        <div className="profile">
          <img src={profile1} alt="Profile 1" className="profile-photo" />
          <h3 className="profile-name">Mustafa Hündür</h3>
          <p className="profile-role">Web Developer</p>
        </div>

        <div className="profile">
          <img src={profile2} alt="Profile 2" className="profile-photo" />
          <h3 className="profile-name">Muhammet Hündür</h3>
          <p className="profile-role">Project Manager</p>
        </div>

        <div className="profile">
          <img src={profile3} alt="Profile 3" className="profile-photo" />
          <h3 className="profile-name">Yunus Hündür</h3>
          <p className="profile-role">Boş İşler Uzmanı</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
