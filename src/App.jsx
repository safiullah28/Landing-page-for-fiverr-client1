import React from "react";
import "./App.css";

import Navbar from "./page1/components/Navbar/Navbar";
import Hero from "./page1/components/Hero/Hero";
import About from "./page1/components/AboutUs/About";
import HowItWorks from "./page1/components/Working/HowItWorks";
import Listings from "./page1/components/Listings/Listings";
import Articles from "./page1/components/Articles/Articles";
import Business from "./page1/components/Business/Business";
import Footer from "./page1/components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Listings />
        <Articles />
        <Business />
      </main>
      <Footer />
    </>
  );
};

export default App;
