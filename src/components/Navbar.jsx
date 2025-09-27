"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Chairman Message', href: '/about/chairman-message' },
        { name: 'Company Profile', href: '/about/company-profile' },
        { name: 'Mission Statement', href: '/about/mission-statement' },
        { name: 'Core Values', href: '/about/core-values' },
        { name: 'Policy and Terms', href: '/about/policy-terms' }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Services and Commitments', href: '/services/commitments' },
        { name: 'Application Process', href: '/services/application-process' },
        { name: 'Visa Guidance', href: '/services/visa-guidance' },
        { name: 'Service Fee', href: '/services/service-fee' },
        { name: 'MPower', href: '/services/mpower' }
      ]
    },
    {
      name: 'Destinations',
      href: '/destinations',
      dropdown: [
        { name: 'Study in Australia', href: '/destinations/australia' },
        { name: 'Study in Canada', href: '/destinations/canada' },
        { name: 'Study in China', href: '/destinations/china' },
        { name: 'Study in Europe', href: '/destinations/europe' },
        { name: 'Study in Malaysia', href: '/destinations/malaysia' },
        { name: 'Study in New Zealand', href: '/destinations/new-zealand' },
        { name: 'Study in Singapore', href: '/destinations/singapore' },
        { name: 'Study in USA', href: '/destinations/usa' },
        { name: 'Study in UK', href: '/destinations/uk' },
        { name: 'Study in UAE', href: '/destinations/uae' }
      ]
    },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className='w-full h-10 bg-gray-900 flex items-center justify-center gap-5 text-sm text-white'>
        <Link href='/inquiry'>Book Free Counselling Session</Link>
        <Link href='/registeration'>Student Registeration</Link>
      </div>
      <div className="max-w-7xl mx-auto py-5  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-18 w-auto"
              src="/logo.png"
              alt="Company Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                >
                  <a
                    href={item.href}
                    className="text-gray-900 hover:text-gray-700 px-3 py-2 text-md font-medium flex items-center transition-colors duration-200"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </a>

                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-150"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="text-gray-900 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex-1 transition-colors duration-200"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className="p-2 text-gray-900 hover:text-gray-700"
                  >
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div className={`ml-4 space-y-1 transition-all duration-200 ${
                  activeDropdown === item.name ? 'block' : 'hidden'
                }`}>
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="text-gray-600 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;