import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChatList.css';

function ChatList() {
  const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedRooms = localStorage.getItem('chatRooms');
    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatRooms', JSON.stringify(rooms));
  }, [rooms]);

  const createNewRoom = () => {
    const roomName = prompt('새 채팅방 이름을 입력하세요:');
    if (!roomName || !roomName.trim()) return;

    const newId = Date.now();
    const newRoom = {
      id: newId,
      name: roomName.trim(),
      lastMessage: '',
      timestamp: Date.now(),
      unreadCount: 0,
      isTyping: false,
      isPinned: false
    };

    setRooms(prev => [newRoom, ...prev]);
    navigate(`/chat/${newId}`);
  };

  const enterRoom = (id) => {
    navigate(`/chat/${id}`);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 24) {
      return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }
  };

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedRooms = filteredRooms.filter(room => room.isPinned);
  const unpinnedRooms = filteredRooms.filter(room => !room.isPinned);

  const renderRoom = (room) => (
    <div
      key={room.id}
      className={`room-item ${room.unreadCount > 0 ? 'room-item-selected' : ''}`}
      onClick={() => enterRoom(room.id)}
    >
      <div className="room-avatar"></div>
      <div className="room-info">
        <div className={`room-name ${room.unreadCount > 0 ? 'room-name-unread' : ''}`}>
          {room.name}
        </div>
        <div className={`last-message ${room.unreadCount > 0 ? 'last-message-unread' : ''} ${room.isTyping ? 'last-message-typing' : ''}`}>
          {room.isTyping ? 'Typing...' : room.lastMessage || '새 대화를 시작하세요'}
        </div>
      </div>
      <div className="room-meta">
        <div className="timestamp">
          {formatTime(room.timestamp)}
        </div>
        {room.unreadCount > 0 && (
          <div className="unread-badge">
            {room.unreadCount}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="chat-list-container">
      <div className="chat-list-header">
        <div className="chat-icon">💬</div>
        <div className="chat-title">Chat Search</div>
        
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input
            type="text"
            className="search-input"
            placeholder="Search messages, people"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <button className="new-chat-btn" onClick={createNewRoom}>
          +
        </button>
      </div>

      {pinnedRooms.length > 0 && (
        <>
          <div className="pinned-section">
            <div className="pin-icon">📌</div>
            <div className="section-label">PINNED CHATS</div>
          </div>
          <div className="pinned-chats">
            {pinnedRooms.map(renderRoom)}
          </div>
        </>
      )}

      <div className="all-messages-section">
        <div className="message-icon">💬</div>
        <div className="section-label">ALL MESSAGES</div>
      </div>

      <div className="all-messages">
        {unpinnedRooms.length === 0 ? (
          <div className="empty-state">
            채팅방이 없습니다.<br />새 채팅을 시작해보세요!
          </div>
        ) : (
          unpinnedRooms.map(renderRoom)
        )}
      </div>
    </div>
  );
}

export default ChatList;