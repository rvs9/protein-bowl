// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ExploreMenu from "../components/ExploreMenu";
import LoyaltyPass from "../components/LoyaltyPass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen bg-gray-100">
      <Carousel />

      {/* Main content section */}
      <section className="flex-grow flex items-center justify-center py-8 px-4 sm:py-16 sm:px-0">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Fresh, Healthy and Delicious
          </h2>
          <p className="text-gray-600">
            Stay tuned for a variety of Protein Meals and salads made with the
            finest ingredients.
          </p>

          <div className="mt-8 py-3">
            <Link
              to="/contact-us"
              className="mt-8 px-6 py-3 bg-green-700 text-white rounded-full"
            >
              Sign Up for Updates
            </Link>
          </div>
        </div>
      </section>

      {/* "Coming Soon" message */}
      <div className="bg-green-100 p-6 w-full mt-6 rounded-lg mb-6 text-center">
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 ">
          Launching Soon!
        </p>
      </div>

      <ExploreMenu />

      <LoyaltyPass />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;
