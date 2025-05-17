import { useNavigate } from 'react-router-dom';

function Board() {
  const navigate = useNavigate();

  const samplePosts = [
    { id: 1, title: '첫 글입니다', content: '안녕하세요!' },
    { id: 2, title: '두 번째 글', content: '테스트 중입니다.' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>📌 게시판 📌</h2>

      {samplePosts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}
        >
          <h3
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => navigate(`/board/${post.id}`)}
          >
            {post.title}
          </h3>
          <p>{post.content}</p>
        </div>
      ))}

      <button
        onClick={() => navigate('/board/write')}
        style={{ marginTop: 20, padding: '8px 16px' }}
      >
        글 작성하기
      </button>
    </div>
  );
}

export default Board;
