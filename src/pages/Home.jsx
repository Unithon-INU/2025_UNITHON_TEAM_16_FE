import React from 'react';
import '../styles/Home.css';

const shotsData = [
  { id: 1, imgSrc: '/images/shot1.jpg', name: 'User One' },
  { id: 2, imgSrc: '/images/shot2.jpg', name: 'User Two' },
  { id: 3, imgSrc: '/images/shot3.jpg', name: 'User Three' },
  { id: 4, imgSrc: '/images/shot4.jpg', name: 'User Four' },
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="video-still"></div>

        <h1 className="headline">
          HIRE U is a translation-based community platform designed to provide
          practical support for international students seeking employment in
          South Korea.
        </h1>

        <div className="search-input">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M10 2a8 8 0 015.292 13.708l4.147 4.147-1.414 1.414-4.147-4.147A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        </div>
      </div>

      <div className="shots-container">
        {shotsData.map((shot) => (
          <div className="shot" key={shot.id}>
            <div className="thumbnail">
              <img src={shot.imgSrc} alt={shot.name} />
              <div className="overlay"></div>
            </div>
            <div className="info">
              <div className="avatar-name">
                <span className="name">{shot.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
