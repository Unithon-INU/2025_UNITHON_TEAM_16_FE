// src/pages/WritePost.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WritePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }

    // 실제로는 서버에 전송 → 이후 게시판으로 돌아가기
    console.log('작성된 글:', { title, content });
    alert('글이 작성되었습니다!');
    navigate('/board');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>✍️ 글쓰기</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: 8 }}
        />
        <br />
        <button type="submit" style={{ marginTop: 10 }}>
          작성 완료
        </button>
      </form>
    </div>
  );
}

export default WritePost;
