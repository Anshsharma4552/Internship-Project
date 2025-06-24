import React, { useState } from 'react';
import { NavbarMenu } from '../Mockdata/data';
import { motion } from 'framer-motion';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DownloadIcon from '@mui/icons-material/Download';
import ResponsiveMenu from './ResponsiveMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    if (link === '/locations' || link === '/gallery') {
      navigate(link); // Navigate to these full-page routes
    } else if (link.startsWith('#')) {
      // If we're not on home page, navigate to home with hash
      if (location.pathname !== '/') {
        navigate('/' + link); // This will trigger the useEffect in Home component
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update URL with hash
        window.history.pushState(null, null, link);
      }
    } else {
      // For non-anchor links, navigate normally
      navigate(link);
    }
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'https://websjyoti.com/web-designing.pdf';
    link.download = 'brochure.pdf'; // This suggests a filename for download
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='w-full'
      >
        <div className='flex justify-between items-center py-2 px-4 md:px-6 lg:px-8 w-full'>
          {/* Logo */}
          <div>
            <Link to="/">
              <img src='/image.png' alt='Logo' className="h-25 w-auto object-contain m-2 cursor-pointer" />
            </Link>
          </div>

          {/* Menu Items */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-6'>
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  {(item.link === '/' || item.title === 'Home') ? (
                    <Link
                      to="/"
                      className='inline-block text-base xl:text-lg py-1 px-2 xl:px-3 text-gray-600 hover:text-blue-600 transition-all duration-300 font-semibold'
                    >
                      {item.title}
                    </Link>
                  ) : (item.link === '/locations' || item.link === '/gallery') ? (
                    <Link
                      to={item.link}
                      className='inline-block text-base xl:text-lg py-1 px-2 xl:px-3 text-gray-600 hover:text-blue-600 transition-all duration-300 font-semibold'
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.link)}
                      className='inline-block text-base xl:text-lg py-1 px-2 xl:px-3 text-gray-600 hover:text-blue-600 transition-all duration-300 font-semibold cursor-pointer'
                    >
                      {item.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className='hidden lg:flex items-center space-x-3 text-lg'>
            {/* Download Brochure Button */}
            <button 
              onClick={handleDownloadBrochure}
              className='flex items-center gap-2 text-blue-600 border border-blue-600 font-semibold rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300'
            >
              <DownloadIcon className='text-lg' />
              Brochure
            </button>
            
            {/* Register Button */}
            <Link to="/register">
              <button className='text-white bg-blue-600 font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition-colors duration-300'>
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className='lg:hidden' onClick={() => setIsopen(!isopen)}>
            <MenuRoundedIcon className='text-4xl cursor-pointer' />
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <ResponsiveMenu isopen={isopen} setIsopen={setIsopen} />
    </>
  );
}

export default Navbar;
