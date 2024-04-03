import '../style/style.css';

function Experience() {
  return (
    <div id="bootstrap-overides-experience" className="background-container">

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
