"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, RotateCcw } from 'lucide-react';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    gender: '',
    fullName: '',
    dateOfBirth: '',
    email: '',
    contactNumber: '',
    nationality: '',
    maritalStatus: '',
    academicAchievement: '',
    institution: '',
    yearAwarded: '',
    languageProficiency: '',
    workExperience: '',
    countryOfInterest: '',
    academicLevel: '',
    intendedCourse: '',
    choiceOfInstitution: '',
    financing: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const clearForm = () => {
    setFormData({
      gender: '',
      fullName: '',
      dateOfBirth: '',
      email: '',
      contactNumber: '',
      nationality: '',
      maritalStatus: '',
      academicAchievement: '',
      institution: '',
      yearAwarded: '',
      languageProficiency: '',
      workExperience: '',
      countryOfInterest: '',
      academicLevel: '',
      intendedCourse: '',
      choiceOfInstitution: '',
      financing: ''
    });
  };

  const genderOptions = ['Male', 'Female'];
  const maritalOptions = ['Single', 'Married'];
  const academicOptions = ['HSSC/INTERMEDIATE', 'O/A Levels', 'WAEC', 'DIPLOMA (OND/HND)', 'BACHELORS', 'MASTERS'];
  const languageOptions = ['Yes', 'No'];
  const countryOptions = ['Australia', 'UK', 'USA', 'UAE', 'New Zealand', 'Singapore', 'Europe', 'China', 'Malaysia'];
  const levelOptions = ['Foundation', 'Bachelor', 'Master', 'PhD', 'Top-up/Pre-Master'];
  const financingOptions = ['Self', 'Parents', 'Funded Scholarship', 'Loans'];

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/inquiry.jpg'
          alt='inquiry-hero'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Div - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Contact Info
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get expert advice on your decision of educational destinations!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Call Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-700">Pakistan: +92 333 1900448</p>
                    <p className="text-gray-700">Nigeria: +234 810 188 3153</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-700 rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-700">
                      Pakistan: <a href="mailto:sales@pfl.ae" className="hover:text-gray-900 ml-1">sales@pfl.ae</a>
                    </p>
                    <p className="text-gray-700">
                      Nigeria: <a href="mailto:ngsales12@pfl.ae" className="hover:text-gray-900 ml-1">ngsales12@pfl.ae</a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-700 rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">Pakistan, Nigeria, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Div - Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Student Inquiry Form
                </h2>
                <button
                  onClick={clearForm}
                  className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear Form</span>
                </button>
              </div>

              <div className="space-y-6">
                {/* Row 1: Gender and Full Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Gender</option>
                      {genderOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Row 2: Date of Birth and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Row 3: Contact Number and Nationality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your contact number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your nationality"
                    />
                  </div>
                </div>

                {/* Row 4: Marital Status and Academic Achievement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marital Status *
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Status</option>
                      {maritalOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recent Academic Achievement *
                    </label>
                    <select
                      name="academicAchievement"
                      value={formData.academicAchievement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Achievement</option>
                      {academicOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 5: Institution and Year Awarded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution *
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Awarded *
                    </label>
                    <input
                      type="number"
                      name="yearAwarded"
                      value={formData.yearAwarded}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter year (e.g., 2024)"
                      min="1950"
                      max="2030"
                    />
                  </div>
                </div>

                {/* Row 6: Language Proficiency Test and Work Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Have you taken Language Proficiency Test? *
                    </label>
                    <select
                      name="languageProficiency"
                      value={formData.languageProficiency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Option</option>
                      {languageOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Experience (if any)
                    </label>
                    <input
                      type="text"
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Brief work experience details"
                    />
                  </div>
                </div>

                {/* Row 7: Country of Interest and Academic Level */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country of Interest *
                    </label>
                    <select
                      name="countryOfInterest"
                      value={formData.countryOfInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Country</option>
                      {countryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Please provide the level of academic interest *
                    </label>
                    <select
                      name="academicLevel"
                      value={formData.academicLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Level</option>
                      {levelOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 8: Intended Course and Choice of Institution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intended Course *
                    </label>
                    <input
                      type="text"
                      name="intendedCourse"
                      value={formData.intendedCourse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your intended course"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choice of Institution *
                    </label>
                    <input
                      type="text"
                      name="choiceOfInstitution"
                      value={formData.choiceOfInstitution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your preferred institution"
                    />
                  </div>
                </div>

                {/* Row 9: Financing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How you will be financing your educational expenses *
                  </label>
                  <select
                    name="financing"
                    value={formData.financing}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                  >
                    <option value="">Select Financing Option</option>
                    {financingOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;