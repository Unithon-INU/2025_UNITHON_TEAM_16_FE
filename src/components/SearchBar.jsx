import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.search.value.trim().toLowerCase();

    switch (keyword) {
      case '홈':
      case 'home':
        navigate('/');
        break;
      case '게시판':
      case 'board':
        navigate('/board');
        break;
      case '로그인':
      case 'login':
        navigate('/login');
        break;
      case '회원가입':
      case 'signup':
        navigate('/signup');
        break;
      default:
        alert(`'${keyword}'에 대한 페이지를 찾을 수 없어요 😅`);
        break;
    }
  };

  return (
    <form onSubmit={handleSearch} className="header__search">
      <input type="text" name="search" placeholder="검색어 입력" />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;
