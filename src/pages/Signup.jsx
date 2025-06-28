// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Signup.css';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [countury, setCountury] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert('비밀번호가 일치하지 않습니다.');
//       return;
//     }

//     console.log({ name, email, password, countury });

//     navigate('/login');
//   };

//   const goToLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h2>회원가입</h2>
//         <form onSubmit={handleSubmit} className="signup-form">
//           <input
//             type="text"
//             placeholder="이름"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="signup-input"
//           />
//           <input
//             type="email"
//             placeholder="이메일"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="signup-input"
//           />
//           <input
//             type="password"
//             placeholder="비밀번호"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="signup-input"
//           />
//           <input
//             type="password"
//             placeholder="비밀번호 확인"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="signup-input"
//           />
//           <input
//             type="text"
//             placeholder="국적"
//             value={countury}
//             onChange={(e) => setCountury(e.target.value)}
//             className="signup-input"
//           />
//           <button type="submit" className="signup-button">
//             회원가입
//           </button>
//         </form>
//         <p className="signup-login-text">
//           로그인 하시겠습니까?{' '}
//           <button onClick={goToLogin} className="signup-link-button">
//             로그인
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React from 'react';
import '../styles/Signup.css';

export default function Signup() {
  return (
    <div className="shots">
      <form className="form-register">
        {/* 이메일 */}
        <div className="input-field">
          <label className="label" htmlFor="email">이메일</label>
          <input className="input" type="email" id="email" placeholder="이메일을 입력하세요" />
          <div className="error">에러 메시지</div>
        </div>

        {/* 비밀번호 */}
        <div className="input-field">
          <label className="label" htmlFor="password">비밀번호</label>
          <input className="input" type="password" id="password" placeholder="비밀번호를 입력하세요" />
          <div className="error">에러 메시지</div>
        </div>

        {/* 이름 */}
        <div className="input-field">
          <label className="label" htmlFor="name">이름</label>
          <input className="input" type="text" id="name" placeholder="이름을 입력하세요" />
          <div className="error">에러 메시지</div>
        </div>

        {/* 전화번호 */}
        <div className="input-field">
          <label className="label" htmlFor="phone">전화번호</label>
          <input className="input" type="tel" id="phone" placeholder="전화번호를 입력하세요" />
          <div className="error">에러 메시지</div>
        </div>

        {/* 국적 */}
        <div className="input-field">
          <label className="label" htmlFor="nationality">국적</label>
          <input className="input" type="text" id="nationality" placeholder="국적을 입력하세요" />
          <div className="error">에러 메시지</div>
        </div>

        {/* 버튼 그룹 */}
        <div className="button-group">
          <button type="submit" className="button">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

