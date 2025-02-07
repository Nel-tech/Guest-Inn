import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/80 shadow-md backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex h-16 items-center justify-between  px-6 md:h-20">
        {/* Logo */}
        <div className="p-2 sm:py-4 md:p-3">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            <img src={Logo} className="w-10 md:w-12" alt="Buk-Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          <Link to="/" className="text-lg text-gray-300 hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-300 hover:text-blue-400"
          >
            About Us
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link to="/login">
            <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-all duration-500 ease-in-out hover:bg-zinc-900 hover:text-blue-500">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-64 transform bg-zinc-900 text-white ${menuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between border-b border-gray-700 p-5">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <Link
            to="/"
            className="text-lg text-gray-300 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-300 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <Link to="/login" className="mt-4">
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white transition-all duration-500 ease-in-out hover:bg-zinc-900 hover:text-blue-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
