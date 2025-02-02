import { useState } from 'react';
import NavBar from './Navbar';
import DashboardFooter from './footer';
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#18181b]">
      <NavBar />{' '}
      <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-lg bg-[#27272a] p-6 text-white shadow-md">
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Payment Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-300"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-600 bg-[#323232] p-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-300"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-600 bg-[#323232] p-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-300"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-600 bg-[#323232] p-2 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-emerald-500 p-3 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default PaymentForm;
