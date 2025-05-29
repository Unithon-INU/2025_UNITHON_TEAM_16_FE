import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Board from '../pages/Board';
import PostDetail from '../pages/PostDetail';
import WritePost from '../pages/WritePost';
import EditPost from '../pages/EditPost';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/:id" element={<PostDetail />} />
      <Route path="/board/write" element={<WritePost />} />
      <Route path="/board/edit/:id" element={<EditPost />} />
    </Routes>
  );
}

export default Router;
