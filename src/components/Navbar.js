import React from 'react'
import PropTypes from 'prop-types'
import { Link, redirect } from 'react-router-dom'

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li> 
        </ul>
        <button className="button button1 mx-2 " onClick={props.changeColorRed}></button>
        <button className="button button2 mx-2"  onClick={props.changeColorGreen}></button>
        <button className="button button3 mx-2"  onClick={props.changeColorPurple}></button>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
      </div>
    </div>
  </nav>
  ) 
}

Navbar.propTypes={ title: PropTypes.string,
                   about: PropTypes.string}
Navbar.defaultProps={
    title:"Set Title Here",
    about:"Set About"

}