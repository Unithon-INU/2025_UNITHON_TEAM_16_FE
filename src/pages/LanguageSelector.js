// src/pages/LanguageSelector.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LanguageSelector() {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
  console.log(`선택한 언어: ${language}`);
  navigate('/home'); // 🧭 이제는 '/home'으로 이동
    };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>언어를 선택하세요</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => handleLanguageSelect('ko')}>한국어</button>
        <button style={styles.button} onClick={() => handleLanguageSelect('en')}>English</button>
        <button style={styles.button} onClick={() => handleLanguageSelect('zh')}>中文</button>
        <button style={styles.button} onClick={() => handleLanguageSelect('vi')}>Tiếng Việt</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url('/background.jpg')`, // 배경 이미지 (public 폴더에 이미지 저장)
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#fff',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: '15px 30px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ffffffcc',
    cursor: 'pointer',
  },
};

export default LanguageSelector;
