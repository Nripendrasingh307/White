import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import About from "./About";
import News from "./components/News";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <News />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
