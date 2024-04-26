import { useRef, useState, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import '../style/style.css';
import { experiences } from "./experiences";

function Experience() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(()=> {
    if(!vantaEffect){
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
          color: 0x84a9d1,
          backgroundColor: 0x020121,
          points: 8.00,
          maxDistance: 13.00,
          spacing: 13.00
        })
      )
    }
    return
  }, [vantaEffect])

  return (
    <div id="bootstrap-overides-experience" className="background-container" ref={vantaRef}>

      <div className="container text-center">
        <br /> <br />
        <p style={{marginTop: '50px'}}>What's a human without experiences</p>
        <div id="boxes" className="row">
          <div className="col-6 col-sm-4 box left top">
            <h3>{experiences[0].title}</h3>
            <img src={experiences[0].imageSrc}/>
            <h5>{experiences[0].heading}</h5>
            <p>{experiences[0].description}</p>
          </div>

          <div className="col-6 col-sm-4 box right top">
            <h3>{experiences[1].title}</h3>
            <img src={experiences[1].imageSrc}/>
            <h5>{experiences[1].heading}</h5>
            <p>{experiences[1].description}</p>
          </div>

          <div className="col-6 col-sm-4 box left bottom">
            <h3>{experiences[2].title}</h3>
            <img src={experiences[2].imageSrc}/>
            <h5>{experiences[2].heading}</h5>
            <p>{experiences[2].description}</p>
          </div>

          <div className="col-6 col-sm-4 box right bottom">
            <h3>{experiences[3].title}</h3>
            <img src={experiences[3].imageSrc}/>
            <h5>{experiences[3].heading}</h5>
            <p>{experiences[3].description}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Experience;
