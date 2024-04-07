import { useState, useEffect } from 'react';
import '../style/style.css';
import Typewriter from 'typewriter-effect';
import {quotes} from './quotes';

function Quote() {
  const [currentQuote, setCurrentQuote] = useState(1);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentQuote((Quote) => (Quote + 1) % quotes.length);
    }, 15000);

    return() => clearInterval(interval);
  }, [])


  return (
    <div id="bootstrap-overides-quotes" className='background-container'>


        <div className="inside-text container">
          <p>Collection of some standout quotes. Each animation is 15s</p>


          <div className="typewriter">
            <Typewriter
              options={{
                autoStart: true,       
              }}
              onInit={(typewriter) => {
                typewriter.typeString(quotes[currentQuote].text)
                  .changeDelay(1)
                  .pauseFor(3000)
                  .deleteAll(10)
                  .start()
              }}
              key={currentQuote}
            />
          </div>

        </div>
    </div>
  );
}

export default Quote;
