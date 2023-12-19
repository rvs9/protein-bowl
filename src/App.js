// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import OurMenu from "./Pages/OurMenu";
import OurMission from "./Pages/OurMission";
import ContactUs from "./Pages/ContactUs";
import Merchandise from "./Pages/Merchandise";
import Services from "./Pages/Services";
import LogIn from "./Pages/LogInPage";
import SignUp from "./Pages/SignUpPage";
import ForgotPassword from "./Pages/ForgotPassword";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* Home page */}
        <Route exact path="/" element={<Home />} />

        {/* Menu page */}
        <Route path="/our-menu" element={<OurMenu />} />

        {/* Mission page */}
        <Route path="/our-mission" element={<OurMission />} />

        {/* ContactUs page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Services page */}
        <Route path="/services" element={<Services />} />

        {/*Merchandise page */}
        <Route path="/merchandise" element={<Merchandise />} />

        {/* LogIn Page */}
        <Route path="/login" element={<LogIn />} />

        {/* Sign Up Page */}
        <Route path="/register" element={<SignUp />} />

        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Add routes for other pages */}

        {/* <Route path="/about-us" element={<AboutUs />} />
            ... */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
