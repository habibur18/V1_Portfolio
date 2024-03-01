import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./Intro.css";

const Intro = () => {
  const [animate, setAnimate] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Trigger animation when the component mounts
    setAnimate(true);
  }, []);

  const Texts = ["Frontend Developer", "Web Designer"];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id="intro" className={`text-white p-3 ${animate ? "animate-intro" : ""}`}>
      <div>
        <div className={`flex justify-between flex-col-reverse lg:flex-row animate-left items-center`}>
          <div className=" md:w-4/5">
            <h1 className="text-4xl my-3">Hi There, I am</h1>
            <h1 className="lg:text-8xl text-6xl md:text-7xl font-bold name ">Habibur Rahman</h1>

            <h2 style={{ lineHeight: "100px" }} className="junior my-10 border-l-8 border-yellow-600 pl-3 text-4xl ">
              Junior Web Developer &#160;&#160;
              <span className="border-l-4 border-yellow-600 pl-3 leading-10"></span>
              {/* MERN Stack */}
              <TextTransition direction="down" inline={true} translateValue="25px" springConfig={presets.gentle}>
                {Texts[index % Texts.length]}
              </TextTransition>
            </h2>
            {/* hide this div when 500px and more */}
            <div className="space-x-5 text-5xl sm:hidden">
              <a href="https://www.linkedin.com/in/amarhabibur/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/habibur18" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a title="habiburwebdev@gmail.com" href="mailto:habiburwebdev@gmail.com" rel="noopener noreferrer">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div className="md:w-3/5 text-xl animate-right sm:block my-2">
              <p>I am a junior Front-end Web Developer from Bangladesh. After a year's intensive study of web development, I am looking for a position where I can advance my skills.</p>
              <p>Can I do everything? Far from it. I am interested in learning new technologies and developing my knowledge.</p>
            </div>
          </div>
          <div className="animate-right w-3/4 mx-auto lg:w-3/5 xl:w-2/5 flex justify-center z-50">
            <img className="rounded-xl sm:w-3/4 md:w-2/4 lg:w-3/4  " src="https://i.ibb.co/Jtq99kb/mine.jpg" alt="" />
          </div>
        </div>
        <div className="my-5 space-x-5 text-5xl hidden sm:block">
          <a href="https://www.linkedin.com/in/amarhabibur/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/habibur18" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a title="habiburwebdev@gmail.com" href="https://mail.google.com/mail/?view=cm&fs=1&to=habiburwebdev@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Intro;
