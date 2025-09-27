"use client"
import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, GraduationCap, DollarSign, RotateCcw } from 'lucide-react';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    nationality: '',
    gender: '',
    maritalStatus: '',
    dateOfBirth: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    homeAddress: '',
    
    // Sponsorship Details
    tuitionPayer: '',
    sponsorOccupation: '',
    sponsorContact: '',
    sponsorEmail: '',
    
    // Academic Details
    academicAchievement: '',
    courseGrades: '',
    institutionAttended: '',
    yearAwarded: '',
    languageProficiency: '',
    testName: '',
    testDate: '',
    testScores: '',
    workExperience: '',
    academicLevel: '',
    countryOfInterest: '',
    intendedCourse: '',
    choiceOfInstitution: '',
    
    // Registration Fee
    serviceCategory: '',
    registrationFeeAmount: '',
    registrationFeePaid: '',
    datePaid: ''
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
    console.log('Registration Form submitted:', formData);
  };

  const clearForm = () => {
    setFormData({
      firstName: '', lastName: '', nationality: '', gender: '', maritalStatus: '',
      dateOfBirth: '', phoneNumber: '', whatsappNumber: '', email: '', homeAddress: '',
      tuitionPayer: '', sponsorOccupation: '', sponsorContact: '', sponsorEmail: '',
      academicAchievement: '', courseGrades: '', institutionAttended: '', yearAwarded: '',
      languageProficiency: '', testName: '', testDate: '', testScores: '', workExperience: '',
      academicLevel: '', countryOfInterest: '', intendedCourse: '', choiceOfInstitution: '',
      serviceCategory: '', registrationFeeAmount: '', registrationFeePaid: '', datePaid: ''
    });
  };

  // Dropdown Options
  const genderOptions = ['Male', 'Female'];
  const maritalOptions = ['Single', 'Married'];
  const tuitionPayerOptions = ['Self', 'Parents', 'Employer / Government'];
  const sponsorOccupationOptions = ['Self Employed (Businessperson)', 'Job Holder'];
  const academicOptions = ['HSSC/ intermediate', 'O/ A Levels', 'WAEC', 'Diploma (OND /HND)', 'Bachelors', 'Masters'];
  const languageOptions = ['Yes', 'No'];
  const academicLevelOptions = ['Foundation', 'Bachelors', 'Top-up /Pre-Master', 'Master', 'PHD'];
  const countryOptions = ['Australia', 'Canada', 'New Zealand', 'UK', 'USA', 'Other'];
  const serviceCategoryOptions = ['GOLD - Complimentary', 'TITANIUM USD 350', 'PLATINUM USD 500'];

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            STUDENT REGISTRATION FORM
          </h1>
          <div className="flex justify-center">
            <button
              onClick={clearForm}
              className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear Form</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="space-y-12">
            
            {/* PERSONAL DETAILS SECTION */}
            <div>
              <div className="flex items-center mb-8">
                <User className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">PERSONAL DETAILS</h2>
              </div>
              
              <div className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                    <p className="text-xs text-gray-500 mt-1">As per Passport</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Last Name"
                    />
                    <p className="text-xs text-gray-500 mt-1">As per Passport</p>
                  </div>
                </div>

                {/* Nationality and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="Nationality"
                    />
                  </div>
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
                      <option value="">Gender</option>
                      {genderOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Marital Status and Date of Birth */}
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
                      <option value="">Marital Status</option>
                      {maritalOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
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
                    <p className="text-xs text-gray-500 mt-1">Please enter your date of birth.</p>
                  </div>
                </div>

                {/* Phone Number and WhatsApp Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="+1-555-555-5555"
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code if applicable.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="WhatsApp Number"
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code if applicable.</p>
                  </div>
                </div>

                {/* Email and Home Address */}
                <div className="space-y-6">
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
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Address *
                    </label>
                    <textarea
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors resize-vertical"
                      placeholder="Home Address"
                    />
                    <p className="text-xs text-gray-500 mt-1">Complete mailing address with zip code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SPONSORSHIP DETAILS SECTION */}
            <div>
              <div className="flex items-center mb-8">
                <DollarSign className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">SPONSORSHIP DETAILS</h2>
              </div>
              
              <p className="text-gray-700 mb-6">Who is supporting you with your education and other related expenses?</p>
              
              <div className="space-y-6">
                {/* Tuition Payer and Sponsor Occupation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Who is paying the Tuition Fees? *
                    </label>
                    <select
                      name="tuitionPayer"
                      value={formData.tuitionPayer}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Who is paying the Tuition Fees?</option>
                      {tuitionPayerOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Occupation of Sponsor *
                    </label>
                    <select
                      name="sponsorOccupation"
                      value={formData.sponsorOccupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Occupation of Sponsor</option>
                      {sponsorOccupationOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sponsor Contact and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Details of Sponsor *
                    </label>
                    <input
                      type="text"
                      name="sponsorContact"
                      value={formData.sponsorContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Contact Details of Sponsor"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID of Sponsor *
                    </label>
                    <input
                      type="email"
                      name="sponsorEmail"
                      value={formData.sponsorEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Email ID of Sponsor"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ACADEMIC DETAILS SECTION */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">ACADEMIC DETAILS</h2>
              </div>
              
              <p className="text-gray-700 mb-6">Provide details of your latest education</p>
              
              <div className="space-y-6">
                {/* Academic Achievement and Course Grades */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recent academic achievement *
                    </label>
                    <select
                      name="academicAchievement"
                      value={formData.academicAchievement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Recent academic achievement</option>
                      {academicOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course and Grades Achieved *
                    </label>
                    <input
                      type="text"
                      name="courseGrades"
                      value={formData.courseGrades}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Course and Grades Achieved"
                    />
                  </div>
                </div>

                {/* Institution and Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Attended *
                    </label>
                    <input
                      type="text"
                      name="institutionAttended"
                      value={formData.institutionAttended}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Institution Attended"
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
                      placeholder="Year Awarded"
                      min="1950"
                      max="2030"
                    />
                  </div>
                </div>

                {/* Language Proficiency Test */}
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
                      <option value="">Have you taken Language Proficiency Test?</option>
                      {languageOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Provide Test Name *
                    </label>
                    <input
                      type="text"
                      name="testName"
                      value={formData.testName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Provide Test Name"
                    />
                  </div>
                </div>

                {/* Test Date and Scores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="testDate"
                      value={formData.testDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Overall Scores *
                    </label>
                    <input
                      type="text"
                      name="testScores"
                      value={formData.testScores}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Overall Scores"
                    />
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Experience *
                  </label>
                  <textarea
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Work Experience"
                  />
                  <p className="text-xs text-gray-500 mt-1">if Any</p>
                </div>

                {/* Academic Level and Country of Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <option value="">Please provide the level of academic interest</option>
                      {academicLevelOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
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
                      <option value="">Country of Interest</option>
                      {countryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">For Multiple options Choose other and provide details</p>
                  </div>
                </div>

                {/* Intended Course and Choice of Institution */}
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
                      placeholder="Intended Course"
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
                      placeholder="Choice of Institution"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* REGISTRATION FEE SECTION */}
            <div>
              <div className="flex items-center mb-8">
                <DollarSign className="w-6 h-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">REGISTRATION FEE</h2>
              </div>
              
              <div className="space-y-6">
                {/* Service Category and Registration Fee Amount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services Category *
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Services Category</option>
                      {serviceCategoryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Fee Amount *
                    </label>
                    <input
                      type="text"
                      name="registrationFeeAmount"
                      value={formData.registrationFeeAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Registration Fee Amount"
                    />
                  </div>
                </div>

                {/* Registration Fee Paid and Date Fee Paid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Fee Paid *
                    </label>
                    <input
                      type="text"
                      name="registrationFeePaid"
                      value={formData.registrationFeePaid}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Registration Fee Paid"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Fee Paid *
                    </label>
                    <input
                      type="date"
                      name="datePaid"
                      value={formData.datePaid}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handleSubmit}
                className="bg-gray-900 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;