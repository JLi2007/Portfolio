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
          points: 10.00,
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
        <div id="boxes-1" className="row justify-content-center boxes">
          <div className="col-7 box">
            <h3>{projects[0].title}</h3>
            <img src={projects[0].imageSrc} style={{height: '50%', width: '50%'}}/>
          </div>
        </div>

        <div id="boxes-2" className="row justify-content-center boxes">
          <div className="col-4 box">
            <h3>{projects[1].title}</h3>
            <img src={projects[1].imageSrc} style={{height: '50%', width: '50%'}}/>
          </div>

          <div className="col-4 box">
            <h3>{projects[2].title}</h3>
            <img src={projects[2].imageSrc} style={{height: '50%', width: '50%'}}/>
          </div>
        </div>

        <div id="boxes-3" className="row justify-content-evenly boxes">
          <div className="col-6 box">
            <h3>{projects[3].title}</h3>
            <img src={projects[3].imageSrc} style={{height: '45%', width: '45%'}}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
