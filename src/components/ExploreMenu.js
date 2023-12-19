import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import exploreMenuImage1 from "../images/Shroomami.jpg";
import exploreMenuImage2 from "../images/HummusCrunch.jpg";
import exploreMenuImage3 from "../images/crispy-chicken-ranch-wrap.webp";

import exploreMenuM1 from "../images/Shroomami.jpg";
import exploreMenuM2 from "../images/HummusCrunch.jpg";
import exploreMenuM3 from "../images/crispy-chicken-ranch-wrap.webp";

const menuCategories = [
  {
    id: 1,
    name: "Protein Bowls",
    image: exploreMenuImage1,
    mobileImage: exploreMenuM1,
  },
  {
    id: 2,
    name: "Salads",
    image: exploreMenuImage2,
    mobileImage: exploreMenuM2,
  },
  {
    id: 3,
    name: "Wraps",
    image: exploreMenuImage3,
    mobileImage: exploreMenuM3,
  },
  // Add more categories as needed
];

const ExploreMenu = () => {
  const [rotation, setRotation] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const requestIdRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - prevScrollY;

    setRotation((prevRotation) => prevRotation + scrollDelta * 0.05);
    setPrevScrollY(scrollY);
  };

  const animateRotation = () => {
    requestIdRef.current = requestAnimationFrame(() => {
      handleScroll();
      animateRotation();
    });
  };

  useEffect(() => {
    animateRotation();

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [prevScrollY]);

  const resetRotation = () => {
    setRotation(0);
    setPrevScrollY(0);
  };

  const stopAnimation = () => {
    if (requestIdRef.current) {
      cancelAnimationFrame(requestIdRef.current);
    }
  };

  const getRotationStyle = () => {
    return {
      transform: `rotate(${rotation}deg)`,
      transition: "transform 0.1s",
    };
  };

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore Our Menu</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        onMouseEnter={stopAnimation}
        onMouseLeave={resetRotation}
      >
        {menuCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg mb-4 sm:w-full lg:w-2/3 mx-auto "
          >
            <img
              src={
                window.innerWidth > 768 ? category.image : category.mobileImage
              }
              alt={category.name}
              className="w-full h-58 sm:h-58 object-cover mb-4 rounded-full mx-auto"
              style={getRotationStyle()}
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/our-menu"
        className="mt-8 px-6 py-3 bg-green-700 text-white rounded-full"
      >
        View Full Menu
      </Link>
    </section>
  );
};

export default ExploreMenu;
