// src/components/Merchandise.js
import React from "react";
import tshirtImage from "../images/t-shirt1.jpg";
import shakerImage from "../images/protein-shaker.jpg";
import bagImage from "../images/bag.png";
import mugImage from "../images/mug.png";
import notebookImage from "../images/notebook.png";

const merchandiseItems = [
  {
    id: 1,
    name: "T-Shirt",
    image: tshirtImage,
    description: " T-shirt with our brand logo.",
    price: 599,
  },
  {
    id: 2,
    name: "Protein Shaker",
    image: shakerImage,
    description: "High-quality protein shaker for your post-workout.",
    price: 999,
  },
  {
    id: 3,
    name: "Bag",
    image: bagImage,
    description: "Aesthetic PB Bag to carry your essentials.",
    price: 699,
  },
  {
    id: 4,
    name: "Mug",
    image: mugImage,
    description: "Classic ceramic mug and bottle featuring our brand logo.",
    price: 499,
  },
  {
    id: 5,
    name: "Notebook",
    image: notebookImage,
    description: "notebook for jotting down your goals.",
    price: 199,
  },
  // Add more merchandise items as needed
];

const subscriptionOffer = {
  title: "Loyalty Program!",
  description:
    "Subscribe to our weekly or monthly plans and receive complimentary merchandise.",
};

const Merchandise = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Merchandise</h2>

      {/* Subscription Offer Section */}
      <div className="bg-green-100 p-4 rounded-lg mb-6 text-center">
        <h3 className="text-lg font-bold mb-2">{subscriptionOffer.title}</h3>
        <p className="text-gray-600">{subscriptionOffer.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {merchandiseItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover mb-4 rounded-t-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-green-500 font-bold">
                Price: {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
