import React from 'react';
import {
  MessageSquare,
  Phone,
  Instagram,
  Twitter,
  Facebook,
} from 'lucide-react';

const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-8">
      <div className="w-full border-t border-gray-500"></div>
      <div className="w-full px-6 py-6">
        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:justify-center lg:space-x-12 lg:space-y-0">
          <p className="text-sm text-white sm:text-base md:text-lg">
            &copy; {year} University guest-inn All rights reserved.
          </p>

          <ul className="flex space-x-6">
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <Instagram size={24} />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <Twitter size={24} />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-gray-300"
              >
                <Facebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DashboardFooter = () => {
  return (
    <footer className="mt-32 w-full bg-transparent">
      <div className="w-full">
        <div className="border-t border-gray-500"></div>

        <div className="px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-center md:gap-12 lg:grid-cols-4">
            {/* Company Info Section */}
            <div className="space-y-6 md:justify-self-center">
              <a href="#" className="block">
                <span className="font-logoFonts text-xl text-[#32CD32] sm:text-2xl">
                  University guest
                </span>
              </a>

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
                      Workifyy@gmail.com
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
                      +2349081715621
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
                    About Us
                  </a>
                </li>
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
                    FAQ
                  </a>
                </li>
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
                <li>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300"
                  >
                    Terms & Condition
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

export default DashboardFooter;
