import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <div className="main-content">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
