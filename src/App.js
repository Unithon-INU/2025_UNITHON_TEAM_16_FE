import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import LanguageSelector from './pages/LanguageSelector';
import Home from './pages/Home';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelector />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat-list" element={<ChatList />} />
        <Route path="/chat/:roomId" element={<ChatRoom />} />        
      </Routes>
    </Router>
  );
}

export default App;