import React from 'react'
import logo from './image/Logo.png'
import { IoMdArrowForward } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import top from './image/Top Banner.png'


function Navbar() {
  return (
    <>
    {/* <img src={top} className='h-50' alt="" /> */}
    <div className="top  text-center text-light" >
    <p className='w-100 '>Free Courses 🌟 Sale Ends Soon, Get It Now  <IoMdArrowForward />
</p>
    </div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo}  className='w-50'/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              
               Courses
                 
                 
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                  Coding
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  carpentry
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  cooking
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  graphic design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  E.T.C
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
               Pricing 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                COntanct
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-dark me-2 " type="submit">
           Sign Up
            </button>
            <button className="btn btn-outline-dark bg-warning" type="submit">
             Login
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navbar