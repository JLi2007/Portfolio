import { useRef, useState, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import '../style/style.css';

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
          color: 0x7a91b0,
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
        <p>Hello here are my experiences</p>
        <div id="boxes" className="row">
          <div id="box-left-1" className="col-6 col-sm-4 box">Text here1</div>
          <div id="box-right-1" className="col-6 col-sm-4 box">Text here2 </div>
          {/* Force next columns to break to new line */}
          <div className="w-100"></div>

          <div id="box-left-2" className="col-6 col-sm-4 box">Text here3</div>
          <div id="box-right-2" className="col-6 col-sm-4 box">Text here4</div>
        </div>

      </div>

    </div>
  );
}

export default Experience;
