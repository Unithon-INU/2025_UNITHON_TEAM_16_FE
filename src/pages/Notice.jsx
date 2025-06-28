import React from 'react';
import '../styles/Notice.css';

const NoticeCard = ({ image, title, description }) => (
  <div className="notice-card">
    <div
      className="notice-card-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="notice-card-body">
      <div className="notice-card-text">
        <div className="notice-card-title">{title}</div>
        <div className="notice-card-description">{description}</div>
      </div>
      <div className="notice-card-buttons">
        <button className="notice-card-button">Action</button>
      </div>
    </div>
  </div>
);

const Notice = () => {
  const notices = [
    {
      image: 'image1.png',
      title: '공지사항 제목 1',
      description:
        '공지사항 내용 요약입니다. 중요한 내용 한두 줄을 보여줍니다.',
    },
    {
      image: 'image2.png',
      title: '공지사항 제목 2',
      description: '다른 공지사항 내용 요약입니다. 핵심 메시지를 보여줍니다.',
    },
  ];

  return (
    <div className="notice-container">
      <div className="notice-content">
        <div className="notice-heading">
          <div className="notice-heading-title">Notice</div>
          <div className="notice-heading-subtitle">공지사항</div>
        </div>
        <div className="notice-cards">
          {notices.map((notice, index) => (
            <NoticeCard
              key={index}
              image={notice.image}
              title={notice.title}
              description={notice.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
