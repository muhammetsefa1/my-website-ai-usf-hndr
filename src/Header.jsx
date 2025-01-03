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
            <Link to="about-section" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li>
            <Link to="events-section" smooth={true} duration={300}>
              Events
            </Link>
          </li>
          <li>
            <Link to="profile-section" smooth={true} duration={300}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
