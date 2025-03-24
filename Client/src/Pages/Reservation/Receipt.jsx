import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Service/Firebase/Config";
import { format } from "date-fns";
import { DownloadIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const Receipt = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayment = async () => {
      if (!paymentId) return;

      try {
        const paymentDoc = await getDoc(doc(db, "payments", paymentId));
        if (paymentDoc.exists()) {
          setPayment(paymentDoc.data());
        } else {
          console.error("Payment not found.");
        }
      } catch (error) {
        console.error("Error fetching payment:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayment();
  }, [paymentId]);

  const downloadReceipt = () => {
    if (!payment) return;

    // Format date strings
    const checkInDate = format(new Date(payment.checkIn), "PPP");
    const checkOutDate = format(new Date(payment.checkOut), "PPP");
    const createdDate = payment.createdAt?.seconds 
      ? format(new Date(payment.createdAt.seconds * 1000), "PPP") 
      : format(new Date(), "PPP");

    // Create receipt content
    const receiptContent = `
PAYMENT RECEIPT
--------------
Reference: ${payment.reference || 'N/A'}
Email: ${payment.email || 'N/A'}
Amount Paid: ₦${payment.amountPaid || 0}
Room: ${payment.roomName || 'N/A'}
Check-In: ${checkInDate}
Check-Out: ${checkOutDate}
Date: ${createdDate}
    `;

    // Create a Blob with the receipt content
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `Receipt-${payment.reference || paymentId}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return <div className="flex justify-center text-white text-[3rem] items-center min-h-screen">Loading receipt...</div>;
  }

  if (!payment) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Receipt not found</div>;
  }

  return (
  <div className="max-w-md mx-auto my-12 rounded-xl overflow-hidden shadow-lg bg-[#18181b] text-white">
      {/* Header */}
      <div className="bg-blue-400 p-6 text-white">
        <h2 className="text-2xl font-bold text-center">Payment Receipt</h2>
        <p className="text-center opacity-90 mt-1">Thank you for your payment</p>
      </div>
      
      {/* Receipt Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Reference */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Reference</span>
            <span className="font-medium">{payment.reference || 'N/A'}</span>
          </div>
          
          {/* Email */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Email</span>
            <span className="font-medium">{payment.email || 'N/A'}</span>
          </div>
          
          {/* Amount Paid */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Amount Paid</span>
            <span className="font-medium text-green-400">₦{payment.amountPaid?.toLocaleString() || 0}</span>
          </div>
          
          {/* Room */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Room</span>
            <span className="font-medium">{payment.roomName || 'N/A'}</span>
          </div>
          
          {/* Check-In */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Check-In</span>
            <span className="font-medium">
              {payment.checkIn ? format(new Date(payment.checkIn), "PPP") : 'N/A'}
            </span>
          </div>
          
          {/* Check-Out */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Check-Out</span>
            <span className="font-medium">
              {payment.checkOut ? format(new Date(payment.checkOut), "PPP") : 'N/A'}
            </span>
          </div>
          
          {/* Date */}
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Payment Date</span>
            <span className="font-medium">
              {payment.createdAt?.seconds 
                ? format(new Date(payment.createdAt.seconds * 1000), "PPP") 
                : 'N/A'}
            </span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="mt-8 flex justify-between gap-4">
          <button 
            onClick={downloadReceipt} 
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition duration-200"
          >
            <DownloadIcon size={18} />
            <span>Download</span>
          </button>
          
        
        </div>
        
        {/* Back to Homepage Button */}
        <Link to="/" className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200">
          <HomeIcon size={18} />
          <span>Back to Homepage</span>
        </Link>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-800 p-4 text-center text-sm text-gray-400">
        <p>This is an official receipt for your records</p>
      </div>
    </div>
  );
};

export default Receipt;