import { useRef, useState } from "react";
import CLOUDS from "vanta/dist/vanta.clouds2.min";
import * as THREE from "three";

import '../style/style.css';
import { useEffect } from "react";

function Experience() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(()=> {
    if(!vantaEffect){
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          texturePath: "../../assets/texture.png"
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
