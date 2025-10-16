import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 md:px-12 py-16 md:py-20 lg:py-24 pt-32 md:pt-36 lg:pt-40 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto w-full">
        
        {/* ===== Left Content ===== */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 font-lobster">
            Hey Young Techie, want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 font-caprasimo">
              expertise
            </span>{" "}
            in domains like
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mt-2">
            <Typewriter
              words={["Full Stack Development", "AI & ML", "Cybersecurity"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium max-w-md mx-auto md:mx-0 mt-3">
            Empowering Students & Businesses through Training, Internships, and Web Solutions.
          </p>

          <div className="mt-4 sm:mt-6">
            <a href="#contact">
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                Connect with us
              </button>
            </a>
          </div>
        </div>

        {/* ===== Right Abstract Tech Design ===== */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          {/* Main gradient blobs */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 rounded-full blur-3xl opacity-60 animate-pulse mix-blend-multiply"></div>
          <div className="absolute top-10 right-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-spin-slow"></div>
          <div className="absolute bottom-0 right-24 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-r from-green-300 via-blue-200 to-purple-400 rounded-full blur-2xl opacity-40 animate-ping-slow"></div>
          <div className="absolute top-20 left-20 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-bounce-slow"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 rounded-full blur-xl opacity-40 animate-pulse-slow"></div>

          {/* Tech shapes */}
          <div className="absolute top-16 right-32 w-6 h-6 bg-blue-500 rounded-sm opacity-80 animate-bounce-slow"></div>
          <div className="absolute top-28 left-32 w-8 h-8 bg-purple-500 rounded-sm opacity-70 animate-bounce-slow"></div>
          <div className="absolute bottom-24 right-40 w-4 h-4 bg-green-500 rounded-full opacity-80 animate-ping-slow"></div>
          <div className="absolute bottom-32 left-20 w-5 h-5 bg-pink-500 rounded-sm opacity-70 animate-bounce-slow"></div>
          <div className="absolute top-10 left-1/2 w-10 h-10 border border-blue-500 rounded-md opacity-60 animate-spin-slow"></div>
          <div className="absolute bottom-12 right-1/3 w-12 h-12 border border-purple-500 rounded-md opacity-50 animate-spin-slow"></div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
