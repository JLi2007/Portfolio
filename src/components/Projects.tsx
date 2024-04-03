import '../style/style.css';

function Projects() {
  return (
    <>
    <div id="bootstrap-overides-projects" className='background-container'>
      <p>This is the projects page.</p>
      <div id="boxes" className="container text-center">
        <div id="box" className="row justify-content-between">
          <div className="col-4">
            One of two columns
          </div>
          <div className="col-4">
            One of two columns
          </div>
        </div>
        
        <div id="box" className="row justify-content-evenly">
          <div className="col-3">
            One of three columns
          </div>
          <div className="col-3">
            One of three columns
          </div>
          <div className="col-3">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
