import '../style/style.css';

function Projects() {
  return (
    <>
    <div id="bootstrap-overides-projects" className='background-container'>
      <p>This is the projects page.</p>
      <div id="boxes-group" className="container text-center">
        <div id="boxes" className="row justify-content-center">
          <div className="col-7 box">
            One of column
          </div>
        </div>

        <div id="boxes" className="row justify-content-center">
          <div className="col-4 box">
            One of two columns
          </div>
          <div className="col-4 box">
            One of two columns
          </div>
        </div>

        <div id="boxes" className="row justify-content-evenly">
          <div className="col-6 box">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
