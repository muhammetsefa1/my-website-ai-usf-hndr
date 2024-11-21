import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header stil dosyasını import ediyoruz

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', textAlign: 'flex' }}>
      <h1>My Website</h1>
        <nav>
          <Link to="/" style={{ color: '#fff', margin: '0 15px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', margin: '0 15px' }}>About</Link>
        </nav>
    </header>
  );
};

export default Header;
