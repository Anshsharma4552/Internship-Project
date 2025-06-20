import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import NavbarBanner from './Components/Navbar/NavbarBanner';
import Hero from './Components/Hero/Hero';
import NumberCounter from './Components/NumberCounter/NumberCounter';
import About from './Components/AboutUs/About';
import Course from './Components/Courses/Course';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <NavbarBanner/>
      <Hero/>
      <NumberCounter/>
      <About/>
      <Course/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App