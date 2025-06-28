// src/pages/LanguageSelector.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landingpage.css';

function Landingpage() {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    console.log(`선택한 언어: ${language}`);
    navigate('/home');
  };

  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'zh', label: '中文' },
    { code: 'pt', label: 'Português' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ja', label: '日本語' }
  ];

  return (
    <div className="language-selector-container">
      {/* 배경 이미지 */}
      <div className="background-gradient"></div>
      
      {/* 메인 타이틀 */}
      <h1 className="main-title">HIRE&nbsp;&nbsp;U</h1>
      
      {/* 언어 버튼 컨테이너 */}
      <div className="globe-container">
        {/* 언어 버튼들 */}
        {languages.map((lang) => (
          <button
            key={lang.code}
            className="language-button"
            data-lang={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Landingpage;