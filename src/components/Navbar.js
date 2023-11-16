import React from 'react'
import PropTypes from 'prop-types'

// </nav><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

export default function Navbar(props) {
  return (
    <div>
      <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded border mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded border mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-success rounded border mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded border mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-light rounded border mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
              <div className="bg-dark rounded border mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            </div>
            {/* Ternary operator used here  */}
            {/* To toggle switch between light and dark only */}
            {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-3`}>         
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="changeMode"/>
                <label className="form-check-label" htmlFor="changeMode">Change Mode</label>
            </div> */}
            <form className="d-flex mx-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About details here'
};
