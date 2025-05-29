import '../styles/CommentBox.css';

function CommentBox({ comment, onDelete, canDelete }) {
  return (
    <div className="comment-box">
      <div className="comment-top">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">{comment.date}</span>
      </div>
      <div className="comment-middle">
        <p className="comment-content">{comment.content}</p>
      </div>
      {canDelete && (
        <div className="comment-bottom">
          <button className="delete-btn" onClick={onDelete}>
            삭제
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
