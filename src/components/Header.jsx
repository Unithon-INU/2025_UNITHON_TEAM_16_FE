import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="navigation">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            HIRE U
          </Link>
          <div className="logo-icon"></div>
        </div>

        <nav className="nav-links">
          <Link to="/notice">Notice</Link>
          <Link to="/community">Community</Link>
          <Link to="/law">Law</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/setting">Setting</Link>
        </nav>

        <div className="nav-actions">
          <div className="search-icon"></div>
          <Link to="/login" className="sign-in-link">
            Sign in
          </Link>
          <Link to="/signup" className="sign-up-btn">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
