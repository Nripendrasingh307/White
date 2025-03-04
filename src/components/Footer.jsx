import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 sm:py-20 px-4 sm:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-10xl mx-auto text-center w-full">
        
        <h2 className="text-white text-4xl sm:text-6xl md:text-8xl font-light mb-8 sm:mb-10">
          White Architectures
        </h2>
        
        
        <div className="flex justify-center space-x-6 sm:space-x-10 text-base sm:text-lg mb-8 sm:mb-10">
          <a 
            href="#" 
            className="hover:text-white transition duration-300"
          >
            Instagram
          </a>
          <a 
            href="#" 
            className="hover:text-white transition duration-300"
          >
            Twitter
          </a>
        </div>
        
    
        <div className="border-t border-gray-500 w-full my-6"></div>
        
        
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-400 space-y-4 sm:space-y-0">
          <p>skillmix2021</p>
          <p>Top</p>
          <p>skillmix2021@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;