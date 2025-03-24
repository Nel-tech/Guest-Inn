import { useState, useEffect } from "react";
import { format, isBefore, startOfToday, differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../../Pages/Components/Navbar";
import { db } from "../../../Service/Firebase/Config";
import { collection,  getDocs, query, where, addDoc } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import PaystackPayment from "../Components/Payment";

function ReservationForm() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
   const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  console.log("Current roomId from URL:", roomId);

  // const handlePaymentSuccess = (response) => {
  //   console.log("Payment successful!", response);
  //   alert("Payment successful! Reference: " + response.reference);
  // };

  const handlePaymentClose = () => {
    console.log("Payment closed by user.");
  };

const { user } = useAuth();  

useEffect(() => {
  if (user) {
    setEmail(user.email || "");
  } else {
    toast.error("Please log in to make a reservation");
    navigate("/login");
  }
}, [user, navigate]);  


useEffect(() => {
  const fetchRoomData = async () => {
    if (!roomId) {
      console.log("No valid roomId found. Exiting fetch.");
      return;
    }

    console.log("Fetching room with roomId:", roomId);

    try {
      
      const roomIdNumber = Number(roomId);
      const roomsRef = collection(db, "rooms");
      const q = query(roomsRef, where("roomId", "==", roomIdNumber));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        console.log("Room Data:", docSnap.data());
        setRoomData({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("Room not found.");
        toast.error("Room not found.");
      }
    } catch (error) {
      console.error("Error fetching room:", error);
      toast.error("Failed to load room data.");
    }
  };

  fetchRoomData();
}, [roomId]);

  // Handle Check-in Date Change
  const handleCheckInChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (isBefore(selectedDate, startOfToday())) {
      setError("Check-in date cannot be in the past");
      return;
    }
    setCheckIn(selectedDate);
    setError("");
  };

  // Handle Check-out Date Change
  const handleCheckOutChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (checkIn && isBefore(selectedDate, checkIn)) {
      setError("Check-out date must be after check-in date");
      return;
    }
    setCheckOut(selectedDate);
    setError("");
  };

  // Calculate Total Price
  // Calculate number of nights
const calculateNumberOfNights = () => {
  if (!checkIn || !checkOut) return 0;
  const nights = differenceInDays(checkOut, checkIn);
  return nights > 0 ? nights : 0;
};

// Calculate Total Price
const calculateTotal = () => {
  if (!roomData) return 0;
  const nights = calculateNumberOfNights();
  return nights * (roomData.price || 0);
};
  // Handle Reservation
const handlePaymentSuccess = async (response) => {
  console.log("Payment successful!", response);
  toast.success("Payment successful!");

  if (!user || !checkIn || !checkOut || !roomData) {
    toast.error("Missing reservation details.");
    return;
  }

  try {
    const paymentRef = await addDoc(collection(db, "payments"), {
      userId: user.uid, // Store user ID
      email: user.email,
      reference: response.reference, // Paystack transaction reference
      amountPaid: calculateTotal(), // Store actual amount paid
      roomId: roomData.id,
      roomName: roomData.roomName || roomData.name,
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      status: "successful", // Mark the payment as successful
      createdAt: new Date(), // Timestamp
    });

    console.log("Payment saved with ID:", paymentRef.id);

    // Redirect to receipt page
    navigate(`/receipt/${paymentRef.id}`);
  } catch (error) {
    console.error("Error saving payment:", error);
    toast.error("Failed to save payment details.");
  }
};


  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
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
              <label className="block text-sm font-medium">Check-in Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""}
                onChange={handleCheckInChange}
              />
              <label className="block text-sm font-medium">Check-out Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""}
                onChange={handleCheckOutChange}
              />
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />

              {user && (
                <div className="p-3 bg-green-50 text-green-700 rounded-lg">
                  Logged in as: {user.displayName || user.email}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Selected Room</label>
              {roomData ? (
                <div className="flex items-center p-4 bg-gray-100 rounded-lg">
                  <img
                    src={roomData.imageUrl || roomData.image || "https://via.placeholder.com/150"}
                    alt={roomData.roomName || roomData.name || "Room"}
                    className="w-24 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{roomData.roomName || roomData.name || "Room"}</h3>
                    <p className="text-sm text-gray-600">${roomData.price || 0} / night</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-yellow-50 text-yellow-700 rounded-lg">
                  No room selected. Please go back and select a room.
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Reservation Summary</h3>
            <p><span className="font-medium">Total:</span> #{calculateTotal()}</p>
             <p><span className="font-medium">Number Of Nights:</span> {calculateNumberOfNights()}</p>
          </div>

          {/* <button
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg transition duration-200"
            disabled={!checkIn || !checkOut || !roomData || error || !email || loading}
            onClick={handleReservation}
          >
            {loading ? "Processing..." : "Make Payment"}
          </button> */}

          <PaystackPayment
        email={user.email}
        amount={calculateTotal()}
        onSuccess={handlePaymentSuccess}
        onClose={handlePaymentClose}
        // handleReservation={handleReservation}
      />


        </div>
      </div>
    </>
  );
}

export default ReservationForm;