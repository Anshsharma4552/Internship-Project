import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NavbarMenu } from '../Mockdata/data';

function ResponsiveMenu({ isopen, setIsopen }) {
  const location = useLocation();

  // Function to handle navigation and close menu
  const handleNavigation = (link) => {
    setIsopen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = link;
    } else {
      // If on home page, just scroll to section
      if (link.startsWith('#')) {
        setTimeout(() => {
          const element = document.querySelector(link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isopen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-white text-black py-10 m-6 rounded-3xl shadow-lg">
            <ul className="flex flex-col justify-center items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  {item.title === 'Home' ? (
                    <Link
                      to="/"
                      onClick={() => setIsopen(false)}
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.link)}
                      className="hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.title}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/register"
                  onClick={() => setIsopen(false)}
                  className="text-white bg-blue-600 font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition-colors duration-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;