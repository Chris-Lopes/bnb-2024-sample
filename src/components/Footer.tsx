import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = (): JSX.Element => {
  return (
    <div id="contact" className="relative w-full bg-black text-center md:text-left text-gray-400 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 mt-6 md:mt-0">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">GDSC - CRCE</h3>
            <p>About</p>
            <p>Team</p>
            <p>Event</p>
            <p>Gallery</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">Help</h3>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <p>Problem Statement</p>
            <p>Regional Representatives</p>
            <p>Contact Regional Rep</p>
            <p>Feedback</p>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © Copyright 2024, All Rights Reserved by GDSC-CRCE
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              className="bg-slate-800 p-2 rounded-full hover:bg-blue-600"
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter className="w-4 h-4 text-white" />
            </a>
            <a
              className=" p-2 bg-slate-800 hover:bg-blue-600 rounded-full"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF className="w-4 h-4 text-white" />
            </a>
            <a
              className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full"
              href="https://www.instagram.com/gdsc_crce/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a
              className="bg-slate-800 p-2 hover:bg-blue-600 rounded-full"
              href="https://github.com/gdsc_crce/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
