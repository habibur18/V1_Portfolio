import React from "react";
import "./Orbit.css";
const currentLearn = [
  {
    name: "TypeScript",
    src: "https://i.postimg.cc/vDZfPgPQ/Type-Script.png",
  },
  {
    name: "NextJS",
    src: "https://i.postimg.cc/N9yfWcZj/Next-js.png",
  },
  {
    name: "Redux",
    src: "https://i.postimg.cc/Kzx3Y3nm/Redux.png",
  },
  {
    name: "PostgreSQL",
    src: "https://i.postimg.cc/r0vFTHLC/Post-Gre-SQL.png",
  },
  {
    name: "GraphQL",
    src: "https://i.postimg.cc/WD14wrnr/Graph-ql.png",
  },
  {
    name: "AWS",
    src: "https://i.postimg.cc/QHcV8jCB/AWS.png",
  },
  {
    name: "Docker",
    src: "https://i.postimg.cc/bZ8rd4Sm/Docker.png",
  },
  {
    name: "Jest",
    src: "https://i.postimg.cc/18HtFMps/Jest.png",
  },
];

const Orbit = () => {
  return (
    <div className="flex justify-center items-center my-32">
      <div className="orbit-container">
        {currentLearn.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-orbit"
            style={{ "--angle": `${(360 / currentLearn.length) * index}deg` }}
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="rounded-xl w-16"
              style={{
                transform: `translate(-50%, -50%) rotate(var(--angle)) translateX(200px) rotate(0)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orbit;
