import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NavbarBanner from './Components/Navbar/NavbarBanner';
import Hero from './Components/Hero/Hero';
import NumberCounter from './Components/NumberCounter/NumberCounter';
import About from './Components/AboutUs/About';
import Course from './Components/Courses/Course';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import CorporateTrainingForm from './Components/Register/CorporateTrainingForm';
import Locations from './Components/Location/Location';
import Gallery from './Components/Gallery/Gallery';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CorporateTrainingForm />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;