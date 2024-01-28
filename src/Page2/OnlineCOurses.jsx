import React from 'react'
import image1 from "../ComponentBenefit/Image/Image.png";
import image2 from '../ComponentBenefit/Image/Image2.png'
import image3 from '../ComponentBenefit/Image/Image3.png'

function OnlineCOurses() {
  return (
    <>
    
<div className="container text-center mt-5 ">
  <div className="row">
    <div className="col">
     <h3>Online Courses on Design and Development</h3>
    </div>
    <div className="col">
     <p>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
    </div>
  </div>
  </div>
  

<div className="container mt-5 w-100 border border-danger">
    <h1>Web Design Fundamentals</h1>
    <small>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and <br /> user-friendly websites.</small>
    <button type="button" className="btn btn-light ms-5 ">View Courses</button>
<div className="gap-3">
    <img src={image1} className='w-50 p-3'/>
    <img src={image1} className='w-50 p-3' />
    <img src={image1}className='w-50 p-3' />
</div>
    <h2 className='mt-5'>Curriculum</h2>
<div className="d-flex flex-wrap">
  <div className='p-3' > <p style={{fontSize:"280%", color:"black"}}>01</p>  <p>Introduction to HTML</p></div>
  <div className='p-3' > <p style={{fontSize:"280%", color:"black"}}>02</p>  <p>Styling with CSS</p></div>
  <div className='p-3' > <p style={{fontSize:"280%", color:"black"}}>03</p>  <p>Introduction to <br /> Responsive Design</p></div>
  <div className='p-3' > <p style={{fontSize:"280%", color:"black"}}>04</p>  <p>Design Principles for <br /> Web</p></div>
  <div className='p-3' > <p style={{fontSize:"280%", color:"black"}}>05</p>  <p>Building a Basic <br /> Website</p></div>
 
</div>

</div>

    </>
  )
}

export default OnlineCOurses