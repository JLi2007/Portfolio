import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import '../style/style.css';

function Projects() {
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
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x5381e3,
          backgroundColor: 0x020121,
          points: 13.00,
          maxDistance: 29.00,
          spacing: 17.00
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
