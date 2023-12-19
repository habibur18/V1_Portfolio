import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFileDownload,
  faGamepad,
  faGraduationCap,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import resume from "../../../public/Habibur-Rahman.pdf";
const AboutMe = () => {
  return (
    <div id="aboutMe">
      <h1 className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span
          style={{ lineHeight: "80px" }}
          className="relative text-white text-4xl border-l-8 border-purple-500 pl-4 pr-8 my-2 mx-5"
        >
          About Me
        </span>
      </h1>
      <div id="resume" className="my-8 text-white mx-16">
        <h1 className="text-3xl font-bold mb-6">My Resume</h1>
        <div className="flex items-center space-x-4">
          <a
            href={resume}
            download="habiburResume"
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(to right, #3498db, #2980b9)",
            }}
          >
            <FontAwesomeIcon icon={faFileDownload} className="text-xl" />
            <span className="text-lg font-semibold">Download Resume</span>
          </a>
          <a
            href="https://www.docdroid.net/1bGS5X0/habibur-rahman-pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faFileDownload} className="text-xl" />
            <span className="text-lg font-semibold">View Online</span>
          </a>
        </div>
      </div>

      <div className="max-w-3xl p-6 mx-auto text-xl text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-tl-3xl rounded-br-lg  shadow-3xl">
        <p>
          I love learning new technologies. Currently, I'm enrolled in a course
          that offers two paths: Front-end and Full-stack development. I'm in a
          dilemma about which path to choose, as I am actively seeking job
          opportunities and internships. I plan to discuss the matter with my
          company to make an informed decision regarding the most suitable path
          for my career. Additionally, I'm excited to explore both paths during
          the course and gain a comprehensive understanding by the end of it.{" "}
        </p>
      </div>

      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <h3 className="vertical-timeline-element-title">
              Junor Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Local Tech</h4>
            <p>
              I fell into gaming, realizing it may not contribute much to my
              personal growth, so I quit gaming. I enrolled in an online
              front-end course and successfully completed it. However, after
              finishing the course, I felt that it wasn't enough. To enhance my
              skills, I explored various sources and learned Express, MongoDB,
              Mongoose, and delved a bit into advanced React. I thoroughly enjoy
              coding.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2023[January later]"
            contentStyle={{ background: "rgb(333, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(333, 50, 343)" }}
            iconStyle={{ background: "rgb(33, 50, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <FontAwesomeIcon icon={faGamepad} />
            <h3 className="vertical-timeline-element-title">Gamer</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">
              2021-2023
            </h4>
            <p>
              I was a gamer.I have conenected internationally with many peoples
              through gaming.
            </p>
          </VerticalTimelineElement>
          {/* Add more VerticalTimelineElements as needed */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="2019"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3 className="vertical-timeline-element-title">
              Finished High School at Barlin High School & Colledge
            </h3>
            <h4 className="vertical-timeline-element-subtitle">-- 2019</h4>
            <p>High School Student</p>
          </VerticalTimelineElement>
          {/* Add more VerticalTimelineElements as needed */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AboutMe;
