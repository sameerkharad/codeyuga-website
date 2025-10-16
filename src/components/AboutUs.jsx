import React from "react";
import Aboutus from "../assets/Aboutus.jpeg"; // adjust path if needed

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        
        {/* ===== Left Design Section ===== */}
        <div
          className="relative flex justify-center md:justify-start mb-10 md:mb-0 hidden md:flex"
          data-aos="fade-right"
        >
          {/* Glowing gradient blob */}
          <div className="absolute w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Illustration / SVG */}
          <img
            src={Aboutus}
            alt="Tech Illustration"
            className="relative w-64 sm:w-80 md:w-[400px] rounded-lg drop-shadow-2xl"
          />
        </div>

        {/* ===== Right Content ===== */}
        <div className="text-center md:text-left space-y-6" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-lg mx-auto md:mx-0">
            At CodeYuga Tech, we turn curiosity into skills and ideas into impact. From hands-on training to real-world internships and cutting-edge web solutions, we empower students and young innovators to level up, build cool projects, and make their mark in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
