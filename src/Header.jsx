import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header stil dosyasını import ediyoruz

const Header = () => {
  return (
    <header style={{padding: '20px 30px', textAlign: 'flex' }}>
      <h1>USF AI CLUB</h1>
        <nav>
          <Link to="/" style={{ color: '#fff', margin: '0 15px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', margin: '0 15px' }}>About</Link>
        </nav>
    </header>
  );
};

export default Header;
