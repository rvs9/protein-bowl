// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 lg:py-12">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center mb-4">
          &copy; 2023 Protein Bowl. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-white">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          {/* <p>Follow us on:</p> */}
          {/* Add your social media icons or links here */}
          {/* For example: <SocialMediaIcons /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
