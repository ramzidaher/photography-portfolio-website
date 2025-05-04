import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl text-white font-light tracking-wider">
            Ramzi Daher
          </Link>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <nav className="hidden md:flex space-x-12">
            <NavLinks currentPath={location.pathname} />
          </nav>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col space-y-8 text-center">
              <NavLinks mobile onClick={toggleMenu} currentPath={location.pathname} />
            </nav>
          </div>
        </div>}
    </header>;
};
const NavLinks = ({
  mobile = false,
  onClick = () => {},
  currentPath = ''
}) => {
  const linkClasses = `text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase
    ${mobile ? 'text-2xl' : ''}`;
  const isActive = (path: string) => {
    return currentPath === path ? 'text-white' : '';
  };
  return <>
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
    </>;
};