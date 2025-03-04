import React from "react";
import image1 from "/src/assets/ContactUsIcons/CU1.png";
import image2 from "/src/assets/ContactUsIcons/CU2.png";
import image3 from "/src/assets/ContactUsIcons/CU3.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-gray-500 text-base sm:text-xl font-medium mb-8">
          Contact Us
        </h2>
        
        <div className="flex flex-col-reverse md:flex-row justify-end">
          <div className="w-full md:w-[50%] space-y-6 sm:space-y-10">
            <div className="flex items-center space-x-4">
              <img 
                src={image1} 
                alt="Address" 
                className="w-8 h-8 sm:w-10 sm:h-10" 
              />
              <div className="text-gray-800 text-base sm:text-lg">
                <p>White Architectures</p>
                <p>2787 Street, Fremont</p>
                <p>California, 94538</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img 
                src={image2} 
                alt="Email" 
                className="w-8 h-8 sm:w-10 sm:h-10" 
              />
              <p className="text-gray-800 text-base sm:text-lg break-words">
                wagetintouch@whitearch.com
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img 
                src={image3} 
                alt="Phone" 
                className="w-8 h-8 sm:w-10 sm:h-10" 
              />
              <p className="text-gray-800 text-base sm:text-lg">
                510-979-9360
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;