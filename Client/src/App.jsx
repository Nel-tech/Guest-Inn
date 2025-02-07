import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomDetails from './RoomDetails/DetailsIntro/RoomPage';
import SignUp from './Pages/Auth/signUp';
import Login from './Pages/Auth/login';
import './index.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import ReservationForm from './Pages/Reservation/Reservation';
import { ReservationProvider } from './Pages/Hooks/UseContext';

function App() {
  return (
    <ReservationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room-details/:roomId" element={<RoomDetails />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/reservation/:roomId" element={<ReservationForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </ReservationProvider>
  );
}

export default App;
