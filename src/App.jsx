import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import NavbarBanner from './Components/Navbar/NavbarBanner';
import Hero from './Components/Hero/Hero';
import NumberCounter from './Components/NumberCounter/NumberCounter';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <NavbarBanner/>
      <Hero/>
      <NumberCounter/>
    </div>
  )
}

export default App