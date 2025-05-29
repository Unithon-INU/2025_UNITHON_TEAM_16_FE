import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatList() {
  const [rooms, setRooms] = useState([{ id: 1, name: '기본 채팅방' }]);
  const navigate = useNavigate();

  const createNewRoom = () => {
    const newId = Date.now();
    const newRoom = { id: newId, name: `새 채팅방 ${rooms.length + 1}` };
    setRooms(prev => [...prev, newRoom]);
    navigate(`/chat/${newId}`);
  };

  const enterRoom = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div style={styles.container}>
      <h2>💬 채팅방 목록</h2>
      <div style={styles.roomList}>
        {rooms.map((room) => (
          <div key={room.id} style={styles.roomItem} onClick={() => enterRoom(room.id)}>
            {room.name}
          </div>
        ))}
      </div>

      <button style={styles.fab} onClick={createNewRoom}>＋</button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    padding: '20px',
    position: 'relative',
    fontFamily: 'sans-serif',
  },
  roomList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  roomItem: {
    padding: '15px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 0 3px rgba(0,0,0,0.1)',
  },
  fab: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '28px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
};

export default ChatList;
