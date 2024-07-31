import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';  // Corrected path

const Header = () => {
  return (
    <header className="header">
      <h1>Tech Blog</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
