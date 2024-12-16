import React from 'react';
import './Home.css';
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
          <p className="intro-text"></p>
        </div>
        <div className="image-container">
          <img src={myImage} alt="AI Visual" />
        </div>
      </div>

  {/*profil fotoğrafı bölümü*/}
  <div className="profile-container">
    <img src={profile1} alt="Profile 1" className="profile-photo"/>
    <img src={profile2} alt="Profile 2" className="profile-photo"/>
    <img src={profile3} alt="Profile 3" className="profile-photo"/>
  </div>
</div>
  );
};

export default Home;
