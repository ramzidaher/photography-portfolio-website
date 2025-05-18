import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, Mail, MapPin } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa'; // Importing TikTok and YouTube icons

export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl mb-4 font-semibold">Ramzi Daher</h3>
            <p className="text-gray-300 mb-6">
              Professional photographer based in Brighton, capturing memories at the seafront and beyond.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/shotsbyramzi/" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@shotsbyramzi" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              {/* Uncomment when you have a YouTube channel
              <a 
                href="https://www.youtube.com/channel/yourchannelid" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a> 
              */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-sm text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-sm text-gray-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:shotsbyramzi@ramzidaher.com" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  <span className="break-all">shotsbyramzi@ramzidaher.com</span>
                </a>
              </li>
              <li className="text-gray-300 flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Brighton, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ramzi Daher Photography</p>
        </div>
      </div>
    </footer>
  );
};