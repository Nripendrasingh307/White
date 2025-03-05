import React from "react";
import logo from '../assets/ProjectsImages/P1.jpg'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${logo})` }}
      />

      
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10">
        
        <div className="w-full lg:w-auto text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-light mb-2">Sharp & Beautiful</h1>
          <h2 className="text-2xl lg:text-3xl font-light mt-2">The Edge Building</h2>
          <p className="text-gray-400 mt-2 text-base lg:text-lg">Madrid, Spain</p>
        </div>

        {/* Right Side Image (Animated) */}
        <div 
          className="w-full lg:w-96 max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={logo} 
            alt="The Edge Building" 
            className="w-full h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>
      </div>

      {/* Bottom Right Page Indicator */}
      <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 text-gray-400">
        <span className="text-xl">1</span>
        <span className="text-sm"> / 5</span>
      </div>
    </section>
  );
};

export default HeroSection;