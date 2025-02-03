import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

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
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
        <nav className='px-[2rem] flex justify-between self-center items-center'>
       <div>
        <Link to="/" className="text-2xl font-bold text-blue-400">
         <img src={Logo} className='w-[3.5rem] pt-[1rem]' alt="Buk-Logo" />
        </Link>
       </div>

       
       <div className='flex gap-[3rem]'>
        <ul>

          <Link to="/" >
          <li className="text-gray-300 text-[1.2rem] hover:text-blue-400">Home</li>  
          </Link>
        </ul>

        <ul>
          <Link to="/about" >
            <li className="text-gray-300 text-[1.2rem] hover:text-blue-400">About Us</li>
          </Link>
        </ul>
       <ul>
          <Link to="/contact" >
          <li className="text-gray-300 text-[1.2rem] hover:text-blue-400">Contact Us</li>  
          </Link>
       </ul>

       </div>

       
        

        
        <div className="flex gap-3">
          {/* <Link
            to="/login"
          >
            <button  className="cursor-pointer rounded bg-zinc-900 px-8 py-2 text-blue-500 transition-all duration-500 ease-in-out group-hover:bg-blue-500 group-hover:text-zinc-900">  Login</button>
          
          </Link> */}
          <Link
            to="/Login" 
          >
            <button  className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-all duration-500 ease-in-out group-hover:bg-zinc-900 group-hover:text-blue-500">Login</button>
           
          </Link>
        </div>
        </nav>
    </header>
  );
};

export default NavBar;
