import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Courts } from './pages/Courts';
import { CourtDetails } from './pages/CourtDetails';
import { Profile } from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          {/* Головна сторінка (/) */}
          <Route path="/" element={<Home />} />
          
          {/* Каталог кортів (/courts) */}
          <Route path="/courts" element={<Courts />} />
          
          {/* Деталі корту (/courts/1) */}
          <Route path="/courts/:id" element={<CourtDetails />} />
          
          {/* Профіль (/profile) */}
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <footer style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
          © 2026 Tennis Finder. Всі права захищені.
        </footer>
      </div>
    </Router>
  );
}

export default App;