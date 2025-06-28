import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // login.css 파일을 import 해야 스타일 적용됨

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countury, setCountury] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Country:', countury);
    // 로그인 처리 로직 추가 가능
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div classNaame="page-wrapper">
      <div className="main-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label className="input-label" htmlFor="email">
              이메일
            </label>
            <div className="input-box">
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label className="input-label" htmlFor="password">
              비밀번호
            </label>
            <div className="input-box">
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label className="input-label" htmlFor="countury">
              국적
            </label>
            <div className="input-box">
              <input
                type="text"
                id="countury"
                placeholder="예: 대한민국"
                value={countury}
                onChange={(e) => setCountury(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="login-btn">
              로그인
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p>
              아직 계정이 없으신가요?{' '}
              <button
                type="button"
                onClick={goToSignup}
                className="sign-in-link"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                회원가입
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
