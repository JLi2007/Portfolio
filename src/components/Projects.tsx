import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

import '../style/style.css';

function Projects() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0
        })
      );
    }
    return
  }, [vantaEffect]);

  return (
    <div id="bootstrap-overides-projects" className='background-container' ref={vantaRef}>
      <p>This is the projects page.</p>
      <div id="boxes-group" className="container text-center">
        <div id="boxes" className="row justify-content-center">
          <div className="col-7 box">
            One of column
          </div>
        </div>

        <div id="boxes" className="row justify-content-center">
          <div className="col-4 box">
            One of two columns
          </div>
          <div className="col-4 box">
            One of two columns
          </div>
        </div>

        <div id="boxes" className="row justify-content-evenly">
          <div className="col-6 box">
            One of three columns
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
