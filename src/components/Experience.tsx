import { useRef, useState, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import "../style/style.css";
import { experiences } from "./experiences";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

function Experience() {
  const experienceChunks = chunkArray(experiences, 2);
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
          points: 8.0,
          maxDistance: 13.0,
          spacing: 13.0,
        })
      );
    }
    return;
  }, [vantaEffect]);

  return (
    <div
      id="bootstrap-overides-experience"
      className="background-container"
      ref={vantaRef}
    >
      <div id="boxes-experience" className="container text-center">
        <br /> <br />
        <p style={{ marginTop: "50px" }}>More so a timeline of my journey</p>
        {experienceChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="row justify-content-center boxes">
            {chunk.map((experience, index) => {
                    const globalIndex = chunkIndex * 2 + index;
                    return (
                      <div key={globalIndex} className="col-4 box">
                          <h2 style={{letterSpacing:'1.25px'}}>{experience.title}</h2>
                          <h4>{experience.date}</h4>
                          <hr />
                          <img src={experience.imageSrc} />
                          <hr />
                          <h5>{experience.heading}</h5>
                          <p>{experience.description}</p>
                      </div>
                    );
              })}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
