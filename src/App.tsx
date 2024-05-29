import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Quote from './components/Quote'

import 'bootstrap/dist/css/bootstrap.css'
import './style/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App(){

  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/quotes" element={<Quote/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;