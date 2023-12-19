// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isBurgerMenuOpen }) => {
  const navClass = isBurgerMenuOpen
    ? "flex flex-col space-y-4"
    : "hidden lg:flex space-x-4";

  return (
    <nav className={navClass}>
      <Link to="/our-menu">Our Menu</Link>
      <Link to="/our-mission">Our Mission</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
