import React from 'react'

function Hero() {
  return (
    <>
    <section id='home'>
    <div className="relative w-full h-screen overflow-hidden">
  {/* Blurred Background Image */}
  <img
    src="/image copy.png" // replace with actual image path
    alt="Corporate Training"
    className="absolute inset-0 w-full h-full object-cover filter  blur-xs brightness-100"
  />

  {/* Text Content Overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Professional Corporate Training
    </h1>
    <p className="text-lg md:text-xl max-w-4xl mb-6">
      At WebsJyoti, we specialize in customized corporate training solutions that empower professionals and teams to master high-demand skills in today’s digital workplace. With over 17 years of experience, we’ve helped hundreds of organizations enhance productivity and stay ahead in a competitive market.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
      Get Started
    </button>
  </div>
</div>

    </section>
    </>
  )
}

export default Hero