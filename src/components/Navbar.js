"use client";
import React, { useState } from "react";
import Logo from "./Logo"; // Replace with your actual Logo component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    const phoneNumber = "919373609566"; // Replace with your WhatsApp business phone number
    const message = "Hello, I’m interested in your services 👋"; // Customize the message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

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
          {/* Navigation Items */}
          {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
            <li className="group" key={item}>
              <a href={`#${item.replace(" ", "")}`} className="text-stone-900 relative">
                {item}
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="hidden md:block">
        <button 
        onClick={handleClick}
        className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition duration-200">Book now</button>
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
        <div className="absolute top-0 left-0 w-full bg-stone-100 shadow-lg z-10">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black text-xl"
            aria-label="Close Menu"
          >
            &times; {/* You can replace this with an SVG icon if desired */}
          </button>

          <ul className="flex flex-col items-center gap-4 text-lg py-4">
            <li className="group">
    <a href="#Home" className="text-stone-900 relative">
      Home
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
  <li className="group">
    <a href="#Two" className="text-stone-900 relative">
      About Us
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
  <li className="group">
    <a href="#Services" className="text-stone-900 relative">
      Services
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
  <li className="group">
    <a href="#Projects" className="text-stone-900 relative">
      Projects
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
  <li className="group">
    <a href="#Contact" className="text-stone-900 relative">
      Contact Us
      <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
            <li>
            <button 
        onClick={handleClick}
        className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition duration-200">Book now</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
