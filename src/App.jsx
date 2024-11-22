import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '60px', paddingBottom: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;