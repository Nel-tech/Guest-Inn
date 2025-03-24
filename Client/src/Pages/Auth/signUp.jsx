import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signup } from '../../../Service/Firebase/Auth';
import NavBar from '../Components/Navbar';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [docId, setDocId] = useState(null); // Store Firestore document ID
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get('roomId'); // Get roomId from URL

  // Fetch Firestore document ID where roomID matches
useEffect(() => {
  const fetchRoomDocumentId = async () => {
    if (!roomId) return;
    
    // If roomId is already the document ID, just use it
    setDocId(roomId);
    console.log("Using document ID from URL:", roomId);
  };

  fetchRoomDocumentId();
}, [roomId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    try {
      await signup(email, password, password);
      alert('Account successfully created');

      const navigateTo = docId ? `/reservations?roomId=${docId}` : "/reservations";
      navigate(navigateTo); // Navigate with Firestore Document ID
    } catch (error) {
      console.error('Error occurred:', error);
      alert(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-zinc-900">
      <NavBar />
      <div className="flex min-h-screen flex-col items-center px-4 py-8">
        <div className="mt-24 w-full max-w-md rounded-lg border-t-8 border-blue-500 bg-zinc-800 p-6 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-blue-400 focus:border-2 focus:border-blue-400 focus:outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-bold text-gray-400" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-blue-400 focus:border-2 focus:border-blue-400 focus:outline-none"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold text-gray-400" htmlFor="passwordConfirm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-blue-400 focus:border-2 focus:border-blue-400 focus:outline-none"
                  required
                  value={passwordConfirm}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 flex h-10 w-full items-center justify-center rounded bg-blue-400 text-sm font-semibold text-white hover:bg-blue-500 sm:text-lg"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center text-sm text-white">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
