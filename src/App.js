import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Board from './pages/Board';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/write" element={<WritePost />} />
        <Route path="/board/:id" element={<PostDetail />} />
        <Route path="/board/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
