import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NavbarBanner from './Components/Navbar/NavbarBanner';
import Hero from './Components/Hero/Hero';
import NumberCounter from './Components/NumberCounter/NumberCounter';
import About from './Components/AboutUs/About';
import Course from './Components/Courses/Course';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import CorporateTrainingForm from './Components/Register/CorporateTrainingForm';
import Locations from './Components/Location/Location';  // Add this
import Gallery from './Components/Gallery/Gallery';      // Add this

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="pt-3">
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <About />
      <Course />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CorporateTrainingForm />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;

