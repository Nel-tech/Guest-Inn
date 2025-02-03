import  { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-600">
            UGH
          </a>
          <div className="space-x-4">
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
