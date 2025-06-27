import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-map">
        <div className="about-socials">
          <h2 className="logo">HIRE U</h2>
          <p className="description">
            HIRE U is a translation-based community platform designed to provide
            practical support for international students seeking employment in
            South Korea.
          </p>
          <div className="socials">
            <div className="social-icon dribbble">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 0C4.029 0 0 4.029 0 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"
                  fill="#3D3D4E"
                />
              </svg>
            </div>
            <div className="social-icon twitter">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M18 3.42c-.66.29-1.37.49-2.12.58.76-.46 1.35-1.18 1.62-2.04-.71.42-1.5.73-2.34.89C14.46 2.18 13.51 1.75 12.46 1.75c-2.04 0-3.7 1.66-3.7 3.7 0 .29.03.57.1.84C5.79 6.14 3.07 4.67 1.25 2.37c-.32.55-.5 1.18-.5 1.86 0 1.28.65 2.41 1.64 3.07-.6-.02-1.17-.19-1.67-.46v.05c0 1.79 1.27 3.28 2.96 3.62-.31.08-.64.13-.98.13-.24 0-.47-.02-.7-.07.47 1.47 1.84 2.54 3.46 2.57-1.27.99-2.86 1.58-4.6 1.58-.3 0-.59-.02-.88-.05C1.64 15.88 3.58 16.5 5.66 16.5c6.8 0 10.51-5.63 10.51-10.51 0-.16 0-.32-.01-.48.72-.52 1.35-1.17 1.84-1.91z"
                  fill="#3D3D4E"
                />
              </svg>
            </div>
            <div className="social-icon facebook">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M18 9c0-4.97-4.03-9-9-9S0 4.03 0 9c0 4.49 3.29 8.21 7.59 8.89v-6.29H5.31V9h2.28V7.02c0-2.25 1.34-3.49 3.39-3.49.98 0 2.01.18 2.01.18v2.21h-1.13c-1.11 0-1.46.69-1.46 1.4V9h2.49l-.4 2.6h-2.09v6.29C14.71 17.21 18 13.49 18 9z"
                  fill="#3D3D4E"
                />
              </svg>
            </div>
            <div className="social-icon instagram">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1.62c2.4 0 2.69.01 3.64.05.88.04 1.36.19 1.68.31.42.16.72.36 1.04.68.32.32.52.62.68 1.04.12.32.27.8.31 1.68.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.04.88-.19 1.36-.31 1.68-.16.42-.36.72-.68 1.04-.32.32-.62.52-1.04.68-.32.12-.8.27-1.68.31-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-.88-.04-1.36-.19-1.68-.31-.42-.16-.72-.36-1.04-.68-.32-.32-.52-.62-.68-1.04-.12-.32-.27-.8-.31-1.68-.04-.95-.05-1.24-.05-3.64s.01-2.69.05-3.64c.04-.88.19-1.36.31-1.68.16-.42.36-.72.68-1.04.32-.32.62-.52 1.04-.68.32-.12.8-.27 1.68-.31.95-.04 1.24-.05 3.64-.05zM9 0C6.56 0 6.25.01 5.29.05 4.33.09 3.68.22 3.11.42c-.59.23-1.09.54-1.59 1.04S.65 2.52.42 3.11C.22 3.68.09 4.33.05 5.29.01 6.25 0 6.56 0 9s.01 2.75.05 3.71c.04.96.17 1.61.37 2.18.23.59.54 1.09 1.04 1.59s1 .81 1.59 1.04c.57.2 1.22.33 2.18.37.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.04 1.61-.17 2.18-.37.59-.23 1.09-.54 1.59-1.04s.81-1 1.04-1.59c.2-.57.33-1.22.37-2.18.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.04-.96-.17-1.61-.37-2.18-.23-.59-.54-1.09-1.04-1.59S15.48.65 14.89.42C14.32.22 13.67.09 12.71.05 11.75.01 11.44 0 9 0z"
                  fill="#3D3D4E"
                />
                <path
                  d="M9 4.38c-2.55 0-4.62 2.07-4.62 4.62S6.45 13.62 9 13.62s4.62-2.07 4.62-4.62S11.55 4.38 9 4.38zM9 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                  fill="#3D3D4E"
                />
                <circle cx="13.88" cy="4.12" r="1.08" fill="#3D3D4E" />
              </svg>
            </div>
            <div className="social-icon pinterest">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 0C4.03 0 0 4.03 0 9c0 3.82 2.38 7.08 5.74 8.41-.08-.71-.15-1.82.03-2.6.16-.7 1.06-4.48 1.06-4.48s-.27-.54-.27-1.34c0-1.25.73-2.19 1.63-2.19.77 0 1.14.58 1.14 1.27 0 .77-.49 1.93-.74 3-.21.89.45 1.61 1.33 1.61 1.6 0 2.83-1.69 2.83-4.12 0-2.16-1.55-3.67-3.76-3.67-2.56 0-4.06 1.92-4.06 3.9 0 .77.3 1.6.67 2.05.07.09.08.17.06.26-.07.28-.22.9-.25 1.03-.04.17-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.83 2.06-5.43 5.93-5.43 3.11 0 5.53 2.22 5.53 5.18 0 3.09-1.95 5.57-4.65 5.57-.91 0-1.76-.47-2.05-.94 0 0-.45 1.71-.56 2.13-.2.78-.75 1.76-1.11 2.35.84.26 1.72.4 2.64.4 4.97 0 9-4.03 9-9S13.97 0 9 0z"
                  fill="#3D3D4E"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="links">
          <a href="/about" className="link">
            About US
          </a>
          <a href="/customer-service" className="link">
            Customer Service
          </a>
          <a href="/terms" className="link">
            Terms of Use
          </a>
          <a href="/privacy" className="link">
            Privacy
          </a>
          <a href="/inquiry" className="link">
            Inquiry
          </a>
        </div>

        <div className="hire-me-info">
          <p>
            HIRE ME
            <br />
            Eunjun Hwangbo, Heeyeon Kwon, Chaewan Kim, Saeeun Park
            <br />
            Address : 119, Academy-ro, Yeonsu-gu, Incheon, Republic of Korea
            <br />
            Phone : +82-32-835-8114
          </p>
        </div>
      </div>

      <div className="copyright">
        <div className="shots-copyright">
          <div className="shots-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" fill="#757575" />
            </svg>
          </div>
          <span>© 2025 HIRE U. ALL rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
