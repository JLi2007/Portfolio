import '../style/style.css';

function Home() {

  return (
    <div id="bootstrap-overides-home" className='background-container'>
      <div className="text-center">
        <div className="row align-items-start">
          <div id="col1" className="col-6">
            
            <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="4000">
              <div className="carousel-indicators">
                <button id="button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button id="button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button id="button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/carousel1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/carousel2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/carousel3.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              
              <button className="carousel-control-prev bg-primary" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next bg-primary" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

            </div>

          </div>

          <div id="col2" className="col-6">
            <div id="title">
              <h1>Student • Coder • Athlete </h1>
              <h6>In that order</h6>
            </div>

            <h2>Meet James</h2>
            <p>Coming from Waterloo, James Li is a high school student with aspirations in the tech field.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
