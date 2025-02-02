import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          University Guest House
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <Link to="/#home" className="text-gray-300 hover:text-green-400">
            Home
          </Link>
          <Link to="/#about" className="text-gray-300 hover:text-green-400">
            About Us
          </Link>
          <Link to="/#contact" className="text-gray-300 hover:text-green-400">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="group hidden space-x-3 md:flex">
          <Link
            to="/login"
            className="rounded bg-zinc-900 px-4 py-2 text-green-500 transition-all duration-500 ease-in-out group-hover:bg-green-500 group-hover:text-zinc-900"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded bg-green-500 px-4 py-2 text-zinc-900 transition-all duration-500 ease-in-out group-hover:bg-zinc-900 group-hover:text-green-500"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-green-400 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 transform bg-[#18181b] text-white shadow-lg transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
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

<div className='flex gap-1.5'>
  <div>

          <button className="rounded bg-green-400 px-4 py-2 text-black transition duration-300 hover:bg-green-500">
            Login 
          </button>
  </div>

 <div>

          <button className="rounded bg-green-400 px-4 py-2 text-black transition duration-300 hover:bg-green-500">
             Sign Up
          </button>
  </div>
</div>
          {/* Login Button */}
        </div>
        <nav className="flex flex-col space-y-6 px-6 text-lg">
          <Link
            to="/#home"
            className="hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/#contact"
            className="hover:text-green-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="flex flex-col space-y-3">
            <Link
              to="/login"
              className="peer rounded bg-zinc-900 px-4 py-2 text-green-500 transition duration-300 hover:bg-green-500 hover:text-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded bg-green-500 px-4 py-2 text-zinc-900 transition duration-300 peer-hover:bg-zinc-900 peer-hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
