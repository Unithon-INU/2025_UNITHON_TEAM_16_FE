import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countury, setCountury] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 회원가입 API 호출(예시)
    console.log({ name, email, password });

    // 회원가입 성공 후 로그인 페이지로 이동 (예시)
    navigate('/login');
  };

  // 로그인 페이지로 이동하는 함수
  const goToLogin = () => {
    navigate('/login'); // /Login 경로로 이동
  };

  return (
    <div style={styles.container}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
        <input
          type="countury"
          placeholder="국적"
          value={countury}
          onChange={(e) => setCountury(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          회원가입
        </button>
      </form>
      <p>
        로그인 하시겠습니까?{' '}
        <button onClick={goToLogin} style={styles.linkButton}>
          로그인
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

export default Signup;
