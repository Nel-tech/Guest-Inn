import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';
import axios from 'axios';

const PaystackIntegration = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100,
    publicKey: import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY,
    currency: 'NGN',
    metadata: {
      custom_fields: [
        {
          display_name: "Order ID",
          variable_name: "order_id",
          value: "ORD-" + Date.now()
        }
      ]
    }
  };

  const verifyPayment = async (reference) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/verify-payment', { reference });
      
      if (response.data.data.status === 'success') {
        setSuccess(true);
        // Handle successful payment (update database, send email, etc.)
      }
    } catch (error) {
      setError('Payment verification failed', error);
    } finally {
      setLoading(false);
    }
  };

  const onSuccess = (reference) => {
    verifyPayment(reference);
  };

  const onClose = () => {
    setError('Payment was cancelled');
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}
      
      {success ? (
        <div className="bg-green-100 text-green-700 p-3 rounded">
          Payment successful!
        </div>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={() => {
              if (!email || !amount) {
                setError('Please fill all fields');
                return;
              }
              initializePayment(onSuccess, onClose);
            }}
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </>
      )}
    </div>
  );
};

export default PaystackIntegration;