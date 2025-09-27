import React from 'react';
import {
  Check,
  Heart,
  Shield,
  Users,
  Globe,
  Award,
  BookOpen,
  Target,
} from 'lucide-react';

const CoreValuesSection = () => {
  const coreValues = [
    { icon: Shield, text: 'Honesty' },
    { icon: Users, text: 'Professionalism' },
    { icon: Award, text: 'Integrity' },
    { icon: Heart, text: 'Customer Loyalty' },
    { icon: Target, text: 'Ethics' },
    { icon: Globe, text: 'Improving the Organisation' },
    { icon: BookOpen, text: 'Love for Education' },
  ];

  const whyChooseUs = [
    'Strong team of qualified staff with well-trained counsellors.',
    'Representing over 160 universities and colleges worldwide.',
    'Presence in Asia, Europe, Africa and the Middle East.',
    'Virtual Counselling Team in Nigeria.',
    'Fast growing global network.',
    'High visa success rate.',
    'Dedicated In-House University Representatives and Senior Recruitment Officers.',
    'A qualitative approach to ensure high conversion rates from application to enrollment.',
    'Formal partner agreements with reputable institutions from UK, Europe, Australia, New Zealand, Canada, USA and the UAE.',
  ];

  return (
    <section className="pb-16 bg-white">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/Values.jpg'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/values.png"
                alt="Core Values - Preparation for Life"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right - Core Values Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Core Values Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Values:
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Preparation For Life
              </h3>
            </div>

            {/* Introduction Text */}
            <p className="text-lg text-gray-700 leading-relaxed">
              At Preparation For Life we pride ourselves on the following key
              values:
            </p>

            {/* Core Values Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="bg-gray-900 rounded-full p-3 mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {value.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Description Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              With decades of experience, strong university partnerships, and
              dedicated counselors, we help you find the right course, handle
              applications, and secure visas smoothly. You can trust Preparation
              for Life to make your overseas education dream a stress-free
              reality.
            </p>

            {/* Why Preparation For Life Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why Preparation For Life?
              </h3>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
