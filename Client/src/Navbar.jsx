import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className=''>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-400">
            University Guest House
          </div>

          {/* Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <a href="#" className="text-gray-300 hover:text-green-400">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              Contact Us
            </a>
          </nav>

          {/* Login Button */}
          <button className="rounded bg-green-400 px-4 py-2 text-black transition duration-300 hover:bg-green-500">
            Login / Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
