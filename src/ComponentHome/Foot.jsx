import React from 'react'
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Foot() {
  return (
    <>
<footer className="text-center text-lg-start bg-white text-muted  mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
              <IoMail /> hello@skillbridge.com
              </p>
              <p> <IoCall /> +91 91813 23 2309</p>
              <p> <FaLocationDot /> Somewhere in the World</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
               Home
              </h6>
              <p>
                <a href="#!" className="text-reset">Benefits</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Our COurses</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Our Testimonies</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Our FAQ</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
               About Us
              </h6>
              <p>
                <a href="#!" className="text-reset">Company</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Achievements</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Our Goals</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4 ">Social Profiles</h6>
              <br /> 
              <p><i className="fas fa-phone me-3"></i> <FaFacebook /></p>
              <p><i className="fas fa-print me-3"></i> <FaXTwitter /></p>
              <p><i className="fas fa-print me-3"></i> <FaLinkedin /></p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Foot