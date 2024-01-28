import React from "react";
import image1 from "../ComponentBenefit/Image/Image.png";
import image2 from '../ComponentBenefit/Image/Image2.png'
import image3 from '../ComponentBenefit/Image/Image3.png'
import image4 from '../ComponentBenefit/Image/Image 4.png'
import image5 from '../ComponentBenefit/Image/Image 5.png'
import image6 from '../ComponentBenefit/Image/Image 6.png'

function OurCourses() {
  return (
    <>
      <br />
      <br />
      <div className="container">
        <h1>Our Courses</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <br />

      <div className="row row-cols-1 row-cols-md-2 g-4 w-100">
        <div className="col">
          <div className="card">
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">4 Weeks</div>
                  <div class="col">Beginner</div>
                  <b class="col">By John Smith</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">Web Design Fundamentals</h5>
            
              <p className="card-text">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col">
          <div className="card">
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">6 Weeks</div>
                  <div class="col">Intermediate</div>
                  <b class="col">By Emily Johnson</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">UI/UX Design</h5>
            
              <p className="card-text">
              Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>
          {/* card 3 */}

          <div className="col">
          <div className="card">
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">8 Weeks</div>
                  <div class="col">Intermediate</div>
                  <b class="col">By David Brown</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">Mobile App Development</h5>
            
              <p className="card-text">
              Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>

         {/* card 4 */}
          <div className="col">
          <div className="card">
            <img src={image4} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">10 Weeks</div>
                  <div class="col">Beginner</div>
                  <b class="col">By Sarah Thompson</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">Graphic Design for Beginners</h5>
            
              <p className="card-text">
              Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>
         

         {/* card5 */}
          <div className="col">
          <div className="card">
            <img src={image5} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">10 Weeks</div>
                  <div class="col">Intermediate</div>
                  <b class="col">By Michael Adams</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">Front-End Web Development</h5>
            
              <p className="card-text">
              Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>
         

         {/* card6 */}
          <div className="col">
          <div className="card">
            <img src={image6} className="card-img-top" alt="..." />
            <div className="card-body">

              <div class="container">
                <div class="row">
                  <div class="col">6 Weeks</div>
                  <div class="col">Advance</div>
                  <b class="col">By Jennifer Wilson</b>
                </div>
              </div>
              <br />
              <h5 className="card-title">Advanced JavaScript</h5>
            
              <p className="card-text">
              Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.
              </p>
              <button className="btn card_btn btn2  top">Get it Now</button>
            </div>
          </div>
        </div>
         

      </div>
    </>
  );
}

export default OurCourses;
