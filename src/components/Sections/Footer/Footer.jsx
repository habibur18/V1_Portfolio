import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8 px-2 rounded-lg">
      <div className="container mx-auto">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Social Links */}
          <div className="copyright">© {new Date().getFullYear()} Habibur Rahman</div>
          <div className="social-links flex items-center space-x-4">
            {/* Social Media Icons */}
            {/* <a
              className="text-[2rem]"
              href="https://www.facebook.com/RandomHabibur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="text-[2rem]"
              href="https://www.instagram.com/amarhabibur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="text-[2rem]"
              href="https://www.threads.net/@amarhabibur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-threads"></i>
            </a>
            <a
              className="text-[2rem]"
              href="https://twitter.com/amarhabibur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a> */}
            <a className="text-[2rem]" href="https://www.linkedin.com/in/habibur18/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="text-[2rem]" href="https://github.com/habibur18" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a className="text-[2rem]" href="mailto:habiburwebdev@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row w-full md:w-auto justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <ScrollLink to="techstack" spy={true} smooth={true} offset={-70} duration={500} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium cursor-pointer">
              Tech Stack
            </ScrollLink>
            <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium cursor-pointer">
              Projects
            </ScrollLink>
            <ScrollLink to="intro" spy={true} smooth={true} offset={-70} duration={500} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium cursor-pointer">
              Intro
            </ScrollLink>
            <ScrollLink to="aboutMe" spy={true} smooth={true} offset={-70} duration={500} className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium cursor-pointer">
              About Me
            </ScrollLink>
          </nav>
        </div>
        {/* Skills */}
        <div className="skills mt-10 mb-20 p-2 text-center lg:text-left">
          <p className="text-lg font-semibold mb-2">Skills</p>
          <p>I'm a front-end developer familiar with HTML, CSS, JavaScript, Tailwind CSS, and React.js.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
