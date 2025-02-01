import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Service/Firebase/Auth';
import NavBar from './Navbar';
import DashboardFooter from './footer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [isSignup] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      window.alert('Passwords do not match');
      return;
    }

    try {
      if (isSignup) {
        await signup(email, password, passwordConfirm);
        window.alert('Account successfully created');
        navigate('/menu');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      window.alert(
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <div className="bg-zinc-900">
      <NavBar />
      <div className="flex min-h-screen flex-col items-center px-4 py-8">
        <div className="mt-24 w-full max-w-md rounded-lg border-t-8 border-green-500 bg-zinc-800 p-6 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="mb-1 block text-sm font-bold text-gray-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-bold text-gray-400"
                htmlFor="username"
              >
                Full name
              </label>
              <input
                type="text"
                id="username"
                className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-emerald-400 focus:border-2 focus:border-green-400 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1 block text-sm font-bold text-gray-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-bold text-gray-400"
                  htmlFor="passwordConfirm"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  className="h-10 w-full rounded bg-zinc-900 p-3 text-sm text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 flex h-10 w-full items-center justify-center rounded bg-emerald-400 text-sm font-semibold text-white hover:bg-emerald-500 sm:text-lg"
            >
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm text-white">
              Already have an account?{' '}
              <a href="/login" className="text-emerald-400 underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default SignUp;
