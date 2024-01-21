import React, { useState } from "react";
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
    <nav className={`text-white p-10 ${isMenuOpen ? "flex flex-col" : "flex transition-all duration-300 ease-in-out"}`}>
      <div className={`flex flex-row md:flex-row justify-between items-center md:items-stretch ${isMenuOpen ? "" : "flex-grow"}`}>
        <RouterLink to="/" className="text-2xl font-bold cursor-pointer">
          Front-End Developer
        </RouterLink>

        {/* Hamburger icon */}
        <div className="cursor-pointer text-5xl md:hidden z-50" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
      </div>
      {/* Navigation links */}
      <div className={`${isMenuOpen ? "flex flex-col bg-blue-800 bg-opacity-25 rounded-xl w-full" : "hidden"} md:flex gap-8 text-3xl justify-end md:justify-start items-center transition-all duration-300 ease-in-out`}>
        <ScrollLink to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
          <ul className="cursor-pointer hover:bg-gradient-to-r from-pink-500 to-purple-500 [&>*]:hover:skew-x-[10deg] border-green-600 hover:border-green-400 group flex-1 -skew-x-[30deg] transform border transition duration-300 ease-in-out" onClick={() => handleLinkClick("aboutMe")}>
            <li className=" m-4 duration-300 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
              <b className="block text-lg transition duration-300 ease-in-out hover:text-white  hover:after:content-[Discover More] after:opacity-0 after:hover:opacity-100">About Me</b>
            </li>
          </ul>
        </ScrollLink>
        <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
          <ul className="cursor-pointer hover:bg-gradient-to-r from-pink-500 to-purple-500 [&>*]:hover:skew-x-[10deg] border-green-600 hover:border-green-400 group flex-1 -skew-x-[30deg] transform border transition duration-300 ease-in-out" onClick={() => handleLinkClick("projects")}>
            <li className=" m-4 duration-300 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
              <b className="block text-lg transition duration-300 ease-in-out hover:text-white  hover:after:content-[Discover More] after:opacity-0 after:hover:opacity-100">Projects</b>
            </li>
          </ul>
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <ul className="cursor-pointer hover:bg-gradient-to-r from-pink-500 to-purple-500 [&>*]:hover:skew-x-[10deg] border-green-600 hover:border-green-400 group flex-1 -skew-x-[30deg] transform border transition duration-300 ease-in-out" onClick={() => handleLinkClick("contact")}>
            <li className=" m-4 duration-300 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
              <b className="block text-lg transition duration-300 ease-in-out hover:text-white  hover:after:content-[Discover More] after:opacity-0 after:hover:opacity-100">Contact</b>
            </li>
          </ul>
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
