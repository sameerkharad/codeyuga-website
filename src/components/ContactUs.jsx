import React, { useState } from "react";
import supabase from "../supabaseClient";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const { error } = await supabase.from("contact_messages").insert([
      { name, email, message },
    ]);

    if (error) {
      setError("Something went wrong. Try again!");
    } else {
      setSuccess("Message sent successfully!");
      e.target.reset();
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded-lg"
        required
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        className="w-full p-3 border rounded-lg"
        required
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default ContactForm;
