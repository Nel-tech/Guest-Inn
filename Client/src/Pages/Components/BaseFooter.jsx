import {
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
            &copy; {year} Buk-Guest-Inn.
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

export default BaseFooter