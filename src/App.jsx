import {} from 'react'

import './App.css'
import './ComponentBenefit/Benefit.css'
import './ComponentBenefit/Image/Testimon.css'
import Navbar from './Component/Navbar'
import Home from './ComponentHome/Home'
import Benefit from './ComponentBenefit/Benefit'
import OurCourses from './ComponentBenefit/OurCourses'
import Testimon from './ComponentBenefit/Image/Testimon'
import Pricingcard from './ComponentBenefit/Pricingcard'
import Foot from './ComponentHome/Foot'
// import { Route, Routes } from 'react-router-dom'
import OnlineCOurses from './Page2/OnlineCOurses'


Routes
// import Box from './ComponentBenefit/Box'

function App() {

  return (
    <>

     <Navbar/>
     <Home/>
     <Benefit/>
     <Testimon/>
     <Pricingcard/>
     <OurCourses/>
     <OnlineCOurses/>
{/* <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Benefit' element={<Benefit/>}/>
    <Route path='/OurCourses' element={<OurCourses/>}/>
    <Route path='/Testimon' element={<Testimon/>}/>
    <Route path='/Pricingcard' element={<Pricingcard/>}/>
    <Route path='/OnlineCOurses' element={<OnlineCOurses/>}/>
   </Routes> */}
     <Foot/>
     
     {/* <Box/> */}
    </>
  )
}

export default App
