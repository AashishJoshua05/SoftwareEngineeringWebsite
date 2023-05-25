import './App.css';
import { BrowserRouter as   Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login';
import ClubPage from './pages/clubs';
import { AuthProvider } from './components/AuthContext';
import ErrorPage from './pages/errorPage';

function App() {
  return (
    <>
  <AuthProvider>
    <Router>
      <Routes>
          <Route path='/' element={<ClubPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/clubs/:username' element={<ClubPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  </AuthProvider>
    </>
  );
}

export default App;
