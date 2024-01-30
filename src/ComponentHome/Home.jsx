import React from "react";
import icon from "../ComponentHome/image/Icon.png";
import Abstract from '../ComponentHome/image/Abstract.png'
import card1 from "../ComponentHome/image/card1.png";
import card2 from "../ComponentHome/image/card2.png";
import card3 from "../ComponentHome/image/card3.png";
import card4 from "../ComponentHome/image/card4.png";
import card5 from "../ComponentHome/image/card5.png";
import card6 from "../ComponentHome/image/card6.png";
import card7 from "../ComponentHome/image/card7.png";
import videoimage from "../ComponentHome/image/videoimage.png";

function Home() {
  return (
    <>
      <section>
        <div className="container mt-5 me-5 text-center">
          <div className="device">
         <span > <img src={Abstract} className='me-5 ' /></span>
         <span><img src={icon} className=""  /></span> 
         <span className="unlock">Unlock</span> <span>Your Creative Potential</span>
         
          </div>

          <h2 className="text-center">
            with Online Design and Development Courses.
          </h2>
          <smal >
            Learn from Industry Experts and Enhance Your Skills.
          </smal>
        </div>

        <div className="container px-4 text-center">
          <div className="row gx-5">
            <marquee
              behavior="scroll"
              direction="left"
              className=" mt-5 bg-light"
            >



              <img src={card1} alt="" className="p-3 " />
              <img src={card2} alt="" className="p-3" />
              <img src={card3} alt="" className="p-3" />
              <img src={card4} alt="" className="p-3" />
              <img src={card5} alt="" className="p-3" />
              <img src={card6} alt="" className="p-3" />
              <img src={card7} alt="" className="p-3" />
            </marquee>
          </div>
        </div>
        <div className="container mt-5  ">
          <img src={videoimage} alt="" className="w-100 mt-5" />
        </div>
      </section>
      <br />
    </>
  );
}

export default Home;
