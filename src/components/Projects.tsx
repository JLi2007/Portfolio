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
      <p>Well every developper has projects, right?</p>
      <div id="boxes-group" className="container text-center">
        <div id="boxes-1" className="row justify-content-center boxes">
          <div className="col-7 box">
            <h3>{projects[0].title}</h3>
            <img src={projects[0].imageSrc}/>
            <br />
            <a className="link" href={projects[0].link}><h5>{projects[0].heading}</h5></a>
            <p>{projects[0].description}</p>
          </div>
        </div>

        <div id="boxes-2" className="row justify-content-center boxes">
          <div className="col-4 box">
            <h3>{projects[1].title}</h3>
            <img src={projects[1].imageSrc}/>
            <br />
            <a className="link" href={projects[1].link}><h5>{projects[1].heading}</h5></a>
            <p>{projects[1].description}</p>
          </div>

          <div className="col-4 box">
            <h3>{projects[2].title}</h3>
            <img src={projects[2].imageSrc}/>
            <br />
            <a className="link" href={projects[2].link}><h5>{projects[2].heading}</h5></a>
            <p>{projects[2].description}</p>
          </div>
        </div>

        <div id="boxes-3" className="row justify-content-evenly boxes">
          <div className="col-6 box">
            <h3>{projects[3].title}</h3>
            <img src={projects[3].imageSrc}/>
            <br />
            <a className="link" href={projects[3].link}><h5>{projects[3].heading}</h5></a>
            <p>{projects[3].description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
