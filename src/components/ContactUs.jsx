import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import ContactForm from "./ContactForm"; // import your Web3Forms component

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12 z-10 relative">
        Get in Touch
      </h2>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start z-10">
        {/* Contact Form Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg border border-blue-100 shadow-xl rounded-2xl p-8 min-h-[450px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactForm /> {/* Web3Forms React component */}
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={logo}
            alt="CodeYuga Logo"
            className="w-36 h-36 object-contain drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <h3 className="text-2xl font-semibold text-gray-800">
            We’d love to hear from you!
          </h3>
          <p className="text-gray-600 max-w-sm leading-relaxed">
            Have a question, project, or idea? Let’s connect and create something amazing together.{" "}
            <span className="font-semibold text-blue-600">CodeYuga Tech</span> is ready to help you.
          </p>
          <div className="flex space-x-4 text-2xl text-blue-600">
            <a href="#" className="hover:text-blue-800 transition-all">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-blue-800 transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-800 transition-all">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
