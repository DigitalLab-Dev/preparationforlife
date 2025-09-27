import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Free Counseling', href: '/free-counseling' },
    { name: 'Registration', href: '/registration' },
    { name: 'Mpower', href: '/mpower' },
    { name: 'Service Fee', href: '/service-fee' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { 
      Icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
        </svg>
      ), 
      href: '#', 
      label: 'Pinterest' 
    }
  ];

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* First Section - Logo and Social Icons */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <img
                className="h-22 w-auto"
                src="/logo.png"
                alt="PFL Logo"
              />
            </div>
            
            {/* Social Media */}
            <div>
              <span className="text-white text-lg font-semibold mb-4 block">
                Follow Us
              </span>
              <div className="flex space-x-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Second Section - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Section - Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300 text-sm">
              {/* Phone Numbers */}
              <div>
                <p>+92 333 1900448</p>
                <p>+234 810 188 3153</p>
              </div>
              
              {/* Email Addresses */}
              <div>
                <p>
                  <a href="mailto:sales@pfl.ae" className="hover:text-white transition-colors duration-200">
                    sales@pfl.ae
                  </a>
                </p>
                <p>
                  <a href="mailto:ngsales12@pfl.ae" className="hover:text-white transition-colors duration-200">
                    ngsales12@pfl.ae
                  </a>
                </p>
              </div>
              
              {/* Locations */}
              <div>
                <p>Pakistan, Nigeria, UAE</p>
              </div>
              
              {/* Opening Hours */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
                <p>Mon - Fri: 09:00 am - 05:00 pm</p>
                <p>Sat: 10:00 am - 03:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            All rights reserved by PFL Group International FZ LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;