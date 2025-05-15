// src/function/Home.js
import './Home.css';

function Home() {
  const handleLogin = () => {
    alert("로그인 버튼이 눌렸습니다!");
  };

  return (
    <div className="home-container">
      <h1>홈페이지에 오신 걸 환영합니다! 👋</h1>
      <button onClick={handleLogin} className="login-button">
        로그인
      </button>
    </div>
  );
}

export default Home;
