import { useEffect, useState } from "react";
import "./3_Techstack.css";
import Orbit from "./orbit/Orbit";

const Techstack = () => {
  const [isVisible, setIsVisible] = useState(false);
  // https://reactjsexample.com/beautiful-orbit-components-to-react/
  useEffect(() => {
    const handleScroll = () => {
      const techstackSection = document.getElementById("techstack");
      const rect = techstackSection.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight / 1.7 && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const techs = [
    {
      name: "HTML5",
      src: "https://i.postimg.cc/CBcjJYdz/html5.png",
    },
    {
      name: "CSS",
      src: "https://i.postimg.cc/64TCmSGz/css3-colored.png",
    },
    // {
    // name: "SASS",
    // src: "https://i.postimg.cc/9w4qp7vn/sass.png",
    // },
    {
      name: "Tailwind",
      src: "https://i.postimg.cc/v1z9HMr3/Tailwindcss.png",
    },
    {
      name: "Bootstrap",
      src: "https://i.postimg.cc/nCgG6H2m/bootstrap-stack.png",
    },
    {
      name: "Javascript",
      src: "https://i.postimg.cc/SJ2WLB4x/javascript-colored.png",
    },

    {
      name: "React",
      src: "https://i.postimg.cc/MvC199Zb/react.png",
    },
    {
      name: "FireBase",
      src: "https://i.postimg.cc/2bkQ43ks/firebase.png",
    },
    {
      name: "Node",
      src: "https://i.postimg.cc/NyYmcLHK/nodejs.png",
    },
    {
      name: "Express",
      src: "https://i.postimg.cc/kVFN6WmN/express-js.png",
    },
    {
      name: "MongoDB",
      src: "https://i.postimg.cc/JDzXsgKm/mongodb.png",
    },
  ];
  const Tools = [
    {
      name: "Git",
      src: "https://i.postimg.cc/BtwTKqdz/git.png",
    },
    {
      name: "Github",
      src: "https://i.postimg.cc/Wt4mzDfr/Git-Hub-Invertocat-Logo.png",
    },
    {
      name: "Figma",
      src: "https://i.postimg.cc/3yHCxnPJ/figma.png",
    },
    {
      name: "Vite",
      src: "https://i.postimg.cc/dhGrpGLM/vite-colored.png",
    },
    {
      name: "Cloudinary",
      src: "https://i.postimg.cc/sxqJ1YbW/cloudinary-logo.png",
    },
  ];
  return (
    <div
      id="techstack"
      className={`text-white my-20 p-2 ${isVisible ? "visible" : ""} `}
    >
      <h1 className="text-5xl w-3/3 md:hover:underline md:w-1/2 my-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:scale-105 underline-offset-8 decoration-wavy decoration-sky-400">
        Techstack
      </h1>
      <div className="grid items-center  gap-2 space-x-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techs.map((tech) => (
          <div
            className="flex flex-col max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg "
            key={tech.name}
          >
            <div
              className={`techtack  flex items-center gap-2 font-bold text-xl bg-black bg-opacity-70 px-6 py-3 rounded-xl hover:font-semibold hover:scale-105 transition-transform ${
                isVisible ? "visible" : ""
              }`}
            >
              <img alt={tech.name} src={tech.src} className="w-10" />
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-right my-10">
          <button className="text-3xl rounded-xl bg-gray-800" id="currently">
            <p className="px-5 py-2 border-2 h-full flex items-center bg-gray-800 m-1 rounded-lg">
              Tools
            </p>
          </button>
        </div>
        <div className="grid items-center  gap-2 space-x-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Tools.map((tech) => (
            <div
              className="flex flex-col gap-2 max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg "
              key={tech.name}
            >
              <div
                className={`techtack  flex  items-center gap-4 font-bold text-xl bg-black bg-opacity-70 px-6 py-3 rounded-xl hover:font-semibold hover:scale-105 transition-transform ${
                  isVisible ? "visible" : ""
                }`}
              >
                <img alt={tech.name} src={tech.src} className="w-10" />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="my-12">
          <div className="text-center">
            <button className="text-3xl rounded-xl bg-gray-800 text-right">
              <h3 className="capitalize bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
                Currently Taking a challenge to learn in next year.
                <p className="block ml-6 capitalize">
                  Where I will learn tech showing in orbit!
                </p>
              </h3>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
      </div>
      <div>
        <Orbit />
      </div>
    </div>
  );
};

export default Techstack;
