import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start md:items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 md:px-12 pt-32 md:pt-0 pb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        
        {/* ===== Left Content ===== */}
        <div
          className="text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
            Hey Younger Techie, want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
              expertise
            </span>{" "}
            in domains like
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mt-2">
            <Typewriter
              words={["Full Stack Development", "AI & ML", "Cybersecurity"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-lg mx-auto md:mx-0 mt-4">
            Empowering Students & Businesses through Training, Internships, and Web Solutions.
          </p>

          <div className="mt-6 sm:mt-8">
            <a href="#contact"> <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Connect us
            </button>
            </a>
          </div>
        </div>

        {/* ===== Right Design Section ===== */}
        <div
          className="relative flex justify-center md:justify-end mt-12 md:mt-0"
          data-aos="fade-left"
        >
          {/* Glowing gradient blob background */}
          <div className="absolute w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Illustration / Icon */}
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Tech Illustration"
            className="relative w-64 sm:w-80 md:w-[420px] rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>

    


    </section>
  );
};

export default HeroSection;
