import React from "react";
import "./4_Projects.css";

const Projects = () => {
  const restroBoss = [
    {
      name: "React",
      src: "https://i.postimg.cc/MvC199Zb/react.png",
    },
    {
      name: "MongoDB",
      src: "https://i.postimg.cc/JDzXsgKm/mongodb.png",
    },
    {
      name: "ExpressJS",
      src: "https://i.postimg.cc/kVFN6WmN/express-js.png",
    },
    {
      name: "Tailwind",
      src: "https://i.postimg.cc/v1z9HMr3/Tailwindcss.png",
    },
    {
      name: "Firebase",
      src: "https://i.postimg.cc/2bkQ43ks/firebase.png",
    },
    {
      name: "JSON Web Token",
      src: "https://i.postimg.cc/G2rXTRYC/JWT.png",
    },
    {
      name: "React Query",
      src: "https://i.postimg.cc/Wzcq1pJG/react-query.png",
    },
  ];
  const carDoc = [
    {
      name: "React",
      src: "https://i.postimg.cc/MvC199Zb/react.png",
    },
    {
      name: "MongoDB",
      src: "https://i.postimg.cc/JDzXsgKm/mongodb.png",
    },
    {
      name: "ExpressJS",
      src: "https://i.postimg.cc/kVFN6WmN/express-js.png",
    },
    {
      name: "DaisyUI",
      src: "https://i.postimg.cc/VN5KjgZ7/DaisyUI.png",
    },
    {
      name: "Firebase",
      src: "https://i.postimg.cc/2bkQ43ks/firebase.png",
    },
  ];

  return (
    <div id="projects" className=" my-10 px-4 md:px-10">
      <div>
        <h1 className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group w-full md:w-1/2 h-20">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <span className="pr-2 text-2xl">View Projects</span>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center pl-16 w-full h-full text-4xl text-purple-500 bg-slate-700 transition-all duration-300 transform group-hover:translate-x-full ease">
            Projects
          </span>
          <span className="relative invisible">Button Text</span>
        </h1>
      </div>
      {/* checking start*/}
      <div className="my-20 space-y-9">
        <article className="flex flex-col lg:flex-row gap-10 border border-gray-300 rounded-lg">
          <div className="w-full">
            <img
              className="rounded-lg w-full"
              src="https://s5.gifyu.com/images/SiMwM.gif"
              alt=""
            />
          </div>
          <div className="w-full pr-3 mt-5 px-4">
            <div className="flex justify-between w-full">
              <h1 className="text-2xl text-stone-300 font-bold mr-2">
                Restro Boss
              </h1>
              <div className="flex flex-wrap gap-2">
                {restroBoss.map((item) => (
                  <img
                    className="w-10 rounded-full"
                    key={item.name}
                    src={item.src}
                    alt={item.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-white">
                <p className="text-lg my-6">
                  I have made this project using Express, MongoDB,
                  JsonWebToken,and ReactJS. It's a restaurant food ordering app.
                  Have an admin dashboard and customer dashboard as well. For
                  Authentication used firebase.and also used react query for
                  fetching data.
                </p>
              </div>
              <p className="text-red-500">
                {" "}
                Heads up! I'm hosted on Vercel's free tier, so data might take a
                while to load. ⏳
              </p>
              <div className="text-white flex justify-evenly gap-2">
                <a
                  href="https://github.com/habibur18/L1_Restro-Boss"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl my-6">
                    <span>
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/FdPkrFs5/Github.png"
                        alt=""
                      />
                    </span>
                  </div>
                </a>
                <p className="text-xl my-6">
                  <a
                    href="https://restro-boss.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 rounded-2xl"
                      src="https://i.postimg.cc/YG2mBL7z/Live.png"
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
        {/* 2nd */}
        <article className="flex flex-col lg:flex-row gap-10 border border-gray-300 rounded-lg">
          <div className="w-full">
            <img
              className="w-full rounded-lg"
              src="https://s5.gifyu.com/images/SiMp1.gif"
              alt=""
            />
          </div>
          <div className="w-full mt-5 px-4">
            <div className="flex justify-between w-full">
              <h1 className="text-2xl text-stone-300 font-bold mr-2">
                Car Doc
              </h1>
              <div className="flex flex-wrap gap-2">
                {carDoc.map((item) => (
                  <img
                    className="w-10 rounded-full"
                    key={item.name}
                    src={item.src}
                    alt={item.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-white">
                <p className="text-lg my-6">
                  It's a Car Repairing website. I have made this project using
                  React, MongoDB, and ReactJS. It's have a about page. A service
                  page that show all services. And have a booking page for
                  booking. And have a Contact page for contact.(Static)
                </p>
              </div>
              <p className="text-red-500">
                {" "}
                Heads up! I'm hosted on Vercel's free tier, so data might take a
                while to load. ⏳
              </p>
              <div className="text-white justify-evenly flex gap-2">
                <a
                  href="https://github.com/habibur18/L1-Car-Doc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl my-6">
                    <span>
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/FdPkrFs5/Github.png"
                        alt=""
                      />
                    </span>
                  </div>
                </a>
                <p className="text-xl my-6">
                  <a
                    href="https://carsdoctors.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 rounded-2xl"
                      src="https://i.postimg.cc/YG2mBL7z/Live.png"
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* others */}
      <div className="text-white my-32">
        <h1 className="text-4xl my-10 font-bold">Other Solo Projects</h1>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 1st */}
          <article className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg flex flex-col justify-between">
            <figure>
              {/* <img
                className="rounded-lg"
                src="https://s5.gifyu.com/images/SiHDR.gif"
                alt=""
              /> */}
              <img
                className="rounded-lg"
                src="https://s13.gifyu.com/images/SjsuA.gif"
                alt=""
              />
            </figure>
            <div className="flex flex-col p-5 mt-auto flex-grow">
              <h1 className="text-2xl mb-2 font-semibold">Todos App</h1>
              <div className="">
                <p>
                  A simple Todo App created using{" "}
                  <i>
                    <b>HTML, CSS & JavaScript</b>
                  </i>
                  . Users can save todos and delete them. The todo list is
                  stored in local storage. If a user attempts to delete a todo
                  that is not marked as completed, a confirmation alert will
                  appear. If the user clicks "OK," the todo will be deleted;
                  otherwise, it will remain. Additionally, users can delete
                  completed todos by clicking the delete button.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-white justify-start mx-5 flex gap-10">
                <a
                  href="https://github.com/habibur18/Todo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl my-6">
                    <span>
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/FdPkrFs5/Github.png"
                        alt=""
                      />
                    </span>
                  </div>
                </a>
                <p className="text-xl my-6">
                  <a
                    href="https://todo-app18.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 rounded-2xl"
                      src="https://i.postimg.cc/YG2mBL7z/Live.png"
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </article>

          {/* 2nd */}
          <article className="bg-gradient-to-br from-green-500 to-blue-500 rounded-lg shadow-lg flex flex-col justify-between">
            <figure>
              <img
                className="rounded-lg"
                src="https://s5.gifyu.com/images/SiTgh.gif"
                alt=""
              />
            </figure>
            <div className="flex flex-col p-5 mt-auto flex-grow">
              <h1 className="text-2xl mb-2 font-semibold">Travel Volunteer</h1>
              <div className="">
                <p>
                  It's a travel application that I developed using{" "}
                  <b>React, Express, MongoDB, React Leaflet, and Firebase</b>.
                  The application serves as a volunteer platform and includes an
                  admin dashboard where anyone can add new events. Additionally,
                  there is a responsive Donation Blog section that displays
                  static posts with some dummy data.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-white justify-center mx-5 flex gap-10">
                <a
                  href="https://github.com/habibur18/M1_Travel-Volunteer-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl my-6">
                    <span>
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/FdPkrFs5/Github.png"
                        alt=""
                      />
                    </span>
                  </div>
                </a>
                <p className="text-xl my-6">
                  <a
                    href="https://travel-volunteer-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 rounded-2xl"
                      src="https://i.postimg.cc/YG2mBL7z/Live.png"
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </article>
          {/* 3rd */}
          <article className="bg-gradient-to-br from-yellow-500 to-red-500 rounded-lg shadow-lg flex flex-col justify-between">
            <figure>
              <img
                className="rounded-lg"
                src="https://s5.gifyu.com/images/Si3dm.gif"
                alt=""
              />
            </figure>
            <div className="flex flex-col p-5 mt-auto flex-grow">
              <h1 className="text-2xl mb-2 font-semibold">Chefaos</h1>
              <div className="">
                <p>
                  It's a chef finding application that I developed using{" "}
                  <b>React, Tailwind & firebase for login</b>. It's a showcase
                  of top chef and there recipes. Application have chef form for
                  registration(static). And a login form. And also have a blog
                  page with chef related posts. It's responsive for all devices.
                  Also have a private route.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-white justify-end mx-5 flex gap-10">
                <a
                  href="https://github.com/habibur18/M1_Chefaos-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl my-6">
                    <span>
                      <img
                        className="w-16 rounded-2xl"
                        src="https://i.postimg.cc/FdPkrFs5/Github.png"
                        alt=""
                      />
                    </span>
                  </div>
                </a>
                <p className="text-xl my-6">
                  <a
                    href="https://chef-hunter-chefaos.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-16 rounded-2xl"
                      src="https://i.postimg.cc/YG2mBL7z/Live.png"
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Projects;
