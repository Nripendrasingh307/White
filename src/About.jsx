import React from "react";
import DesignWhite from "../assets/LogoAndOthers/DesignWHite.png";
const About = () => {
  return (
    <section className="h-screen bg-black opacity-150 text-white flex-col items-center justify-center px-10">
      
      <div className=" inset-0 h-[50%] flex items-end justify-center text-gray-700 text-[400px] font-light tracking-tighter  ">
        
        <img src={DesignWhite} alt="The Edge Building"  />
        
        
      </div>

      <div className="w-full  justify-end flex">
      <div className=" w-[50%]  justify-center text-left">
        <h2 
          className="text-5xl font-light text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </h2>
        <p className="text-lg text-gray-400 ">
          Architecture is the learned game, correct and magnificent, of forms assembled in the light. 
          So keeping this in mind we started with our work. We are a team of 5 Architects with a clean and white vision.
        </p>
        <a 
          href="#" 
          className="inline-block mt-6 text-gray-400 border-b border-gray-600 hover:text-white hover:border-white transition duration-300"
        >
          Read More +
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;
