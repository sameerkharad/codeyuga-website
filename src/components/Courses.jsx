import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const courses = [
  {
    title: "Artificial Intelligence",
    desc: "Master AI and Machine Learning — build intelligent models and applications for the future.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Stack Development (MERN)",
    desc: "Learn MongoDB, Express, React, and Node.js to become a full-fledged web developer.",
    img: "https://images.unsplash.com/photo-1581091215367-59ab6b75ba3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cybersecurity",
    desc: "Understand threats, protect networks, and secure systems from modern cyber attacks.",
    img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights using Python, Power BI, and SQL.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud & AWS",
    desc: "Get skilled in cloud infrastructure, AWS services, and DevOps workflows.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-300 opacity-30 blur-[150px] rounded-full -z-10"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Our Courses
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
          Learn cutting-edge technologies through structured, mentor-guided programs built for real-world success.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="relative group bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {course.desc}
                </p>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/50 rounded-3xl transition-all duration-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Courses;
