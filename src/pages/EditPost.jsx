import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // (임시) 기존 글 내용 가져오는 로직 - 실제로는 props/context/API 사용
  const [title, setTitle] = useState(''); // 예: '기존 제목'
  const [content, setContent] = useState(''); // 예: '기존 내용'

  const handleUpdate = () => {
    alert('수정 완료!');
    navigate(`/board/${id}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 글 수정</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        style={{ display: 'block', width: '100%', marginBottom: 10 }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        style={{ width: '100%', height: 200 }}
      />
      <br />
      <button onClick={handleUpdate}>수정 완료</button>
    </div>
  );
}

export default EditPost;
