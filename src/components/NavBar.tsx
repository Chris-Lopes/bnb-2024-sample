"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LanguageDropdown } from "./LanguageDropdown";

export const NavBar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNav(false); // Scrolling down
    } else {
      setShowNav(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full text-white py-4 bg-opacity-60 bg-black transition-transform duration-300 z-50 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-24 h-auto" alt="Logo" src="logo.svg" />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="font-bold hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#domains"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Domains
          </a>
          <a
            href="#timeline"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Timeline
          </a>
          <a
            href="#prizes"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Prizes
          </a>

          <a
            href="#sponsors"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Sponsors
          </a>
          <a
            href="#faq"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <LanguageDropdown />
          <button className="bg-slate-200 text-black cursor-pointer font-medium px-4 py-2 rounded-xl hover:bg-slate-300 transition-colors duration-200">
            Register
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-start pt-16 space-y-6 z-40 ease-in-out transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <a
            href="#"
            className="font-bold text-white text-xl hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#domains"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            Domains
          </a>
          <a
            href="#timeline"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            Timeline
          </a>
          <a
            href="#prizes"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            Prizes
          </a>
          <a
            href="#sponsors"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            Sponsors
          </a>
          <a
            href="#faq"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-400 text-lg hover:text-gray-300 transition-colors duration-200"
          >
            Contact Us
          </a>
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-slate-200 text-black cursor-pointer font-medium px-6 py-3 rounded-xl hover:bg-slate-300 transition-colors duration-200">
              Register
            </button>
            <LanguageDropdown />
          </div>
        </div>
      )}
    </div>
  );
};
