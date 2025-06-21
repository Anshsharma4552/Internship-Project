import React from 'react'
import { motion,AnimatePresence} from "framer-motion"
function ResponsiveMenu({isopen}) {
  return (
    <AnimatePresence mode='wait'>
        {
            isopen && (<motion.div 
            initial={{opacity:0 ,y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
            >
                <div className='text-xl font-semibold uppercase bg-gray-100 text-gray-700 py-10 m-6 rounded-3xl'>
                    <ul className='flex flex-col justify-center items-center gap-6'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Module</li>
                        <li>Testimonials</li>
                        <li>Locations</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </motion.div>)
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu