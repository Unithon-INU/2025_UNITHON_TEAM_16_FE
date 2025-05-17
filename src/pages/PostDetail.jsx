import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 게시글 데이터
  const samplePosts = [
    { id: 1, title: '첫 글입니다', content: '안녕하세요!' },
    { id: 2, title: '두 번째 글', content: '테스트 중입니다.' },
  ];

  const post = samplePosts.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(''); // 입력값

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleDelete = () => {
    alert('삭제되었습니다!');
    navigate('/board');
  };

  const handleEdit = () => {
    navigate(`/board/edit/${id}`);
  };

  if (!post) return <div style={{ padding: 20 }}>해당 글이 없습니다</div>;

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

      <hr style={{ margin: '30px 0' }} />

      <h3>💬 댓글</h3>
      <div style={{ marginBottom: 10 }}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          style={{ width: '80%', padding: 8 }}
        />
        <button onClick={handleAddComment} style={{ marginLeft: 10 }}>
          등록
        </button>
      </div>

      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={{ marginBottom: 8 }}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;
