import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversityGuestHouse from './mainPage';
import RoomPage from './roomPage';
import SignUp from './signUp';
import Login from './login';
import './app.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversityGuestHouse />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
