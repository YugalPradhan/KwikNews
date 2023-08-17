import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (<nav className= "navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
    {/* eslint-disable-next-line */}
      <img src="favicon.png"/>
      <Link className="navbar-brand" to="#" style={{color:'#42e3ed',
    fontFamily:'Edu VIC WA NT Beginner'}}>KwikNews</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/politics">Politics</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/technology">Technology</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/environment">Environment</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/world">World</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
  }
}
