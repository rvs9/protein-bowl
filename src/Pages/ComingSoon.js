import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-green-500">Protein Bowl</h1>
        </div>
      </header>

      <section className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Fresh, Healthy and Delicious
          </h2>
          <p className="text-gray-600">
            Stay tuned for a variety of Protein Meals and salads made with the
            finest ingredients.
          </p>

          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full">
            Signup for Updates
          </button>

          {/* "Coming Soon" message */}
          <p className="text-2xl font-semibold text-gray-700 mt-4">
            Coming Soon...
          </p>
        </div>
      </section>

      {/* Additional sections can be added here */}

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <p className="text-center">
            &copy; 2023 Protein Bowl. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
// robust-fox
// U8v05Zlq0s8PGnODyc
