// src/components/MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <section className="flex-grow flex items-center justify-center py-8 px-4 sm:py-16 sm:px-0">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Fresh, Healthy and Delicious
        </h2>
        <p className="text-gray-600">
          Stay tuned for a variety of Protein Meals and salads made with the
          finest ingredients.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-700 text-white rounded-full">
          Signup for Updates
        </button>
        {/* "Coming Soon" message */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-4">
          Coming Soon...
        </p>
      </div>
    </section>
  );
};

export default MainContent;
