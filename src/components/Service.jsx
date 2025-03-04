import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl text-left w-full">
        <h2 className="text-gray-500 text-base sm:text-xl font-medium mb-4">
          Services
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
          Design <br />
          Direction <br />
          Guide
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mt-4 sm:mt-6 cursor-pointer hover:underline">
          Read More +
        </p>
      </div>
    </div>
  );
};

export default Services;