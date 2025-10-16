import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

const images = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-10">
        
        {/* Left Side - Image Slider */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-white scale-125" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Induction Program
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to our comprehensive induction program! This initiative helps
            new members understand our culture, processes, and tools. It’s designed
            to ensure a smooth transition into our environment through a mix of
            learning, collaboration, and engagement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through interactive sessions, team introductions, and real-world
            insights, participants gain hands-on experience and confidence. Our
            goal is to empower every new member to contribute effectively from day
            one and feel like a valued part of our growing family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
