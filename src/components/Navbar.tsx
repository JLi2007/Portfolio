import { NavLink, useNavigate, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import '../style/style.css';

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const keyPress = (event: KeyboardEvent) =>{
            if(event.key === 'ArrowRight'){
                if(location.pathname === '/'){
                    navigate('/experience')
                } if(location.pathname === './experience'){
                    navigate('/projects')
                } if(location.pathname === './projects'){
                    navigate('/quote')
                } if(location.pathname === './quote'){
                    navigate('/')
                }
            }
        }

        window.addEventListener('keydown', keyPress)
        return () => {
            window.removeEventListener('keydown', keyPress);
          };
    },[navigate, location.pathname])

    return(
        
        <nav id="navbar-overides" className="navbar navbar-expand-lg bg-body-tertiary">
            <div id="bootstrap-overides-nav" className="container-fluid">
                <img src="../../assets/logo.png" style={{width: '25px', height: '25px'}}></img>
                <a className="navbar-brand">Porfolio</a>
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