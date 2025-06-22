import React, { useState } from 'react'

function CorporateTrainingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    contactNumber: '',
    organization: '',
    department: '',
    courseInterested: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const courses = [
    'Leadership Development',
    'Digital Transformation',
    'Data Analytics & Business Intelligence',
    'Project Management',
    'Communication Skills',
    'Team Building & Collaboration',
    'Technical Skills Training',
    'Sales & Marketing',
    'HR Management',
    'Financial Management',
    'Custom Training Program'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select your gender'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required'
    } else if (!/^[0-9+\-\s\(\)]{10,}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number'
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required'
    }
    
    if (!formData.courseInterested) {
      newErrors.courseInterested = 'Please select a course'
    }
    
    return newErrors
  }

  const handleSubmit = async () => {
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        fullName: '',
        gender: '',
        email: '',
        contactNumber: '',
        organization: '',
        department: '',
        courseInterested: '',
        message: ''
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div id="register" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering with WebsJyoti Corporate Training. 
            Our team will contact you within 24 hours to discuss your training requirements.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
          >
            Register Another Person
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Corporate Training Registration
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Join WebsJyoti's Professional Development Programs
          </p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Gender *</label>
            <div className="flex space-x-6">
              {['Male', 'Female', 'Other'].map((gender) => (
                <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* Email and Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="your.email@company.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>
          </div>

          {/* Organization and Department Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700">
                College / Organization Name *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                  errors.organization ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="Your organization name"
              />
              {errors.organization && <p className="text-red-500 text-sm">{errors.organization}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="department" className="block text-sm font-semibold text-gray-700">
                Department <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-gray-400"
                placeholder="HR, IT, Sales, etc."
              />
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-2">
            <label htmlFor="courseInterested" className="block text-sm font-semibold text-gray-700">
              Course Interested In *
            </label>
            <select
              id="courseInterested"
              name="courseInterested"
              value={formData.courseInterested}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 ${
                errors.courseInterested ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            {errors.courseInterested && <p className="text-red-500 text-sm">{errors.courseInterested}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message or Note <span className="text-gray-400">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-gray-400 resize-none"
              placeholder="Tell us about your specific training needs or any questions you have..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-200 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Register for Training'
              )}
            </button>
          </div>

          {/* Info Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 text-blue-600 mt-0.5">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-800 font-medium">What happens next?</p>
                <p className="text-sm text-blue-700 mt-1">
                  Our training consultant will contact you within 24 hours to discuss your requirements and customize a training program for your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateTrainingForm