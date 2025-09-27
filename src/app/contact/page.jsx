"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const destinations = [
    'Australia',
    'Canada', 
    'China',
    'Europe',
    'Malaysia',
    'New Zealand',
    'Singapore',
    'USA',
    'UK',
    'UAE'
  ];

  return (
    <div>
      {/* Hero Image Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/contact-hero.jpg'
          alt='about-hero'
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
                    <p className="text-gray-700">
                      Pakistan: +92 333 1900448
                    </p>
                    <p className="text-gray-700">
                      Nigeria: +234 810 188 3153
                    </p>
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
                      Pakistan: 
                      <a href="mailto:sales@pfl.ae" className="hover:text-gray-900 ml-1">
                        sales@pfl.ae
                      </a>
                    </p>
                    <p className="text-gray-700">
                      Nigeria: 
                      <a href="mailto:ngsales12@pfl.ae" className="hover:text-gray-900 ml-1">
                        ngsales12@pfl.ae
                      </a>
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
                    <p className="text-gray-700">
                      Pakistan, Nigeria, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Div - Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                DO YOU HAVE A QUESTION?
              </h2>

              <div className="space-y-6">
                {/* First Row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your full name"
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

                {/* Second Row: Phone and Study Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Study Destination
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Text Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your educational goals and how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
                  >
                    Submit Now
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

export default ContactPage;