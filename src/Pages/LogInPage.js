// src/components/ContactUs.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import compLogo from "../images/login.webp";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    alert("Thank You for registration!");

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 my-12 lg:my-24 lg:px-8 py-8">
      <img className="mx-auto" src={compLogo} alt="funny computer logo" />
      <h2 className="text-4xl font-bold mb-4  text-center">SIGN IN</h2>
      <div className="mt-4">
        <p className="text-gray-600  mb-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 font-bold underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* LogIn Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 sm:w-full lg:w-2/3 mx-auto"
      >
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <p>
          <Link
            to="/forgot-password"
            className="text-green-700 text-center font-bold underline"
          >
            Forgot Password?
          </Link>
        </p>

        <button
          type="submit"
          className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none block mx-auto"
        >
          Let's Do This
        </button>
      </form>
    </div>
  );
};

export default LogIn;
