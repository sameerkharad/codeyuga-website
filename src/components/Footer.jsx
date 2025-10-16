import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="CodeYuga Logo" className="w-12 h-12" />
            <h2 className="text-xl font-semibold text-white">CodeYuga Tech</h2>
          </div>
          <p className="text-sm text-gray-400">
            Empowering innovation through technology, education, and digital transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Internships</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Training Programs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">AI & ML Solutions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
<a href="#" className="hover:text-blue-400 transition">
  <FaLinkedin />
</a>          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} <span className="text-white font-semibold">CodeYuga Tech</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
