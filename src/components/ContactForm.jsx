import { useState } from "react";
import { motion } from "framer-motion";
import supabase from "../supabaseClient.js";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const { error } = await supabase.from("contact_messages").insert([
      {
        name: name,
        email: email,
        message: message,
      },
    ]);

    if (error) {
      console.error(error);
      setResult("❌ Something went wrong. Try again.");
    } else {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="bg-white/90 backdrop-blur-md p-8 flex flex-col gap-6 max-w-lg mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
        Send Us a Message
      </h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-blue-300 p-3 rounded-3xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-blue-300 p-3 rounded-3xl"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="border border-blue-300 p-3 rounded-3xl"
        />
      </div>

      <motion.button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-3xl font-semibold"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Submit
      </motion.button>

      {result && (
        <p
          className={`text-center mt-3 ${
            result.includes("✅")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {result}
        </p>
      )}
    </motion.form>
  );
}
