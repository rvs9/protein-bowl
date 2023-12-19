// src/components/OurMission.js
import React from "react";
import missionImage from "../images/mission-image.webp";

const OurMission = () => {
  return (
    <div className="container mx-auto py-28 md:py-28 px-4 max-w-screen-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
        Our Mission
      </h2>

      {/* Mission Statement */}
      <section className="mb-6 text-center">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          At Protein Bowl, we aim to democratize nutrition by offering fresh,
          delicious, and healthy meals accessible and affordable for everyone.
          We're committed to serving healthy, protein-rich food from the finest
          ingredients.
        </p>
      </section>

      {/* Resized Mission Image Section */}
      <section className="mb-8">
        <img
          src={missionImage}
          alt="Our Mission"
          className="w-full h-auto mx-auto rounded-lg shadow-md"
        />
      </section>

      {/* Core Values Section */}
      <section className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Our Core Values
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 leading-relaxed">
          <li className="mb-2">
            <span className="text-green-500 font-bold mr-2">Freshness:</span>
            We source the finest and freshest ingredients.
          </li>
          <li className="mb-2">
            <span className="text-green-500 font-bold mr-2">Variety:</span>
            Explore a diverse menu with options for every palate.
          </li>
          <li className="mb-2">
            <span className="text-green-500 font-bold mr-2">Nutrition:</span>
            Our meals are crafted to provide essential nutrients.
          </li>
          <li>
            <span className="text-green-500 font-bold mr-2">
              Sustainability:
            </span>
            We are committed to sustainable and eco-friendly practices.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Ready to experience the Protein Bowl difference? Visit us today and
          embark on a journey of flavors and health.
        </p>
        <button className="px-6 md:px-8 py-2 md:py-3 bg-green-500 text-white rounded-full">
          Visit Us
        </button>
      </section>
    </div>
  );
};

export default OurMission;
