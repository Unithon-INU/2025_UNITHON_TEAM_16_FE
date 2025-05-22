import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CommentBox from '../components/CommentBox';
import CommentForm from '../components/CommentForm';

const currentUser = '유학생123'; // 로그인된 사용자 이름이라고 가정

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentUser = '유학생123'; // 로그인된 사용자 이름 (예시)

  // 샘플 게시글 데이터
  const samplePosts = [
    { id: 1, title: '첫 글입니다', content: '안녕하세요!' },
    { id: 2, title: '두 번째 글', content: '테스트 중입니다.' },
  ];

  const post = samplePosts.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '유학생A',
      content: '첫 댓글입니다!',
      date: '2025-05-15',
    },
  ]);

  // 댓글 추가
  const handleAddComment = (newCommentContent) => {
    const newComment = {
      id: Date.now(),
      author: currentUser,
      content: newCommentContent,
      date: new Date().toISOString().split('T')[0],
    };
    setComments([newComment, ...comments]);
  };

  // 댓글 삭제
  const handleDeleteComment = (commentId) => {
    const confirm = window.confirm('댓글을 삭제하시겠습니까?');
    if (confirm) {
      setComments(comments.filter((c) => c.id !== commentId));
    }
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

      {/* 댓글 작성 폼은 한 번만 넣고, onAddComment를 정확히 넘겨줌 */}
      <CommentForm onAddComment={handleAddComment} />

      {comments.length === 0 && <p>아직 댓글이 없습니다.</p>}
      {comments.map((comment) => (
        <CommentBox
          key={comment.id}
          comment={comment}
          onDelete={() => handleDeleteComment(comment.id)}
          canDelete={comment.author === currentUser}
        />
      ))}
    </div>
  );
}

export default PostDetail;
