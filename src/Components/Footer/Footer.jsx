import React from 'react'

function Footer() {
  return (
    <>
    <footer id='contact' className="bg-gray-900 text-white py-[50px] px-6 md:px-10">
  <div className="grid md:grid-cols-3 gap-8 items-start">
    <div className="max-w-[400px] space-y-4">
      <h3 className="text-2xl font-semibold mb-2">🏢 About WebJyoti</h3>
      <p className="text-gray-300 text-lg leading-relaxed text-justify">
        WebJyoti is a trusted name in corporate training and digital solutions with over 17 years of experience. We specialize in Data Analytics, Excel VBA, SQL, Web Development, and BI tools.
      </p>
      <h4 className="text-xl font-semibold pt-4">📞 Contact Us</h4>
     <p className="text-gray-300 text-lg">
  📍 <a
    href="https://www.google.com/maps/place/M-24+Old+DLF+Colony,+Sector+14,+Gurugram+–+122001,+Haryana,+India"
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline hover:text-white"
  >
    M-24 Old DLF Colony, Sector 14, Gurugram – 122001, Haryana, India
  </a>
</p>

      <p className="text-gray-300 text-lg">📞 +91-+91 8802000175</p>
      <p className="text-gray-300 text-lg">
  📧 <a href="mailto:info@webjyoti.com" className="hover:text-white no-underline">info@webjyoti.com</a>
</p>
<p className="text-gray-300 text-lg">
  📧 <a href="mailto:sales@webjyoti.com" className="hover:text-white no-underline">sales@webjyoti.com</a>
</p>
    </div>

    <div className="space-y-2 text-center">
      <h3 className="text-2xl font-semibold mb-2 text-center">🎓 Our Courses</h3>
      <ul className="text-gray-300 text-lg space-y-2 text-center">
    <li><a href="https://www.websjyoti.com/seo_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Digital Marketing</a></li>
    <li><a href="https://exceltraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Advanced Excel VBA</a></li>
    <li><a href="https://phptraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">PHP Web Designing</a></li>
    <li><a href="https://www.websjyoti.com/java_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Java J2EE Training</a></li>
    <li><a href="https://www.websjyoti.com/sql_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">SQL / MySQL Training</a></li>
    <li><a href="https://www.websjyoti.com/dsa_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">C, C++ Data Structures</a></li>
    <li><a href="https://exceltraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Excel Corporate Training</a></li>
  </ul>
    </div>
    <div className="max-w-[300px] ml-auto space-y-3">
      <h3 className="text-2xl font-semibold mb-2 text-right">🔗 Useful Links</h3>
      <ul className="text-gray-300 text-lg space-y-2 text-right">
        <li><a href="https://www.websjyoti.com/media.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Media Coverage</a></li>
        <li><a href="https://www.websjyoti.com/websjyoti-promoters.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Our Community</a></li>
        <li><a href="https://www.websjyoti.com/websjyoti-alumni.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Our Alumni</a></li>
        <li><a href="https://www.websjyoti.com/career.php" target="_blank" rel="noopener noreferrer" className="hover:text-white">Career at Webs Jyoti</a></li>
      </ul>
    </div>
  </div>
  <p className="text-lg mt-4 text-center">
  © {new Date().getFullYear()} All Rights Reserved Powered by{' '}
  <a
    href="https://www.websjyoti.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-500 hover:text-white"
  >
    Webs Jyoti
  </a>
</p>

</footer>

</>
  )
}

export default Footer