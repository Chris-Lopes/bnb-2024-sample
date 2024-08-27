'use client'
import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

export const NavBar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNav(true);
    } else {
      // Scrolling up
      setShowNav(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full text-white py-4 bg-transparent transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-24 h-auto"
            alt="Logo"
            src="logo.svg"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="font-bold">
            Home
          </a>
          <a
            href="#"
            className="font-medium text-gray-400">
            About
          </a>
          <a
            href="#"
            className="font-medium text-gray-400">
            Prizes
          </a>
          <a
            href="#"
            className="font-medium text-gray-400">
            FAQ
          </a>
          <a
            href="#"
            className="font-medium text-gray-400">
            Sponsors
          </a>
          <a
            href="#"
            className="font-medium text-gray-400">
            Contact Us
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaGlobe />
            <span className="font-bold">EN</span>
          </div>
          <button className="bg-slate-200 text-black font-medium px-4 py-2 rounded-xl">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};
