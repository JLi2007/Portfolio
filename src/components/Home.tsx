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
              <p>Coming from Waterloo, <span className="gradient1">James Li</span> is a high school student with aspirations in Computer Science. 
                Beginning to <span><a style={{color: '#65e393'}} href="https://github.com/JLi2007">program</a></span> only as recently as <strong>May 2023</strong>, he is unfazed by the late onset. He sees it only as fuel.
                Since then, James has attended <span><a href="https://devpost.com/lijames9532" style={{color: '#a567ec'}}>3 Hackathons</a></span> and obtained a executive position at <span><a href="https://rythmhacks.ca/" style={{color:'#6583e8'}}>Rythmhacks</a></span>, 
                a hackathon that aims to showcase <span className='gradient2'>youth innovation</span>. 
              </p>

              <p>Having delved into coding later than many, he constantly reminds himself how <strong>life isn't a race. </strong> 
                Striving to focus on self-improvement, James is deeply devoted to becoming <span className='gradient3'>1% better than yesterday</span>.
              </p>

              <p>One project that's keeping him busy in 2024 is his <span><a href="https://github.com/JLi2007/TS_WeatherProject_Mongo" style={{color:'#4defe4'}}>weather project</a></span>. 
                Referred by him as a <span className='gradient4'>"journey"</span> that showcases his growth as a developer. 
              </p>

              <p style={{paddingBottom: '20px'}}>It's not all about academics.
                <span className='gradient5'> Football</span>⚽ has been one of his greatest <strong>passions</strong> since young. 
                Described as a disciplined player with high game IQ, he plays for an <span><a href="https://www.bvbinternationalacademy-waterloo.com/" style={{color:'#e9d45c'}}>academy</a></span>. 
                He is also a part of a <strong>competitive</strong> school team that has vivid hopes to make it deep into the high school bracket.
              </p>

              <p style={{fontSize:'10px', display:'flex', justifyContent:'center'}}>**The rest of my portfolio isn't this serious, don't worry</p>
            </div>

            <div className="button">
              <button type="button" id="resume-button-resume" className="btn btn-outline-info"><a href="https://drive.google.com/file/d/1s73bKW2nadhLyfqTex0mMzrZZyXRfGAQ/view?usp=sharing" style={{textDecoration:'none', fontWeight:'600'}}>View Resume</a></button>
              <button type="button" id="resume-button-linkedin" className="btn btn-outline-info"><a href="https://www.linkedin.com/in/james-li-a81004275/" style={{textDecoration:'none', fontWeight:'600'}}>View Linkedin</a></button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
