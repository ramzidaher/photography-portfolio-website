import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TwitterIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl mb-4 font-semibold">Ramzi Daher</h3>
            <p className="text-gray-300 mb-6">
              Professional photographer based in Brighton, capturing memories at the seafront and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm text-gray-400 mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@ramzidaher.com" className="text-gray-300 hover:text-white">
                    hello@ramzidaher.com
                  </a>
                </li>
                <li>
                  <a href="tel:+441234567890" className="text-gray-300 hover:text-white">
                    +44 123 456 7890
                  </a>
                </li>
                <li className="text-gray-300">Brighton, UK</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ramzi Daher Photography</p>
        </div>
      </div>
    </footer>
  );
};
