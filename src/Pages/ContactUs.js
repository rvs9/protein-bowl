// src/components/ContactUs.js
import React, { useState } from "react";
import compLogo from "../images/login.webp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server, show a confirmation message)
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 mt-16 sm:px-6 lg:my-20 lg:px-8 py-4">
      <img className="mx-auto" src={compLogo} alt="funny computer logo" />
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-gray-600 mb-6 text-center">
        Have questions or suggestions? Feel free to reach out to us!
      </p>
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 sm:w-full lg:w-2/3 mx-auto"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white py-2 px-10 rounded-full hover:bg-green-600 focus:outline-none block mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
