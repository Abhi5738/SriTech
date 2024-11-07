// src/components/Navbar.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white px-5 sm:px-20 flex h-20 justify-between items-center shadow-md ">
      <div className="text-purple-700 text-3xl font-bold">SriTech</div>

      {/* Desktop Links */}
      <div className="md:flex items-center md:gap-10 gap-14 text-white hidden">
        <Link
          to="/"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          to="/courses"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
        >
          Courses
        </Link>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="absolute top-8 w-52 bg-white text-blue-600 shadow-lg rounded-sm border">
              <Link
                to="/internship"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 text-gray-700"
              >
                Training and Internship
              </Link>
              <Link
                to="/resume"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/mock-interview"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
              >
                Mock Interview
              </Link>
              <Link
                to="/referrals"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
              >
                Job Referrals
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
              >
                Career Guidance
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <i
          className={`${
            menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
          } text-2xl text-purple-700 transition duration-300 ease-in-out transform ${
            menuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        ></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-5 py-5">
          <Link
            to="/"
            className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Courses
          </Link>

          <button
            onClick={toggleDropdown}
            className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="text-blue-600 text-center">
              <Link
                to="/services/web-development"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-700 text-gray-700"
                onClick={toggleMenu}
              >
                Training and Internship
              </Link>
              <Link
                to="/services/app-development"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
                onClick={toggleMenu}
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/services/seo"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
                onClick={toggleMenu}
              >
                Mock Interview
              </Link>
              <Link
                to="/services/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
                onClick={toggleMenu}
              >
                Job Referrals
              </Link>
              <Link
                to="/services/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-purple-700"
                onClick={toggleMenu}
              >
                Career Guidance
              </Link>
            </div>
          )}

          <Link
            to="/contact"
            className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
