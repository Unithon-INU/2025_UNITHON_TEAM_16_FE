import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ChatRoom.css';

function ChatRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isOnline] = useState(true);
  const messagesEndRef = useRef(null);
  const [username] = useState(() => {
    const saved = localStorage.getItem('username');
    return saved || 'User-' + Math.floor(Math.random() * 1000);
  });

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  useEffect(() => {
    const rooms = JSON.parse(localStorage.getItem('chatRooms') || '[]');
    const currentRoom = rooms.find(room => room.id === parseInt(roomId));
    
    if (!currentRoom) {
      navigate('/');
      return;
    }
    
    setRoomName(currentRoom.name);
    
    const savedMessages = localStorage.getItem(`chatMessages_${roomId}`);
    if (savedMessages) {
      setChatLog(JSON.parse(savedMessages));
    }
  }, [roomId, navigate]);

  useEffect(() => {
    if (chatLog.length > 0) {
      localStorage.setItem(`chatMessages_${roomId}`, JSON.stringify(chatLog));
      
      const rooms = JSON.parse(localStorage.getItem('chatRooms') || '[]');
      const updatedRooms = rooms.map(room => {
        if (room.id === parseInt(roomId)) {
          const lastMsg = chatLog[chatLog.length - 1];
          return {
            ...room,
            lastMessage: lastMsg?.message || '',
            timestamp: lastMsg?.timestamp || Date.now(),
            unreadCount: 0
          };
        }
        return room;
      });
      localStorage.setItem('chatRooms', JSON.stringify(updatedRooms));
    }
  }, [chatLog, roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: username,
      message: message.trim(),
      timestamp: Date.now(),
      type: 'sent'
    };

    setChatLog(prev => [...prev, newMessage]);

    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: roomName,
        message: generateBotResponse(message.trim()),
        timestamp: Date.now(),
        type: 'received'
      };
      setChatLog(prev => [...prev, botReply]);
    }, 1000 + Math.random() * 2000);

    setMessage('');
  };

  const generateBotResponse = (userMessage) => {
    const responses = [
      "That's interesting! Tell me more about it.",
      "I see what you mean. How do you feel about that?",
      "Absolutely! I'm thinking of going for a hike on Saturday. How about you?",
      "That sounds like a great plan! Excited 😃",
      "I know, right? Weekend plans are the best. Any exciting plans on your end?",
      "Hiking sounds amazing! I might catch up on some reading and also meet up with a few friends on Sunday."
    ];
    
    if (userMessage.includes('안녕') || userMessage.includes('hello') || userMessage.includes('hi')) {
      return "Hi! I'm doing well, thanks. Can't wait for the weekend!";
    }
    if (userMessage.includes('weekend') || userMessage.includes('주말')) {
      return "Can't wait for the weekend!";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <div className="header-left">
          <div className="user-avatar">
            {isOnline && <div className="online-indicator"></div>}
          </div>
          <div className="user-info">
            <div className="user-name">{roomName}</div>
            <div className="user-status">{isOnline ? 'Online' : 'Offline'}</div>
          </div>
        </div>
        
        <div className="header-actions">
        </div>
      </div>

      <div className="messages-area">
        {chatLog.length === 0 ? (
          <div className="empty-state">
            {roomName}과의 대화를 시작해보세요!
          </div>
        ) : (
          chatLog.map((msg) => (
            <div key={msg.id} className={`message-item ${msg.type === 'sent' ? 'message-item-sent' : ''}`}>
              {msg.type === 'received' && <div className="message-avatar"></div>}
              
              <div className="message-content">
                {msg.type === 'received' && (
                  <div className="message-sender">{msg.sender}</div>
                )}
                
                <div className={`message-bubble ${msg.type === 'sent' ? 'message-bubble-sent' : ''}`}>
                  <div className={`message-text ${msg.type === 'sent' ? 'message-text-sent' : ''}`}>
                    {msg.message}
                  </div>
                </div>
                
                <div className={`message-time ${msg.type === 'sent' ? 'message-time-sent' : ''}`}>
                  {formatTime(msg.timestamp)}
                </div>
              </div>
              
              {msg.type === 'sent' && <div className="message-avatar message-avatar-sent"></div>}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <div className="input-container">
          <input
            type="text"
            className="message-input"
            placeholder="Type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        
        <div className="input-actions">
          <button 
            className={`send-btn ${!message.trim() ? 'send-btn-disabled' : ''}`}
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <span className="send-text">Send</span>
            <div className="send-icon">➤</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;