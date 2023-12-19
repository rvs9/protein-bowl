// src/components/ContactUs.js
import React, { useState } from "react";
import compLogo from "../images/login.webp";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    alert("password reset link sent to your email");

    setFormData({
      email: "",
    });
  };

  return (
    <div className="container mx-auto px-4 my-16 sm:px-6 lg:px-8 lg:my-48 py-6">
      <img className="mx-auto" src={compLogo} alt="funny computer logo" />
      <h2 className="text-4xl font-bold mb-4 text-center">FORGOT PASSWORD?</h2>
      <div className="mt-4">
        <p className="text-gray-600 mb-6 text-center">
          Don't worry, it happens to the best of us.
        </p>
      </div>

      {/* LogIn Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 sm:w-full lg:w-2/3 mx-auto"
      >
        <div>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            placeholder="Enter your email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gray-500 shadow-lg text-white py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none block mx-auto"
        >
          EMAIL ME A RECOVERY LINK
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
