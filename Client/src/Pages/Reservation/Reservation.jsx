import { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { CalendarIcon, Users, BedDouble } from "lucide-react";
import { format, isBefore, startOfToday } from "date-fns";
import Nav from "../../Pages/Components/Navbar";
import axios from "axios";

function ReservationForm() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState("2");
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedRoom = localStorage.getItem("selectedRoom");
    if (storedRoom) {
      try {
        const parsedRoom = JSON.parse(storedRoom);
        setRoomData(parsedRoom);
      } catch (error) {
        setError("Error loading room data");
      }
    }
  }, []);

  const handleCheckInChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (isBefore(selectedDate, startOfToday())) {
      setError("Check-in date cannot be in the past");
      return;
    }
    setCheckIn(selectedDate);
    setError("");
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (checkIn && isBefore(selectedDate, checkIn)) {
      setError("Check-out date must be after check-in date");
      return;
    }
    setCheckOut(selectedDate);
    setError("");
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !roomData) return 0;
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
    return nights * roomData.price;
  };

  const totalAmount = calculateTotal() * 100; // Convert to kobo

  const paystackConfig = {
    reference: `RES-${Date.now()}`,
    email: email,
    amount: totalAmount,
    publicKey: import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY,
    currency: "NGN",
    metadata: {
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      guests,
      roomName: roomData?.name,
    },
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const verifyPayment = async (reference) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/verify-payment", { reference });
      if (response.data.data.status === "success") {
        setSuccess(true);
        alert("Payment successful! Your reservation is confirmed.");
      }
    } catch (err) {
      setError("Payment verification failed.", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = (reference) => {
    verifyPayment(reference);
  };

  const handlePaymentClose = () => {
    setError("Payment was cancelled.");
  };

  if (!roomData) {
    return <div className="text-center p-4">Loading room data...</div>;
  }

  return (
    <>
      <header className="mt-[3rem]">
        <Nav />
      </header>
      <div className="min-h-screen bg-cover bg-center py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Stay</h2>
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Check-in Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                  value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""}
                  onChange={handleCheckInChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Check-out Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                  value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""}
                  onChange={handleCheckOutChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium">Selected Room</label>
              <div className="flex items-center p-4 bg-gray-100 rounded-lg">
                <img src={roomData.image} alt={roomData.name} className="w-24 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{roomData.name}</h3>
                  <p className="text-sm text-gray-600">${roomData.price} / night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Reservation Summary</h3>
            <div className="flex justify-between">
              <p>Guests: {guests}</p>
              <p>Total: ${calculateTotal()}</p>
            </div>
          </div>
          <button
            className="w-full mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700"
            disabled={!checkIn || !checkOut || error || !email}
            onClick={() => initializePayment(handlePaymentSuccess, handlePaymentClose)}
          >
            {loading ? "Processing..." : "Complete Reservation"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
