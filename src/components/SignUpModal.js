import React, { useState } from "react";

const SignUpModal = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to a server)
    console.log("Email submitted:", email);
    // Show a confirmation message or redirect to a thank-you page
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up for Updates</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
