import NavBar from "./Navbar";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-4">
      {' '}
      <NavBar/>
      {/* Adjust background color to green */}
      
      <div className="w-full max-w-md rounded-lg border-t-8 border-emerald-400 bg-zinc-800 px-6 py-8 shadow-lg sm:px-8">
        {' '}
        <p className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
          Login
        </p>
        <form>
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
                className="mt-2 w-full rounded bg-zinc-900 p-3 text-sm font-medium text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none focus:ring-emerald-400 sm:text-base" // Adjust text and focus colors to yellow
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
                className="mt-2 w-full rounded bg-zinc-900 p-3 text-sm font-medium text-emerald-400 focus:border-2 focus:border-emerald-400 focus:outline-none focus:ring-emerald-400" // Adjust text and focus colors to yellow
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="mt-4 flex h-12 w-full items-center justify-center rounded bg-emerald-400 text-lg font-semibold text-white hover:opacity-90 sm:h-14" // Adjust button gradient to match theme
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-white sm:text-base">
                Do not have an account?{' '}
                <a href="/signup" className="text-emerald-400 underline">
                  {' '}
                  {/* Adjust signup link color to yellow */}
                  Signup
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
