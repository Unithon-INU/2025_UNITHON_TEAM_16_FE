import React from 'react';
import { useParams } from 'react-router-dom';

const dummyPosts = [
  {
    id: 1,
    title: '첫 번째 글',
    content: '첫 번째 글의 내용입니다.',
    author: '홍길동',
    date: '2025-05-15',
  },
  {
    id: 2,
    title: '두 번째 글',
    content: '두 번째 글의 내용입니다.',
    author: '김학생',
    date: '2025-05-14',
  },
];

function PostDetail() {
  const { id } = useParams();
  const post = dummyPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        <strong>작성자:</strong> {post.author}
      </p>
      <p>
        <strong>작성일:</strong> {post.date}
      </p>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetail;
