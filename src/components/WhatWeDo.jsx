import React from "react";

const services = [
  {
    title: "Training Programs",
    desc: "Hands-on, industry-ready training programs that help students turn concepts into real-world skills.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Internships",
    desc: "Gain practical exposure with our guided internships designed to make you job-ready and confident.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Development",
    desc: "From startups to enterprises — we build sleek, scalable, and modern web solutions that drive growth.",
    img: "https://images.unsplash.com/photo-1559027615-2b03f1a5a06c?auto=format&fit=crop&w=800&q=80",
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50"
    >
      {/* ===== Background Decorative Elements ===== */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-300 opacity-30 blur-[150px] rounded-full -z-10"></div>

      {/* ===== Section Header ===== */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          What We Do
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
          Empowering the next generation of tech professionals and businesses
          with real-world skills, innovation, and digital solutions.
        </p>
      </div>

      {/* ===== Services Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            {/* Background Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-6 text-left text-white z-10">
              <h3 className="text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200">{service.desc}</p>
              
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 group-hover:ring-4 ring-indigo-400/50 rounded-2xl transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
