
import {
  MessageSquare,
  Phone,
} from 'lucide-react';
// import Logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom';
import BaseFooter from './BaseFooter';

const Footer = () => {
  return (
    <footer className="mt-32 w-full bg-transparent">
      <div className="w-full">
        <div className="border-t border-gray-500"></div>

        <div className="px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-center md:gap-12 lg:grid-cols-4">
            {/* Company Info Section */}
            <div className="space-y-6 md:justify-self-center">
              {/* <Link to="/" className="text-2xl font-bold text-blue-400">
        <h1 className='pb-[2rem]'>Buk-Guest-Inn</h1>
        </Link> */}

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Email</h3>
                    <a
                      href="mailto:Workifyy@gmail.com"
                      className="text-sm text-white hover:text-gray-300"
                    >
                      bukguesthouseltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      Contact Us
                    </h3>
                    <a
                      href="tel:+2349081715621"
                      className="text-sm text-white hover:text-gray-300"
                    >
                      +23408162298937
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="md:justify-self-center">
              <h6 className="mb-6 text-lg font-medium uppercase text-white">
                Company
              </h6>
              <ul className="space-y-4">
               
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="md:justify-self-center">
              <h6 className="mb-6 text-lg font-medium uppercase text-white">
                Support
              </h6>
              <ul className="space-y-4">
                
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Online Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:justify-self-center">
              <h6 className="mb-6 text-lg font-medium uppercase text-white">
                Legals
              </h6>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <BaseFooter />
      </div>
    </footer>
  );
};

export default Footer;
