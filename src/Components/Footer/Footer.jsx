import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    <div>
      <h4 className="text-xl font-bold mb-4">WebsJyoti – Corporate Training</h4>
      <p className="text-sm mb-2">M-24 Old DLF Colony, Sector 14, Gurugram – 122001, Haryana, India</p>
      <p className="text-sm mb-2">📞 +91 8802000175</p>
      <p className="text-sm mb-2">✉️ info@websjyoti.com</p>
      <p className="text-sm mt-4">© {new Date().getFullYear()} WebsJyoti. All rights reserved.</p>
    </div>
    <div className="md:pl-10 text-right">
      <h4 className="text-lg font-semibold mb-4">Resources & Connect</h4>
      <ul className="text-sm space-y-2">
        <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
        <li><a href="/courses" className="hover:text-blue-400 transition">Courses</a></li>
        <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
        <li><a href="/blog" className="hover:text-blue-400 transition">Blog</a></li>
      </ul>

      <div className="flex justify-end space-x-4 mt-6">
        <a href="https://www.linkedin.com/company/webs-jyoti/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/WebsJyotiTraining" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/websjyoti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@hirdeshbhardwaj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer