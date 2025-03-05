import React from "react";
import itemImage from './src/assets/News/Seperated Images/N1.png'
import itemImage2 from './src/assets/News/Seperated Images/N2.png'
import itemImage3 from './src/assets/News/Seperated Images/N3.png'
import itemImage4 from './src/assets/News/Seperated Images/N4.png'
import itemImage5 from './src/assets/News/Seperated Images/N5.png'

const newsData = [
  {
    id: 1,
    image: itemImage,
    title: "Café Foamies",
    description:
      "White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI - COS Magazine of the year 2020.",
    date: "20 Jun 2020",
  },
  {
    id: 2,
    image: itemImage2,
    title: "Space and Light",
    description:
      'D&D Magazine 2020 added an article on our work of "Space and Light" saying about the design trend that we are setting out there.',
    date: "12 Mar 2020",
  },
  {
    id: 3,
    image: itemImage3,
    title: "Architectural Design",
    description:
      "Architecture & Design 2020 added an article on our work Edge Building and mentioned our Architectural work of Jan 2020.",
    date: "15 Jan 2020",
  },
  {
    id: 4,
    image: itemImage4,
    title: "Architectural Design",
    description:
      "Architecture & Design 2020 added an article on our work Edge Building and mentioned our Architectural work of Jan 2020.",
    date: "15 Jan 2020",
  },
  {
    id: 5,
    image: itemImage5,
    title: "Architectural Design",
    description:
      "Architecture & Design 2020 added an article on our work Edge Building and mentioned our Architectural work of Jan 2020.",
    date: "15 Jan 2020",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">News</h2>
        
        
        <div className="overflow-x-auto display">
          <div className="flex space-x-4 sm:space-x-6 pb-4">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[350px] md:w-[400px] bg-gray-900 rounded-lg shadow-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <span className="text-gray-500 text-sm mt-3 block">
                  — {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;