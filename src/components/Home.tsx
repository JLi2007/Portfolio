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
                  <img src="/carousel1.jpg" className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/carousel2.jpg" className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/carousel3.jpg" className="d-block w-100"/>
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
            <div id="title" className='gradient-title'>
              <h1 >Student • Coder • Athlete </h1>
              <h6 style={{padding: '5px', marginLeft: '10px'}}>In that order</h6>
            </div>

            <div id="inside">
              <h3 className="gradient" style={{padding: '5px'}}>Meet James</h3>
              <p>Coming from Waterloo, <span style={{color:'#ef4d4d'}}>James Li</span> is a high school student with aspirations in the Computer Science. 
                Beginning to <span><a style={{color: '#65e393'}} href="https://github.com/JLi2007">program</a></span> only as recently as May 2023, he is unfazed by the late onset. He sees it only as fuel.
                Since then, James has attended 3 Hackathons and obtained a executive position at RythmHacks, a hackathon that aims to showcase youth innovation. 
              </p>

              <p>As a late bloomer, he constantly reminds himself how life isn't a race. 
                Striving to focus on self-improvement, James is deeply devoted to becoming 1% better than yesterday.
              </p>

              <p>One project that's keeping him busy in 2024 is his weather project. 
                Referred by him as a “journey” that showcases his growth as a developer. 
              </p>

              <p style={{paddingBottom: '20px'}}>It's not all about academics.
                Football⚽ has been one of his greatest passions since young. 
                Described as a disciplined player with high game IQ, he trains with an academy. 
                He is also a part of a competitive school team that has vivid hopes to make it far into the high school bracket.
              </p>
            </div>
            <button type="button" className="btn btn-outline-info">Download my Resume</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
