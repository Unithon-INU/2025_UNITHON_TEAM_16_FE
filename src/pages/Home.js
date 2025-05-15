import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1>홈 화면</h1>
      <p>환영합니다! 여기는 홈 페이지입니다.</p>

      <button onClick={goToLogin} style={styles.linkButton}>
        로그인
      </button>

      <button onClick={goToSignup} style={styles.linkButton}>
        회원가입
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  linkButton: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home;
