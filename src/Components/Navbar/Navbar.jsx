import React, { useState } from 'react';
import { NavbarMenu } from '../Mockdata/data';
import { motion } from 'framer-motion';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ResponsiveMenu from './ResponsiveMenu';

function Navbar() {
    const [isopen,setIsopen]=useState(false)
  return (
    <>
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className='fixed top-0 w-full z-50 bg-white shadow '
    >
        <div className='flex justify-between items-center py-2 px-4 md:px-6 lg:px-8 w-full'>
            {/* {Logo Section} */}
            <div>
                <img src='src/assets/image.png' alt='Logo' className="h-25 w-auto object-contain m-2"/>
            </div>
            {/* {Home Section} */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    {
                        NavbarMenu.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <a href={item.link}
                                        className='inline-block text-base xl:text-lg py-1 px-2 xl:px-3 text-gray-600 
              hover:text-blue-600 transition-all duration-300 font-semibold'
                                    >{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* {About Us Section} */}
            {/* {Training Programs/Courses Section} */}
            {/* {Testimonials Section} */}
            {/* {Resources Section} */}
            {/* {Contact Us Section} */}
            <div className='hidden lg:block  space-x-6 text-lg'>
                <button className='font-semibold'>Sign in</button>
                <button className='text-white bg-blue-600 font-semibold rounded-full px-6 py-2'>Register</button>
            </div>
            <div className='lg:hidden' onClick={()=>setIsopen(!isopen)}>
                <MenuRoundedIcon className='text-4xl'/>
            </div>
        </div>
    </motion.div>
    {/* mobile sidebar section */}
    <ResponsiveMenu isopen={isopen}/>
    </>
  )
}

export default Navbar