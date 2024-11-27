import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header stil dosyasını import ediyoruz

const Header = () => {
  return (
    <header>
      <h1 className="Page-name">Welcome to My Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
