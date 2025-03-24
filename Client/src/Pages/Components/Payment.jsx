import  { useState } from "react";
import { PaystackButton } from "react-paystack";
import PropTypes from "prop-types"; 
// import { format } from "date-fns";

const PaystackPayment = ({ email, amount, onSuccess, onClose }) => {
  const [loading, setLoading] = useState(false);

  const paystackConfig = {
     reference: `RES-${Date.now()}`,
    email,
    amount: amount * 100, // Paystack uses kobo (multiply by 100)
    publicKey:import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY,
    text: loading ? "Processing..." : "Pay Now",
    onSuccess: (response) => {
      setLoading(false);
      console.log("Payment Success:", response);
      if (onSuccess) onSuccess(response);
    },
    onClose: () => {
      setLoading(false);
      console.log("Payment closed.");
      if (onClose) onClose();
    },
  };

  return (
    <div className="flex justify-center">
      <PaystackButton
        {...paystackConfig}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        onClick={() => setLoading(true)}
      />
    </div>
  );
};

PaystackPayment.propTypes = {
  email: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default PaystackPayment;
