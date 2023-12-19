// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// SVG for the burger menu icon
const BurgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

// SVG for the burger Login icon
const HumanIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="green"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 23.5C20 24.0523 20.4477 24.5 21 24.5C21.5523 24.5 22 24.0523 22 23.5H20ZM14.9627 14.6615L14.5594 15.5766C14.5659 15.5794 14.5724 15.5822 14.5789 15.5849L14.9627 14.6615ZM14.2063 11.0865L14.712 11.9492C14.7583 11.9221 14.8024 11.8912 14.8438 11.8569L14.2063 11.0865ZM7.79558 11.0865L8.43487 10.3175L8.43189 10.3151L7.79558 11.0865ZM7.03734 14.6615L7.42111 15.5849C7.42764 15.5822 7.43414 15.5794 7.44061 15.5766L7.03734 14.6615ZM0 23.5C0 24.0523 0.447715 24.5 1 24.5C1.55228 24.5 2 24.0523 2 23.5H0ZM22 23.5C22 19.1047 19.241 15.3566 15.3464 13.7381L14.5789 15.5849C17.7867 16.918 20 19.9753 20 23.5H22ZM15.3659 13.7464C15.0683 13.6153 14.7645 13.4074 14.5492 13.175C14.3254 12.9337 14.2804 12.7612 14.2804 12.6852H12.2804C12.2804 13.4525 12.6688 14.0885 13.0824 14.5346C13.5043 14.9898 14.0416 15.3484 14.5594 15.5766L15.3659 13.7464ZM14.2804 12.6852C14.2804 12.4688 14.3714 12.2924 14.4998 12.1439C14.5635 12.0703 14.6282 12.014 14.6748 11.9777C14.6975 11.9601 14.7142 11.9487 14.7218 11.9436C14.7255 11.9411 14.7268 11.9403 14.7254 11.9412C14.7247 11.9416 14.7232 11.9425 14.721 11.9439C14.7199 11.9445 14.7186 11.9453 14.7171 11.9462C14.7163 11.9467 14.7155 11.9471 14.7147 11.9476C14.7143 11.9479 14.7138 11.9482 14.7134 11.9484C14.7131 11.9486 14.7128 11.9488 14.7127 11.9488C14.7123 11.949 14.712 11.9492 14.2063 11.0865C13.7007 10.2238 13.7003 10.224 13.6999 10.2242C13.6998 10.2243 13.6994 10.2245 13.6992 10.2246C13.6987 10.2249 13.6982 10.2252 13.6976 10.2256C13.6966 10.2262 13.6954 10.2269 13.6942 10.2276C13.6918 10.229 13.6892 10.2306 13.6863 10.2323C13.6806 10.2358 13.674 10.2398 13.6665 10.2445C13.6514 10.2539 13.6329 10.2658 13.6113 10.2802C13.5683 10.3089 13.5126 10.3481 13.4485 10.3978C13.3215 10.4964 13.1547 10.6417 12.987 10.8357C12.6524 11.2226 12.2804 11.8456 12.2804 12.6852H14.2804ZM14.8438 11.8569C16.1462 10.7792 17.5496 8.96429 17.5496 6.80383H15.5496C15.5496 8.10838 14.6593 9.41375 13.5688 10.3161L14.8438 11.8569ZM17.5496 6.80383C17.5496 3.26821 14.5014 0.5 10.96 0.5V2.5C13.5073 2.5 15.5496 4.48012 15.5496 6.80383H17.5496ZM10.96 0.5C7.40155 0.5 4.45037 3.28625 4.45037 6.80383H6.45037C6.45037 4.46209 8.43347 2.5 10.96 2.5V0.5ZM4.45037 6.80383C4.45037 8.96401 5.85146 10.7792 7.15927 11.8579L8.43189 10.3151C7.33924 9.4138 6.45037 8.10866 6.45037 6.80383H4.45037ZM7.79558 11.0865C7.15629 11.8555 7.15609 11.8553 7.1559 11.8551C7.15584 11.8551 7.15565 11.8549 7.15553 11.8548C7.15529 11.8546 7.15507 11.8544 7.15485 11.8543C7.15443 11.8539 7.15406 11.8536 7.15373 11.8533C7.15309 11.8528 7.15266 11.8524 7.15242 11.8522C7.15195 11.8518 7.15227 11.8521 7.15334 11.853C7.15549 11.8549 7.16056 11.8593 7.16815 11.8661C7.1834 11.8797 7.2083 11.9026 7.2396 11.9333C7.30338 11.9959 7.38746 12.0849 7.46937 12.1898C7.66089 12.4351 7.71957 12.6119 7.71957 12.6852H9.71957C9.71957 11.9279 9.31624 11.3054 9.04578 10.959C8.89669 10.768 8.74977 10.6131 8.6403 10.5057C8.58499 10.4514 8.5377 10.4078 8.50242 10.3762C8.48474 10.3604 8.46996 10.3474 8.45857 10.3376C8.45287 10.3327 8.44801 10.3286 8.44404 10.3252C8.44206 10.3236 8.4403 10.3221 8.43876 10.3208C8.438 10.3201 8.43729 10.3196 8.43664 10.319C8.43632 10.3187 8.43601 10.3185 8.43571 10.3182C8.43556 10.3181 8.43535 10.3179 8.43528 10.3179C8.43507 10.3177 8.43487 10.3175 7.79558 11.0865ZM7.71957 12.6852C7.71957 12.7612 7.67455 12.9337 7.45083 13.175C7.23546 13.4074 6.93167 13.6153 6.63408 13.7464L7.44061 15.5766C7.9584 15.3484 8.49573 14.9898 8.91762 14.5346C9.33116 14.0885 9.71957 13.4525 9.71957 12.6852H7.71957ZM6.65357 13.7381C2.75903 15.3566 0 19.1047 0 23.5H2C2 19.9753 4.21335 16.918 7.42111 15.5849L6.65357 13.7381Z"
      stroke="green"
    ></path>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NavLink to="/our-menu">Our Menu</NavLink>
          <NavLink to="/our-mission">Our Mission</NavLink>
          <NavLink to="/merchandise">Shop</NavLink>
        </div>
        <Link
          to="/"
          className="text-3xl font-bold text-green-700 font-serif mr-12"
        >
          Protein Bowl
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/login">
            <HumanIcon />
          </NavLink>
          <NavLink to="/login">Sign In</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          {/* Add more links for other pages */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl p-2 text-green-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <BurgerIcon />
          )}
        </button>
        <Link to="/" className="text-3xl font-bold text-green-700 font-serif">
          Protein Bowl
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/login">
            <HumanIcon />
          </NavLink>
          {/* ... (other links) */}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      {isMobileMenuOpen && (
        <div className="md:hidden  flex flex-col items-start space-y-1 my-4 ">
          <MobileNavLink to="/our-menu" onClick={toggleMobileMenu}>
            Our Menu
          </MobileNavLink>
          <MobileNavLink to="/our-mission" onClick={toggleMobileMenu}>
            Our Mission
          </MobileNavLink>
          <MobileNavLink to="/merchandise" onClick={toggleMobileMenu}>
            Merchandise
          </MobileNavLink>
          <MobileNavLink to="/contact-us" onClick={toggleMobileMenu}>
            Contact Us
          </MobileNavLink>
          {/* Add more links for other pages */}
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-lg font-bold text-gray-700 hover:text-green-700"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-lg font-bold text-gray-900 hover:text-green-700 block py-2 px-2 hover:bg-gray-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
