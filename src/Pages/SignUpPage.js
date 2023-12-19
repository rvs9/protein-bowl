// src/components/ContactUs.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import compLogo from "../images/login.webp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstNmae: "",
    lastName: "",
    phoneNumber: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthDay: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:my-16 my-20 py-2">
      <img className="mx-auto" src={compLogo} alt="funny computer logo" />
      <h2 className="text-4xl font-bold mb-4 text-center">
        CREATE YOUR PROFILE
      </h2>
      <div className="mt-4">
        <p className="text-gray-600 mb-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold text-green-700">
            Sign in
          </Link>
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
            className="w-full px-4 py-4 border rounded-full  focus:outline-none focus:border-green-500"
            placeholder="Email ddress*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name*"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name*"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number*"
            className="w-full px-4 py-4 border rounded-full focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="birthDay"
            value={formData.birthDay}
            onChange={handleChange}
            placeholder="Birthday(DD/MM)"
            className="w-full px-4 py-4 border rounded-full  focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password*"
            className="w-full px-4 py-4 border rounded-full  focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password*"
            className="w-full px-4 py-4 border rounded-full  focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white shadow-lg py-2 px-6 rounded-full  hover:bg-green-600 focus:outline-none block mx-auto"
        >
          Let's Do This
        </button>
      </form>
    </div>
  );
};

export default SignUp;
