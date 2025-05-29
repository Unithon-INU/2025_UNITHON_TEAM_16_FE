import { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onAddComment(comment); // 부모 컴포넌트로 댓글 내용 전달
    setComment(''); // 입력창 초기화
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력하세요"
        style={{ width: '80%', marginRight: 8 }}
      />
      <button type="submit">작성</button>
    </form>
  );
}

export default CommentForm;
