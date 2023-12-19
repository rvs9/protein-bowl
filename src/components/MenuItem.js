// src/components/MenuItem.js
import React from "react";

const MenuItem = ({ name, image, description, nutritionInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="bg-gray-300">
        <img
          src={image}
          alt={name}
          className="w-full  h-50 object-cover mb-4"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between text-sm text-gray-700">
          <div>
            <p>Calories: {nutritionInfo.calories}g</p>
            <p>Protein: {nutritionInfo.protein}g</p>
          </div>
          <div>
            <p>Carbs: {nutritionInfo.carbs}g</p>
            <p>Fat: {nutritionInfo.fat}g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
