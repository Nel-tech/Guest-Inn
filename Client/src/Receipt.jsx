/* eslint-disable react/prop-types */
import NavBar from './Navbar';
import DashboardFooter from './footer';

const BookingReceipt = ({ receiptData }) => {
  return (
      <div className="min-h-screen bg-[#18181b]">
          <NavBar/>
      <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-lg bg-gradient-to-br from-[#1e1e20] to-[#27272a] p-6 text-white">
          <h2 className="mb-4 text-center text-3xl font-bold text-emerald-400 drop-shadow-lg">
            Booking Receipt
          </h2>
          <div className="mb-4 border-b border-gray-600 opacity-50"></div>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex justify-between">
              <span className="font-semibold text-white">Guest Name:</span>
              <span>{receiptData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-white">Email:</span>
              <span>{receiptData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-white">Room:</span>
              <span>{receiptData.room}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-white">Booking Date:</span>
              <span>{receiptData.date}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-emerald-400">
              <span>Total Amount:</span>
              <span>{receiptData.amount}</span>
            </div>
          </div>
          <div className="mb-4 mt-4 border-b border-gray-600 opacity-50"></div>
          <p className="text-center text-xs italic text-gray-400">
            "Thank you for booking with us! We hope you have a pleasant stay."
          </p>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default BookingReceipt;
