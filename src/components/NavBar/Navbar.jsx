import React from 'react'
import logo from '../../Assets/logo.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid" >
    <img className='navbar-brand' src= {logo} alt="" style={{height: "47.5px", width: "90px"}}/>
    {/* <a className="navbar-brand" href="/">IPL T20</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-between w-25">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
     
       
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/schedule">Schedule</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar
