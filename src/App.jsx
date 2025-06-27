import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/Header';
import './App.css'; // padding-top 정의했다면 import

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
