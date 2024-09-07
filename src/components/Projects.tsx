import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { projects } from "./project.ts";

import "../style/style.css";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

function Projects() {
  const projectChunks = chunkArray(projects, 2);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x769fca,
          backgroundColor: 0x020121,
          points: 10.0,
          maxDistance: 13.0,
          spacing: 13.0,
        })
      );
    }
    return;
  }, [vantaEffect]);

  return (
    <div
      id="bootstrap-overides-projects"
      className="background-container"
      ref={vantaRef}
    >
      <p style={{ marginTop: "100px" }}>
        Well every developer has projects, right?
      </p>
      <div id="boxes-projects" className="container text-center">
        {projectChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="row justify-content-center boxes">
            {chunk.map((project, index) => {
              const globalIndex = chunkIndex * 2 + index;
              return (
                <div key={globalIndex} className="col-4 box">
                  <img src={project.imageSrc} />
                  <hr />
                  <h2>{project.title}</h2>
                  <h4 className="signature">{project.date}</h4>
                  <br />
                  <hr />
                  <a className="link" href={project.link} target="_blank">
                    <h5>{project.heading}</h5>
                  </a>
                  <p>{project.description}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
