import React, { useState } from "react";
import logo from './src/assets/LogoAndOthers/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 sticky top-0">
      <nav className="absolute w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          <img 
            className="h-[50px] rounded-lg shadow-lg" 
            src={logo} 
            alt="The Edge Building Logo" 
          />

          
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>

          
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <a href="#" className="transition-colors duration-300 hover:text-red-300">Projects</a>
            <a href="#" className="transition-colors duration-300 hover:text-red-300">About</a>
            <a href="#" className="transition-colors duration-300 hover:text-red-300">News</a>
            <a href="#" className="transition-colors duration-300 hover:text-red-300">Services</a>
            <a href="#" className="transition-colors duration-300 hover:text-red-300">Contact</a>
          </div>

          
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-6 text-2xl">
              <a 
                href="#" 
                onClick={toggleMenu} 
                className="text-white hover:text-red-300 transition-colors duration-300"
              >
                Projects
              </a>
              <a 
                href="#" 
                onClick={toggleMenu} 
                className="text-white hover:text-red-300 transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#" 
                onClick={toggleMenu} 
                className="text-white hover:text-red-300 transition-colors duration-300"
              >
                News
              </a>
              <a 
                href="#" 
                onClick={toggleMenu} 
                className="text-white hover:text-red-300 transition-colors duration-300"
              >
                Services
              </a>
              <a 
                href="#" 
                onClick={toggleMenu} 
                className="text-white hover:text-red-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;