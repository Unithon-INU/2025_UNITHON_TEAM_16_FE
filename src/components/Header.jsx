import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.search.value.trim();
    if (keyword) {
      alert(`'${keyword}' 검색은 아직 미구현이에요 😅`);
      // 예: 나중에 navigate(`/search?keyword=${keyword}`);
    }
  };

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
      <form onSubmit={handleSearch} className="header__search">
        <input type="text" name="search" placeholder="검색어 입력" />
        <button type="submit">검색</button>
      </form>
    </header>
  );
}

export default Header;
