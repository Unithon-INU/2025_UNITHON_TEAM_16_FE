import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SearchBar from './SearchBar'; // 추가

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          🌐 HIRE_U
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/">홈</Link>
        <Link to="/board">게시판</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </nav>
      <SearchBar /> {/* 여기에 컴포넌트 삽입 */}
    </header>
  );
}

export default Header;
