// src/components/LoyaltyProgram.js
import React from "react";
import { Link } from "react-router-dom";

const LoyaltyProgram = () => {
  return (
    <section className="bg-green-100 py-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Join Our Loyalty-Pass!
      </h2>
      <p className="text-gray-700 mb-8">
        Enjoy exclusive benefits and rewards with our loyalty program. Subscribe
        to our weekly or monthly plans and receive complimentary merchandise.
        Sign up today and become a valued member!
      </p>

      <div className="mt-8">
        <p className="text-gray-700 mb-4">
          Explore our merchandise and redeem your loyalty points for exciting
          products.
        </p>
        <Link
          to="/merchandise"
          className="text-green-700 font-bold px-6 py-3 inline-block underline hover:no-underline text-lg"
        >
          Shop Merchandise
        </Link>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
