import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [size, setSize] = useState();
  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;

      // Set different sizes based on screen width
      const newSize = screenWidth <= 768 ? 50 : 70;

      setSize(newSize);
    };

    // Initial calculation
    calculateSize();

    // Recalculate on window resize
    const handleResize = () => {
      calculateSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // Empty dependency array means this effect runs once on mount
  }, []);

  return (
    <div>
      <div className=" py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-tl-3xl rounded-br-2xl hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto fixed bottom-0 left-0">
        <div className={`flex`}>
          <a
            href="https://www.linkedin.com/in/habibur18/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform animate-bounce hover:animate-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={size}
              height={size}
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:habiburwebdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-2 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform animate-bounce hover:animate-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={size}
              height={size}
              viewBox="0 0 48 48"
            >
              <path
                fill="#1e88e5"
                d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
              ></path>
              <path
                fill="#fff"
                d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
              ></path>
            </svg>
          </a>

          <a
            href="https://github.com/habibur18"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform animate-bounce hover:animate-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={size}
              height={size}
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
              ></path>
              <path
                fill="#455a64"
                d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
              ></path>
              <path
                fill="#455a64"
                d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
              ></path>
              <path
                fill="#455a64"
                d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
              ></path>
              <path
                fill="#00bcd4"
                d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex items-center my-10 border h-16 bg-slate-600">
//       <button
//         onClick={handleToggle}
//         className="text-white p-2 rounded-full hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-dark transition"
//       >
//         {isOpen ? "►" : "◄"} {/* Left and right pointing arrow symbols */}
//       </button>
//       <div className="flex">
//         <div
//           className={`${
//             isOpen ? "w-full h-10 p-4 mt-2 bg-red-500" : "w-0"
//           } rounded-md overflow-hidden duration-[2000ms] transition-all ${
//             isOpen
//               ? "max-h-full opacity-100 duration-300"
//               : "max-h-0 opacity-0 duration-1000"
//           }`}
//         >
//           <p className="text-primary-dark">
//             This is the content inside the open div.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
