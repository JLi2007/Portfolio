import { useState, useEffect } from "react";
import "../style/style.css";
import Typewriter from "typewriter-effect";
import { quotes } from "./quotes";

function Quote() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const [currentQuote, setCurrentQuote] = useState(randomNumber);
  const longPause: number = 4000;
  const shortPause: number = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((Quote) => (Quote + 1) % quotes.length);
    }, 12500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="bootstrap-overides-quotes" className="background-container">
      <div className="inside-text">
        <p className="signature">
          James Li Productions
        </p>
        <div className="typewriter">
          <Typewriter
            options={{
              autoStart: true,
              delay: 70,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(quotes[currentQuote].text)
                .start()
                .typeString("<br>");
              if (currentQuote == 9 || currentQuote == 0) {
                typewriter
                  .typeString(quotes[currentQuote].author)
                  .start()
                  .pauseFor(shortPause)
                  .deleteAll(10);
              } else {
                typewriter
                  .typeString(quotes[currentQuote].author)
                  .start()
                  .pauseFor(longPause)
                  .deleteAll(10);
              }
            }}
            key={currentQuote}
          />
        </div>
      </div>
    </div>
  );
}

export default Quote;
