import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversityGuestHouse from './mainPage';
import RoomPage from './RoomPage';
import SignUp from './signUp';
import BookingReceipt from './Receipt';
import PaymentForm from './PaymentForm';
import Login from './login';
import './index.css';

function App() {
  const sampleReceiptData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    room: 'Room 101',
    checkIn: '2025-02-01',
    checkOut: '2025-02-05',
    amount: '$250',
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversityGuestHouse />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<PaymentForm />} />
        <Route
          path="/receipt"
          element={<BookingReceipt receiptData={sampleReceiptData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
