import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import {projects} from './project.ts'

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
          color: 0x7a91b0,
          backgroundColor: 0x020121,
          points: 8.00,
          maxDistance: 13.00,
          spacing: 13.00
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
            <h3>{projects[0].title}</h3>
          </div>
        </div>

        <div id="boxes" className="row justify-content-center">
          <div className="col-4 box">
            1 of 2
          </div>

          <div className="col-4 box">
            2 of 2
          </div>
        </div>

        <div id="boxes" className="row justify-content-evenly">
          <div className="col-6 box">
            <h3></h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
