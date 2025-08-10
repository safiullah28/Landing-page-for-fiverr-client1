import React, { Suspense, lazy } from "react";
import "./App.css";
const Navbar = lazy(() => import("./page1/components/Navbar/Navbar"));
const Hero = lazy(() => import("./page1/components/Hero/Hero"));
const About = lazy(() => import("./page1/components/AboutUs/About"));
const HowItWorks = lazy(() => import("./page1/components/Working/HowItWorks"));
const Listings = lazy(() => import("./page1/components/Listings/Listings"));
const Articles = lazy(() => import("./page1/components/Articles/Articles"));
const Business = lazy(() => import("./page1/components/Business/Business"));
const Footer = lazy(() => import("./page1/components/Footer/Footer"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <HowItWorks />
          <Listings />
          <Articles />
          <Business />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
