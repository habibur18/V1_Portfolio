import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    if (isMenuOpen) {
      setMenuOpen(false);

      // Manually update the URL
      const url = `#${sectionId}`;
      window.history.pushState(null, null, url);

      // Scroll to the section
      scroll.scrollTo(document.getElementById(sectionId).offsetTop - 70, {
        smooth: true,
      });
    }
  };

  return (
    <nav
      className={`text-white p-10 ${
        isMenuOpen
          ? "flex flex-col"
          : "flex transition-all duration-300 ease-in-out"
      }`}
    >
      <div
        className={`flex flex-row md:flex-row justify-between items-center md:items-stretch ${
          isMenuOpen ? "" : "flex-grow"
        }`}
      >
        <RouterLink to="/" className="text-2xl font-bold cursor-pointer">
          A Developer
        </RouterLink>

        {/* Hamburger icon */}
        <div className="cursor-pointer text-5xl md:hidden" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
      </div>
      {/* Navigation links */}
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col bg-blue-800 bg-opacity-25 rounded-xl w-full"
            : "hidden"
        } md:flex gap-8 text-3xl justify-end md:justify-start items-center transition-all duration-300 ease-in-out`}
      >
        <ScrollLink
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${
            isMenuOpen
              ? "bg-gray-600 w-full text-center mx-auto rounded-xl"
              : "hidden"
          }cursor-pointer transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text`}
          onClick={() => handleLinkClick("about")}
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${
            isMenuOpen
              ? "bg-gray-600 w-full text-center mx-auto rounded-xl"
              : ""
          }cursor-pointer transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text `}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${
            isMenuOpen
              ? "bg-gray-600 w-full text-center mx-auto rounded-xl"
              : ""
          }cursor-pointer transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-blue-500 via-green-700 to-indigo-300 inline-block text-transparent bg-clip-text`}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
