import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChatRoom() {
  const { roomId } = useParams();
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState('');
  const bottomRef = useRef(null);
  const [username] = useState('User-' + Math.floor(Math.random() * 1000));

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = { sender: username, message };
    setChatLog((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const botReply = { sender: 'Bot', message: `(${roomId}) 응답: ${message}` };
      setChatLog((prev) => [...prev, botReply]);
    }, 1000);

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ margin: '10px 0' }}>🟢 채팅방 ID: {roomId}</h3>

      {/* 메시지 표시 영역 */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fafafa',
      }}>
        {chatLog.map((msg, i) => {
          const isMe = msg.sender === username;
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: isMe ? 'flex-end' : 'flex-start',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  background: isMe ? '#dcf8c6' : '#f1f0f0',
                  padding: '10px 12px',
                  borderRadius: '20px',
                  maxWidth: '60%',
                }}
              >
                <div style={{ fontSize: '12px', color: '#888' }}>{isMe ? '나' : msg.sender}</div>
                {msg.message}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef}></div>
      </div>

      {/* 입력창 */}
      <div style={{
        display: 'flex',
        gap: '10px',
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          전송
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;







// // 웹소켓과 연결한 후 코드
// import React, { useEffect, useState } from 'react';
// import { Client } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

// function ChatRoom() {
//   const [client, setClient] = useState(null);
//   const [chatLog, setChatLog] = useState([]);
//   const [message, setMessage] = useState('');
//   const [username] = useState('User-' + Math.floor(Math.random() * 1000));

//   useEffect(() => {
//     // 1. WebSocket 연결
//     const socket = new SockJS('http://localhost:8080/ws-chat');
//     const stompClient = new Client({
//       webSocketFactory: () => socket,
//       onConnect: () => {
//         console.log('✅ WebSocket 연결됨');

//         // 2. 메시지 수신 구독
//         stompClient.subscribe('/topic/public', (msg) => {
//           const body = JSON.parse(msg.body);
//           setChatLog((prev) => [...prev, body]);
//         });
//       },
//       onStompError: (error) => {
//         console.error('❌ STOMP 에러:', error);
//       },
//     });

//     stompClient.activate();
//     setClient(stompClient);

//     // 3. 종료 시 연결 해제
//     return () => {
//       stompClient.deactivate();
//     };
//   }, []);

//   // 4. 메시지 전송 (Enter 또는 버튼 클릭 시)
//   const handleSend = () => {
//     if (!message.trim() || !client || !client.connected) return;

//     const newMessage = {
//       sender: username,
//       message: message,
//     };

//     client.publish({
//       destination: '/app/send',
//       body: JSON.stringify(newMessage),
//     });

//     setMessage('');
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>💬 채팅방 ({username})</h2>
//       <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray', padding: '10px' }}>
//         {chatLog.map((msg, i) => (
//           <div key={i}><b>{msg.sender}</b>: {msg.message}</div>
//         ))}
//       </div>
//       <div style={{ marginTop: '10px' }}>
//         <input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="메시지를 입력하고 Enter를 누르세요"
//           style={{ width: '80%', padding: '8px' }}
//         />
//         <button onClick={handleSend} style={{ padding: '8px 16px', marginLeft: '10px' }}>
//           전송
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatRoom;
