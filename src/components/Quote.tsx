import '../style/style.css';
import Typewriter from 'typewriter-effect';

function Quote() {
  return (
    <div id="bootstrap-overides-quotes" className='background-container'>

      <div className="cinema-img">

      </div>

      <p>This is the quotes page. Idea-movie and typewriter effect</p>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello World!')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </div>
  );
}

export default Quote;
