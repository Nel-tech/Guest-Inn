import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomPage from './RoomDetails/RoomDetails';
 import SignUp from './Pages/Auth/signUp';
// import BookingReceipt from './Receipt';
// import PaymentForm from './PaymentForm';
import Login from './Pages/Auth/login';
import './index.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room-details/:roomId" element={<RoomPage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Payment" element={<PaymentForm />} /> */}
        {/* <Route
          path="/receipt"
          element={<BookingReceipt receiptData={sampleReceiptData} />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
