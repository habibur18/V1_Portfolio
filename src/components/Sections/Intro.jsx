// import React from "react";
// import { Link } from "react-router-dom";

// const Intro = () => {
//   return (
//     <div className="text-white p-3">
//       <div>
//         <div className="flex justify-between">
//           <div>
//             <h1 className="text-4xl my-3 hi">Hi, I am</h1>
//             <h1 className="text-5xl name">Habibur Rahman</h1>

//             <h2
//               style={{ lineHeight: "100px" }}
//               className="junior my-10 border-l-8 border-yellow-600 pl-3 text-4xl "
//             >
//               Junior Web Developer &#160;&#160;
//               <span className="border-l-4 border-yellow-600 pl-3 leading-10"></span>
//               MERN Stack
//             </h2>
//             {/* hide this div when 500px and more */}
//             <div className="space-x-5 text-5xl sm:hidden">
//               <Link className="">
//                 <i className="fa-brands fa-linkedin"></i>
//               </Link>
//               <Link>
//                 <i className="fa-brands fa-github"></i>
//               </Link>
//               <Link>
//                 <i className="fa-solid fa-envelope"></i>
//               </Link>
//             </div>
//           </div>
//           <div>
//             <img
//               style={{ width: "300px" }}
//               className="rounded-xl"
//               src="https://i.ibb.co/Jtq99kb/mine.jpg"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="md:w-3/5 text-xl">
//           <p>
//             I am a junior Web Developer from Bangladesh. After a year's
//             intensive study of web development, I am lookig for a position where
//             I can advance my skills.
//           </p>
//           <p>
//             Can I do everything? Far from it. I am interested in learning new
//             technologies and developing my knowledge.
//           </p>
//         </div>
//         <div className="my-5 space-x-5 text-5xl hidden sm:block">
//           <Link className="">
//             <i className="fa-brands fa-linkedin"></i>
//           </Link>
//           <Link>
//             <i className="fa-brands fa-github"></i>
//           </Link>
//           <Link>
//             <i className="fa-solid fa-envelope"></i>
//           </Link>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Intro;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={`text-white p-3 ${animate ? "animate-intro" : ""}`}>
      <div>
        <div className={`flex justify-between animate-left`}>
          <div>
            <h1 className="text-4xl my-3 hi">Hi, I am</h1>
            <h1 className="text-5xl name">Habibur Rahman</h1>

            <h2
              style={{ lineHeight: "100px" }}
              className="junior my-10 border-l-8 border-yellow-600 pl-3 text-4xl "
            >
              Junior Web Developer &#160;&#160;
              <span className="border-l-4 border-yellow-600 pl-3 leading-10"></span>
              MERN Stack
            </h2>
            {/* hide this div when 500px and more */}
            <div className="space-x-5 text-5xl sm:hidden">
              <Link className="">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link>
                <i className="fa-solid fa-envelope"></i>
              </Link>
            </div>
            <div className="md:w-3/5 text-xl animate-right sm:block my-2">
              <p>
                I am a junior Web Developer from Bangladesh. After a year's
                intensive study of web development, I am looking for a position
                where I can advance my skills.
              </p>
              <p>
                Can I do everything? Far from it. I am interested in learning
                new technologies and developing my knowledge.
              </p>
            </div>
          </div>
          <div className="animate-right">
            <img
              style={{ width: "300px" }}
              className="rounded-xl"
              src="https://i.ibb.co/Jtq99kb/mine.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="my-5 space-x-5 text-5xl hidden sm:block">
          <Link className="">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link>
            <i className="fa-solid fa-envelope"></i>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Intro;
