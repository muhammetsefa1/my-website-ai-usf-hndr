import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link
              to="about-section" // Target id
              smooth={true}
              duration={300} // Yumuşak kaydırma süresi (ms)
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="events-section" // Target id
              smooth={true}
              duration={300}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="profile-section" // Target id
              smooth={true}
              duration={300} // Yumuşak kaydırma süresi (ms)
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
