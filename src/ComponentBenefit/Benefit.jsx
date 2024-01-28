import React from "react";

function Benefit() {
  return (
    <>
      <div className="container">
        <h3>Benefits</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>

      {/* card div  */}
      <div className="main ">
        <br />
        <h1>Courses Available</h1>
        <br />
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">01</div>
              <div className="card_content">
                <h2 className="card_title">Flexible Learning Schedule</h2>
                <br />
                <p className="card_text">
                Fit your coursework around your existing commitments and obligations.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">02</div>
              <div className="card_content">
                <h2 className="card_title">Expert Instruction</h2>
                <br />
                <p className="card_text">
                Learn from industry experts who have hands-on experience in design and development.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">03</div>
              <div className="card_content">
                <h2 className="card_title">Diverse Course Offerings</h2>
                <br />
                <p className="card_text">
                Explore a wide range of design and development courses covering various topics.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">04</div>
              <div className="card_content">
                <h2 className="card_title">Updated Curriculum</h2>
                <br />
                <p className="card_text">
                Access courses with up-to-date content reflecting the latest trends and industry practices.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">05</div>
              <div className="card_content">
                <h2 className="card_title">Practical Projects and Assignments</h2>
                <br />
                <p className="card_text">
                Develop a portfolio showcasing your skills and abilities to potential employers.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">06</div>
              <div className="card_content">
                <h2 className="card_title">Interactive Learning Environment</h2>
                <p className="card_text">
                Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.
                </p>
                <button className="btn card_btn btn2 top">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </>
  );
}

export default Benefit;
