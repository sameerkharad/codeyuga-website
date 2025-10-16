import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">Our Projects</h2>
      <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Here are some of the amazing projects and websites built by our team for clients and learning platforms.
      </p>
      {/* Later you can add grid of project images/cards here */}
    </section>
  );
};

export default Projects;
