"use client";
import React, { useState } from "react";
import Logo from "./Logo"; // Replace with your actual Logo component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-stone-100 flex justify-between items-center md:px-6 py-4">
      {/* Logo Section */}
      <div>
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 text-xl">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact us</li>
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="hidden md:block">
        <h1 className="bg-blue-300 font-semibold text-stone-100 px-4 py-2 rounded-lg">Book now</h1>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <div className="space-y-2">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-stone-100 shadow-lg z-10">
          <ul className="flex flex-col items-center gap-4 text-lg py-4">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact us</li>
            <li>
              <h1 className="bg-blue-300 text-stone-100 px-4 py-2 rounded-lg">Book now</h1>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
