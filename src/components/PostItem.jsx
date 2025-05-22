import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostItem.css'; 

function PostItem({ post }) {
  return (
    <div className="post-item">
      <Link to={`/board/${post.id}`} className="post-title">
        {post.title}
      </Link>
      <div className="post-meta">
        <span className="post-author">{post.author}</span>
        <span className="post-date">{post.date}</span>
      </div>
    </div>
  );
}

export default PostItem;
