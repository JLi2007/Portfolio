import { Link } from 'react-router-dom';
import '../style/style.css'

function Navbar(){
    return(
        //Add a bootstrap overrides ID
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" id="active-navbar" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/experience" className="nav-link" aria-current="page">Experience</Link>
                </li>
                <li className="nav-item">
                <Link to="/projects" className="nav-link" aria-current="page">Projects</Link>
                </li>
                <li className="nav-item">
                <Link to="/quotes" className="nav-link" aria-current="page">Quotes</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;