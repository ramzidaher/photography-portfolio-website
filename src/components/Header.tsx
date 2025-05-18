import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl text-white font-light tracking-wider relative z-50">
              Ramzi Daher
            </Link>
            <button 
              className="md:hidden text-white relative z-50" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className="hidden md:flex space-x-12">
              <NavLinks currentPath={location.pathname} />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 overflow-hidden">
          <div className="flex flex-col h-full px-6 pt-20 pb-10 relative">
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col space-y-8 text-center">
                <NavLinks mobile onClick={closeMenu} currentPath={location.pathname} />
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLinks = ({
  mobile = false,
  onClick = () => {},
  currentPath = ''
}) => {
  const linkClasses = `text-white/70 hover:text-white transition-colors duration-300 tracking-widest uppercase ${
    mobile ? 'text-2xl' : 'text-sm'
  }`;
  
  const isActive = (path) => (currentPath === path ? 'text-white' : '');
  
  return (
    <>
      <Link to="/gallery" className={`${linkClasses} ${isActive('/gallery')}`} onClick={onClick}>
        Portfolio
      </Link>
      <Link to="/about" className={`${linkClasses} ${isActive('/about')}`} onClick={onClick}>
        About
      </Link>
      <Link to="/services" className={`${linkClasses} ${isActive('/services')}`} onClick={onClick}>
        Services
      </Link>
      <Link to="/contact" className={`${linkClasses} ${isActive('/contact')}`} onClick={onClick}>
        Contact
      </Link>
    </>
  );
};