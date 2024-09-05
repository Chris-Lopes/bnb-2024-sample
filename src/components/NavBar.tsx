'use client'

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LanguageDropdown } from "./LanguageDropdown";

export const NavBar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNav(false); // Scrolling down
    } else {
      setShowNav(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);

    // Determine active section on scroll
    const sections = ["home", "domains", "timeline", "prizes", "sponsors", "faq", "contact"];
    const offsets = sections.map((id) => document.getElementById(id)?.offsetTop || 0);
    
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

    sections.forEach((section, index) => {
      if (scrollPosition >= offsets[index] && (index === sections.length - 1 || scrollPosition < offsets[index + 1])) {
        setActiveSection(section);
      }
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation click

    // Smooth scroll to the section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
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
          <img className="w-24 h-auto" alt="Logo" src="/logo.png" />
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
            onClick={() => handleNavClick("home")}
            className={`font-bold transition-colors duration-200 ${
              activeSection === "home" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Home
          </a>
          <a
            href="#domains"
            onClick={() => handleNavClick("domains")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "domains" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Domains
          </a>
          <a
            href="#timeline"
            onClick={() => handleNavClick("timeline")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "timeline" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Timeline
          </a>
          <a
            href="#prizes"
            onClick={() => handleNavClick("prizes")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "prizes" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Prizes
          </a>
          <a
            href="#sponsors"
            onClick={() => handleNavClick("sponsors")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "sponsors" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Sponsors
          </a>
          <a
            href="#faq"
            onClick={() => handleNavClick("faq")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "faq" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className={`font-medium transition-colors duration-200 ${
              activeSection === "contact" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
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

        <button className=" md:hidden bg-slate-200 text-black cursor-pointer font-medium px-4 py-2 rounded-xl hover:bg-slate-300 transition-colors duration-200">
            Register
          </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-start pt-16 space-y-6 z-40">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <a
            href="#"
            onClick={() => handleNavClick("home")}
            className={`font-bold text-xl transition-colors duration-200 ${
              activeSection === "home" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Home
          </a>
          <a
            href="#domains"
            onClick={() => handleNavClick("domains")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "domains" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Domains
          </a>
          <a
            href="#timeline"
            onClick={() => handleNavClick("timeline")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "timeline" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Timeline
          </a>
          <a
            href="#prizes"
            onClick={() => handleNavClick("prizes")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "prizes" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Prizes
          </a>
          <a
            href="#sponsors"
            onClick={() => handleNavClick("sponsors")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "sponsors" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Sponsors
          </a>
          <a
            href="#faq"
            onClick={() => handleNavClick("faq")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "faq" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className={`font-medium text-lg transition-colors duration-200 ${
              activeSection === "contact" ? "text-white" : "text-gray-400"
            } hover:text-gray-300`}
          >
            Contact Us
          </a>
          <LanguageDropdown />
        </div>
      )}
       
    </div>
  );
};
