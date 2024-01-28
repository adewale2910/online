import React from 'react'
// import { IoMdCheckmark } from "react-icons/io";
// import { MdOutlineCancelPresentation } from "react-icons/md";


function Pricingcard() {
  return (
    <>
<section>
    <br />
    <div className="container">
       <main>
        <div className="row  row-cols-1 row-cols-md-3 d-flex">
    <div className="col">
        <div className="card text-center">
            <div className="card-header">
                <h4 className='fw-normal' >Free Plan</h4>
            </div>
                <div className="card-body">
                    <h1 className='card-title '>
                        $ <small className='text-dark'>0/Month</small>
                    </h1>
                    <ul className='list-unstled py-3'>
                        <h5>Available Features</h5>
                        <li> Access to selected free courses.</li>
                        <li>No certification upon completion.</li>
                        <li>Ad-supported platform.</li>
                        <li>Access to exclusive Pro Plan community forums.</li>
                        <li>Early access to new courses and updates.</li>
                    </ul>
                    <button className='btn  text-white btn-lg top w-100'>Get Started</button>
                </div>
        </div>
    </div>
    <div className="col">
        <div className="card text-center">
            <div className="card-header">
                <h4 className='fw-normal' >Pro Plan</h4>
            </div>
                <div className="card-body">
                    <h1 className='card-title '>
                        $ <small className='text-dark'>79/Month</small>
                    </h1>
                    <ul className='list-unstled py-3'>
                        <h5>Available Features</h5>
                        <li> Access to selected free courses.</li>
                        <li>No certification upon completion.</li>
                        <li>Ad-supported platform.</li>
                        <li>Access to exclusive Pro Plan community forums.</li>
                        <li>Early access to new courses and updates.</li>
                    </ul>
                    <button className='btn  text-white btn-lg top w-100'>Get Started</button>
                </div>
        </div>
    </div>

        </div>
       </main>
    </div>
</section>
    </>
  )
}

export default Pricingcard