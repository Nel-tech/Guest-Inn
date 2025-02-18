import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomDetails from './RoomDetails/DetailsIntro/RoomPage';
import SignUp from './Pages/Auth/signUp';
import Login from './Pages/Auth/login';
import './index.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import ReservationForm from './Pages/Reservation/Reservation';
import { ReservationProvider } from './Pages/Context/UseContext';
import { AuthProvider } from './Pages/Context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ReservationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/room-details/:roomId" element={<RoomDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservation" element={<ReservationForm />} />
          </Routes>
        </ReservationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
