import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 임포트

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 (예시)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  // 회원가입 페이지로 이동하는 함수
  const goToSignup = () => {
    navigate('/signup'); // /signup 경로로 이동
  };

  return (
    <div style={styles.container}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
      <p>
        아직 계정이 없으신가요?{' '}
        <button onClick={goToSignup} style={styles.linkButton}>
          회원가입
        </button>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  linkButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
  },
};

export default Login;
