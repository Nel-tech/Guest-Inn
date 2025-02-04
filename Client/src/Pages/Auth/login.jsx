// import DashboardFooter from './footer';
// import NavBar from './Navbar';
import { useState } from 'react';
import { signin } from '../../../Service/Firebase/Auth'; // Ensure this file exists

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin(email, password);
      window.alert('Login Successfully');
      // Navigate('/summary') // Uncomment if using navigation
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
      {/* <NavBar /> */}
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-lg border-t-8 border-blue-400 bg-zinc-800 px-6 py-8 shadow-lg sm:px-8">
          <p className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
            Login
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <div>
                <label
                  className="sm:text-md text-sm font-bold text-gray-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded bg-zinc-900 p-3 text-sm font-medium text-blue-400 focus:border-2 focus:border-blue-400 focus:outline-none focus:ring-blue-400 sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  className="sm:text-md text-sm font-bold text-gray-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded bg-zinc-900 p-3 text-sm font-medium text-blue-400 focus:border-2 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="mt-4 flex h-12 w-full items-center justify-center rounded bg-blue-400 text-lg font-semibold text-white hover:opacity-90 sm:h-14"
              >
                Login
              </button>
              <div className="mt-4 text-center">
                <p className="text-sm text-white sm:text-base">
                  Do not have an account?{' '}
                  <a href="/signup" className="text-emerald-400 underline">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default Login;
