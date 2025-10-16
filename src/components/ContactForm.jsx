// src/components/ContactForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "14af998f-08a0-4a2e-a39a-e6767e1da9db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("⚠️ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResult("❌ Server error. Please try again later.");
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="bg-white/90 backdrop-blur-md p-8 sm:p-10 flex flex-col gap-6 max-w-lg w-full mx-auto r"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-6 sm:mb-8">
        Send Us a Message
      </h3>

      <div className="flex flex-col gap-4 sm:gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-blue-300 bg-white/80 p-3 sm:p-4 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none shadow-md placeholder-gray-500 text-gray-800 text-base sm:text-lg transition-all w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-blue-300 bg-white/80 p-3 sm:p-4 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none shadow-md placeholder-gray-500 text-gray-800 text-base sm:text-lg transition-all w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="border border-blue-300 bg-white/80 p-3 sm:p-4 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none shadow-md placeholder-gray-500 text-gray-800 text-base sm:text-lg resize-none transition-all w-full sm:rows-6"
        />
      </div>

      <motion.button
        type="submit"
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-3 sm:py-4 mt-4 sm:mt-6 rounded-3xl font-semibold shadow-lg hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all text-base sm:text-lg w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Submit
      </motion.button>

      {result && (
        <motion.p
          className={`text-center text-sm font-medium mt-3 sm:mt-4 ${
            result.includes("✅")
              ? "text-green-600"
              : result.includes("⚠️")
              ? "text-yellow-600"
              : "text-red-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      )}
    </motion.form>
  );
}
