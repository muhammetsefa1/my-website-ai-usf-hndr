import React from 'react';
import './Home.css';
import instagramLogo from './assets/images/instagram-logo.png';
import twitterLogo from './assets/images/twitter-logo.png';
import emailLogo from './assets/images/email-logo.png';
import myImage from './assets/images/AI.jpg';
import Background from './assets/images/Background.jpg';
import profile1 from './assets/images/profile1.jpg'; //profil fotoğraflarını import edin
import profile2 from './assets/images/profile2.jpg'
import profile3 from './assets/images/profile3.jpg'
import Anil from './assets/images/Anil.jpg'
import Harun from './assets/images/Harun.jpg'
import Yasin from './assets/images/Yasin.jpg'
import Background1 from './assets/images/Background1.jpg'
import usf_logo_new from './assets/images/usf_logo_new.png'
import usf_logo from './assets/images/usf_logo.png'
import usf_yazi from './assets/images/usf_yazi.png'
import Juan from './assets/images/Juan.jpg'

const Home = () => {
  return (
    <div>
      <div className="background" id="home-section">
        <img src={Background1} alt="Background Visual" className="background-img" />

        <div className="image-stack">
          <img src={usf_yazi} alt="Image 1" className="stacked-image" />
          <img src={usf_logo} alt="Image 2" className="stacked-image" />
          <img src={usf_logo_new} alt="Image 3" className="stacked-image" />
        </div>
      </div>
      <div className="image-container" id="about-section">
        <img src={myImage} alt="AI Visual" className="photo" />
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>Are you passionate about artificial intelligence? At the AI Club, we are here to explore cutting-edge technologies, develop innovative projects, and provide opportunities that will make a difference in your career. Through workshops, competitions, and collaborative projects, we focus on fostering both personal growth and teamwork. Join us and let's shape the future together!</p>
        </div>
      </div>


      <div className="gray-section2" id="events-section"> 
        <h2>AI Club Innovations</h2>
        <div className="boxes-container">
          <div className="box">
            <h3 className="title-projects">Innovative Projects</h3>
            <p>Dive into cutting-edge projects that redefine the boundaries of technology and innovation. 
            Whether it’s developing AI-powered applications, exploring advanced robotics, or crafting sustainable solutions, 
            you'll have the chance to bring bold ideas to life. Collaborate with peers and mentors, 
            gain hands-on experience, and create projects that make a meaningful impact.</p>
          </div>
          <div className="box">
            <h3 className="title-workshops">Interactive Workshops</h3>
            <p>Join our engaging workshops designed to enhance your skills and deepen your understanding of AI and related technologies. 
            Learn directly from industry experts, tackle real-world challenges, and stay ahead of emerging trends. 
            From coding bootcamps to design sprints, there’s something for everyone.</p>
          </div>
          <div className="box">
            <h3 className="title-network">Expand Your Network</h3>
            <p>Build meaningful connections with professionals, students, and experts who share your passion for innovation. 
            Our events foster collaboration and idea exchange, creating opportunities to meet potential collaborators, 
            mentors, or even future employers. Your next big opportunity might be just one conversation away.
            </p>
          </div>
        </div>
      </div>

      <div className="title-members" id = "profile-section">
        <h2>EXECUTIVE MEMBERS</h2>
      </div>
      
      <div className="profile-container" id="profile-section2">
        <a
          href="https://www.linkedin.com/in/lokman-bekit-aa2ba421b/?trk=public_profile_browsemap"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={profile3} alt="Profile 3" className="profile-photo" />
            <h3 className="profile-name">Lokman Bekit</h3>
            <p className="profile-role">President</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/anil-mumbuc-046842225/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={Anil} alt="Profile 4" className="profile-photo" />
            <h3 className="profile-name">Anil Mumbuc</h3>
            <p className="profile-role">Treasurer</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/harun-karduz-274b77252/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={Harun} alt="Profile 5" className="profile-photo" />
            <h3 className="profile-name">Harun Karduz</h3>
            <p className="profile-role">Secretary</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yasinyilmaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={Yasin} alt="Profile 6" className="profile-photo" />
            <h3 className="profile-name">Yasin Yilmaz</h3>
            <p className="profile-role">Advisor</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/juansebastiancaballero/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={Juan} alt="Profile 3" className="profile-photo" />
            <h3 className="profile-name">Juan Caballero Roa</h3>
            <p className="profile-role">Officer</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-hundur"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={profile1} alt="Profile 1" className="profile-photo" />
            <h3 className="profile-name">Mustafa Hündür</h3>
            <p className="profile-role">Web Developer</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammet-sefa-hundur/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <div className="profile">
            <img src={profile2} alt="Profile 2" className="profile-photo" />
            <h3 className="profile-name">Muhammet Hündür</h3>
            <p className="profile-role">Project Manager</p>
          </div>
        </a>
      </div>

        <div className="form-link-container">
          <h2>Join Our Club</h2>
          <p>Fill out our membership form by clicking the button below:</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScsJCBN1UTnn8phNAKUq5BENVj76xVgUOk7zM0bPpSgz4HjHA/viewform?usp=dialog" // Google Form linkini buraya ekleyin
            target="_blank"
            rel="noopener noreferrer"
            className="form-button"
          >
            Fill Out the Form
          </a>
        </div>

      <div class="gray-section" id="join-section">
        <div className="social-container">
          <a href="https://www.instagram.com/taic.usf/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" className="social-logo" />
          </a>
          <a href="https://twitter.com/yourclubusername" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter Logo" className="social-logo" />
          </a>
          <a href="mailto:sefahundur1@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailLogo} alt="Email" className="social-logo" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;
