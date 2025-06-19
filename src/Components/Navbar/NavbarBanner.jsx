import React, { useState } from 'react'
import { motion } from 'framer-motion'

function NavbarBanner() {
    const [isopen,setIsopen]=useState(true)
  return (
    isopen && (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='bg-gray-500 text-white text-center text-m font-semibold p-1'>
            📞 +91 8802000175  |  ✉️ info@websjyoti.com  |  📍 M-24 Old DLF Colony, Sector 14, Gurugram
        </motion.div>
    )
  )
}

export default NavbarBanner