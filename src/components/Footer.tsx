import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <div
      id="contact"
      className="relative w-full bg-black text-center md:text-left text-gray-400 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 mt-6 md:mt-0 text-gray-400">
          <div className="space-y-3 flex-col flex ">
            <h3 className="text-white font-bold mb-3">GDSC - CRCE</h3>
            <a
              href="https://gdsc-crce.vercel.app/#home"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="https://gdsc-crce.vercel.app/#events"
              className="hover:text-white transition-colors duration-300"
            >
              Event
            </a>
            <a
              href="https://gdsc-crce.vercel.app/#team"
              className="hover:text-white transition-colors duration-300"
            >
              Team
            </a>
            <p className="hover:text-white transition-colors duration-300">
              Gallery
            </p>
          </div>
          <div className="space-y-3 flex flex-col">
            <h3 className="text-white font-bold mb-3">Resources</h3>
            <p className="hover:text-white transition-colors duration-300">
              Problem Statements
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Regional Representatives
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Contact Regional Rep
            </p>
            <p className="hover:text-white transition-colors duration-300">
              Feedback
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developers.google.com/community-guidelines"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
            >
              Google Community Guidelines
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <Link
            href="https://gdsc-crce.vercel.app/"
            target="_blank"
            className="group inline-flex items-center justify-center gap-2"
          >
            <p className="text-sm text-gray-500 group-hover:underline">
              Made by GDSC Fr.CRCE 2024
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.05em"
              height="1em"
              viewBox="0 0 256 125"
              className="group-hover:hidden"
            >
              <path
                fill="#77767b"
                d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"
              />
              <path
                fill="#77767b"
                d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"
              />
              <path
                fill="#77767b"
                d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"
              />
              <path
                fill="#77767b"
                d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.05em"
              height="1em"
              viewBox="0 0 256 125"
              className="hidden group-hover:block"
            >
              <path
                fill="#fabc05"
                d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"
              />
              <path
                fill="#109d58"
                d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"
              />
              <path
                fill="#e94436"
                d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"
              />
              <path
                fill="#4385f3"
                d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"
              />
            </svg>
          </Link>
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
