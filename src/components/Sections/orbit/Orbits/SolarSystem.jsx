import React from "react";
import "./SolarSystem.css";

const SolarSystem = () => {
  const orbits = [
    { orbitSpeed: 10, src: "https://i.postimg.cc/vDZfPgPQ/Type-Script.png" },
    { orbitSpeed: 15, src: "https://i.postimg.cc/N9yfWcZj/Next-js.png" },
    { orbitSpeed: 20, src: "https://i.postimg.cc/Kzx3Y3nm/Redux.png" },
    { orbitSpeed: 25, src: "https://i.postimg.cc/r0vFTHLC/Post-Gre-SQL.png" },
    { orbitSpeed: 40, src: "https://i.postimg.cc/WD14wrnr/Graph-ql.png" },
    { orbitSpeed: 56, src: "https://i.postimg.cc/QHcV8jCB/AWS.png" },
    { orbitSpeed: 60, src: "https://i.postimg.cc/bZ8rd4Sm/Docker.png" },
    { orbitSpeed: 90, src: "https://i.postimg.cc/18HtFMps/Jest.png" },
  ];

  return (
    <div className="solar-system">
      {orbits.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className={`orbit orbit-${orbitIndex + 1}`}
          style={{
            animationDuration: `${orbit.orbitSpeed}s`,
            animationDirection: orbitIndex % 2 === 0 ? "normal" : "reverse", // Alternate rotation direction
          }}
        >
          {orbitIndex !== 0 && ( // Exclude the first orbit to avoid redundancy
            <div
              className="planet"
              style={{
                transform: `rotate(0deg) translateX(${orbitIndex * 30}px)`,
              }}
            >
              <img className="rounded-full" src={orbit.src} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SolarSystem;
