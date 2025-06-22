import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaCheck } from "react-icons/fa";

function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <>
      <footer id='contact' className="bg-gray-900 justify-center items-center text-white py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">💬 Have Any Query? Contact Us</h2>
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 md:p-8 shadow-xl">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="block text-sm font-medium mb-2">
                        First Name <span className="text-red-400">*</span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                          errors.firstName ? 'border-red-400' : 'border-gray-600'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <div className="block text-sm font-medium mb-2">
                        Last Name <span className="text-red-400">*</span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                          errors.lastName ? 'border-red-400' : 'border-gray-600'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <div className="block text-sm font-medium mb-2">
                      Subject <span className="text-red-400">*</span>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all ${
                        errors.subject ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Enter the subject of your query"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <div className="block text-sm font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-vertical ${
                        errors.message ? 'border-red-400' : 'border-gray-600'
                      }`}
                      placeholder="Please describe your query in detail"
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Submit Query
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                    <FaCheck className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Submitted Successfully!</h3>
                  <p className="text-gray-300 text-lg">Thank you for your query. We'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>

          {/* Existing Footer Content */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-center">
        {/* About Section */}
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">🏢 About WebJyoti</h3>
            <p className="text-gray-300 text-base leading-relaxed">
            WebJyoti is a trusted name in corporate training and digital solutions with over 17 years of experience. We specialize in Data Analytics, Excel VBA, SQL, Web Development, and BI tools.
            </p>
            <div className="pt-4">
            <h4 className="text-xl font-semibold mb-3">📞 Contact Us</h4>
            <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                📍 <a
                    href="https://www.google.com/maps/place/M-24+Old+DLF+Colony,+Sector+14,+Gurugram+–+122001,+Haryana,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                    title="Find us on Google Maps"
                >
                    M-24 Old DLF Colony, Sector 14, Gurugram – 122001, Haryana, India
                </a>
                </p>
                <p className="text-gray-300 text-sm">📞 +91 8802000175</p>
                <p className="text-gray-300 text-sm">
                📧 <a href="mailto:info@webjyoti.com" className="hover:text-cyan-400 transition-colors">info@webjyoti.com</a>
                </p>
                <p className="text-gray-300 text-sm">
                📧 <a href="mailto:sales@webjyoti.com" className="hover:text-cyan-400 transition-colors">sales@webjyoti.com</a>
                </p>
            </div>
            </div>
        </div>

        {/* Courses Section */}
        <div className="space-y-3">
            <h3 className="text-2xl font-semibold mb-4">🎓 Our Courses</h3>
            <nav>
            <ul className="text-gray-300 text-sm space-y-2">
                <li><a href="https://www.websjyoti.com/seo_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Digital Marketing</a></li>
                <li><a href="https://exceltraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Advanced Excel VBA</a></li>
                <li><a href="https://phptraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">PHP Web Designing</a></li>
                <li><a href="https://www.websjyoti.com/java_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Java J2EE Training</a></li>
                <li><a href="https://www.websjyoti.com/sql_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">SQL / MySQL Training</a></li>
                <li><a href="https://www.websjyoti.com/dsa_training.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">C, C++ Data Structures</a></li>
                <li><a href="https://exceltraininggurgaon.in/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Excel Corporate Training</a></li>
            </ul>
            </nav>
        </div>

        {/* Useful Links Section */}
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">🔗 Useful Links</h3>
            <nav>
            <ul className="text-gray-300 text-sm space-y-2">
                <li><a href="https://www.websjyoti.com/media.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Media Coverage</a></li>
                <li><a href="https://www.websjyoti.com/websjyoti-promoters.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Our Community</a></li>
                <li><a href="https://www.websjyoti.com/websjyoti-alumni.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Our Alumni</a></li>
                <li><a href="https://www.websjyoti.com/career.php" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Career at Webs Jyoti</a></li>
            </ul>
            </nav>

            <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4">🌐 Follow Us</h3>
            <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/websjyoti" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="text-white text-lg" />
                </a>
                <a href="https://www.youtube.com/@hirdeshbhardwaj" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                <FaYoutube className="text-white text-lg" />
                </a>
                <a href="https://www.instagram.com/websjyoti" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="text-white text-lg" />
                </a>
                <a href="https://www.linkedin.com/company/webs-jyoti/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin className="text-white text-lg" />
                </a>
            </div>

            <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">📧 Newsletter</h4>
                <p className="text-gray-400 text-xs mb-3">Stay updated with our latest courses and offers</p>
                <div className="flex justify-center">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 max-w-[200px] px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                    Subscribe
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>


          <div className="border-t border-gray-700 mt-10 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved. Powered by{' '}
              <a
                href="https://www.websjyoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                title="Visit WebJyoti"
              >
                Webs Jyoti
              </a>
              {' '}| Empowering Digital Excellence Since 2009
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;