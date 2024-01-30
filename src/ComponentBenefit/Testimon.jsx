import React from 'react'
import tes1 from '../IMAGEPAGE/tes1.png'
import tes2 from '../IMAGEPAGE/tes2.png'
import tes3 from '../IMAGEPAGE/tes3.png'
import tes4 from '../IMAGEPAGE/tes4.png'


function Testimon() {
  return (
    <>
<br />
<br />
<div className="container">
    <h1>Our Testimonials</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
</div>
<br /><br /><br />
{/* card for the Testimonials  */}

<div className="outerdiv">
    <div className="innerdiv">
      {/* <!-- div1 --> */}
      <div className=" eachdiv ">
        <div className="userdetails">
          <div className="imgbox">
            <img src={tes1} alt=""/>
          </div>
          <div className="detbox">
            <p class="name">Sarah L</p>
            <b className="designation  mt-3">Read Full Story</b>
          </div>
        </div>
        <div className="review  mt-3">
        <p>“ The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it! ”</p>
        </div>
      </div>
      {/* <!-- div2 --> */}
      <div className=" eachdiv ">
        <div className="userdetails">
          <div className="imgbox">
            <img src={tes2} alt=""/>
          </div>
          <div className="detbox">
            <p class="name">Jason M</p>
            <b className="designation  mt-3">Read Full Story</b>
          </div>
        </div>
        <div className="review  mt-3">
        <p>“The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!”</p>
        </div>
      </div>
      {/* <!-- div3 --> */}
      <div className=" eachdiv ">
        <div className="userdetails">
          <div className="imgbox">
            <img src={tes3} alt=""/>
          </div>
          <div className="detbox">
            <p class="name">Sarah L</p>
            <b className="designation  mt-3">Read Full Story</b>
          </div>
        </div>
        <div className="review  mt-3">
        <p>“The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!”</p>
        </div>
      </div>
      {/* <!-- div4 --> */}
      <div className=" eachdiv ">
        <div className="userdetails">
          <div className="imgbox">
            <img src={tes4} alt=""/>
          </div>
          <div className="detbox">
            <p class="name">Michael K</p>
            <b className="designation  mt-3  ">Read Full Story</b>
          </div>
        </div>
        <div className="review  mt-3 ">
        <p>“I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!”</p>
        </div>
      </div>
      </div>
      </div>
      <div className="container">
        <h1>Our Pricing</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
      </div>
    </>
  )
}

export default Testimon;