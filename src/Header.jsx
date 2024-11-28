import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header stil dosyasını import ediyoruz

const Header = () => {
  return (
    <header>
      <h1 className="intro-head">USF AI CLUB</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
