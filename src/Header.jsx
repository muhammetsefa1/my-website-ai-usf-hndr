import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './assets/images/usf_logo.png'; // Logonuzun doğru yolunu kontrol edin

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <nav>
      <ul className="nav-list">
        <li>
          <Link
            to="home-section"
            smooth={true}
            duration={300}
            className="home-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-section"
            smooth={true}
            duration={300}
            offset={-120}
            className="about-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="events-section"
            smooth={true}
            duration={300}
            offset = {-70}
            className="events-link"
          >
            Innovations
          </Link>
        </li>
        <li>
          <Link
            to="profile-section"
            smooth={true}
            duration={300}
            offset={-50}
            className="profile-link"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="join-section"
            smooth={true}
            duration={300}
            className="join-link"
          >
            Join
          </Link>
        </li>
      </ul>
    </nav>

    </header>
  );
};

export default Header;
