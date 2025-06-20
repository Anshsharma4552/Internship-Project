import React from 'react'

function Hero() {
  return (
    <>
    <section id='home'>
    <div class="relative w-full h-[700px] md:h-[660px] overflow-hidden">
          <img src="src/assets/image copy.png" alt="Training Banner" class="w-full h-full object-cover"></img>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h1 class="text-white text-3xl md:text-5xl font-bold drop-shadow-lg m-5">
                Professional Corporate Training
                </h1>
                {/* <p class="text-white text-2xl md:text-2xl font-semibold drop-shadow-lg text-center px-4 md:px-8 mt-3 mb-2">
                    Upskill Your Team with WebsJyoti’s Industry-Focused Training Programs
                </p> */}

                <p class="text-white text-lg md:text-xl font-medium text-center leading-relaxed px-4 md:px-0 max-w-4xl mx-auto mt-4 mb-6">
                        At WebsJyoti, we specialize in customized corporate training solutions that empower professionals and teams to master high-demand skills in today’s digital workplace. With over <strong>17 years of experience</strong>, we’ve helped hundreds of organizations enhance productivity and stay ahead in a competitive market.
                </p>

                <button class="mt-5 bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500 transition">
                Get Started
                </button>
            </div>
    </div>
    </section>
    </>
  )
}

export default Hero