import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: false,      // allow animation on scroll up and down
      mirror: true,     // elements animate again on scroll up
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <Courses />
      <Projects />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
