import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // SearchBar import 추가
import '../styles/Header.css';

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

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
          {/* 검색 아이콘 클릭 시 토글 */}
          <div className="search-icon" onClick={toggleSearch}></div>

          <Link to="/login" className="sign-in-link">
            Sign in
          </Link>
          <Link to="/signup" className="sign-up-btn">
            Sign up
          </Link>
        </div>
      </div>

      {/* SearchBar를 조건부 렌더링 */}
      {showSearch && <SearchBar />}
    </header>
  );
}

export default Header;
