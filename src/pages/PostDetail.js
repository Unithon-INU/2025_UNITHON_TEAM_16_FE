import { useParams, useNavigate } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 게시글
  const samplePosts = [
    { id: 1, title: '첫 글입니다', content: '안녕하세요!' },
    { id: 2, title: '두 번째 글', content: '테스트 중입니다.' },
  ];

  const post = samplePosts.find((p) => p.id === parseInt(id));

  const handleEdit = () => {
    navigate(`/board/edit/${id}`);
  };

  const handleDelete = () => {
    alert('삭제되었습니다!');
    navigate('/board');
  };

  if (!post) return <div>해당 글이 없습니다</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleEdit}>✏️ 수정</button>
        <button onClick={handleDelete} style={{ color: 'red', marginLeft: 10 }}>
          🗑 삭제
        </button>
      </div>
    </div>
  );
}

export default PostDetail;
