import { NavLink} from 'react-router-dom';
import '../style/style.css';

function Navbar(){
    return(
        <nav id="navbar-overides" className="navbar navbar-expand-lg bg-body-tertiary">
            <div id="bootstrap-overides-nav" className="container-fluid">
                <img src="/logo.png" style={{width: '25px', height: '25px', marginRight:'5px'}}></img>
                <a className="navbar-brand">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experience" className="nav-link" aria-current="page">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link" aria-current="page">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quotes" className="nav-link" aria-current="page">Quotes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;