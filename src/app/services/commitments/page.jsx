import React from 'react';
import {
  Check,
  Target,
  Navigation,
  BookOpen,
  Users,
  MapPin,
  FileText,
  Calendar,
  GraduationCap,
  DollarSign,
  Award,
} from 'lucide-react';

const ServicesCommitmentSection = () => {
  const commitmentPrinciples = [
    {
      icon: Target,
      title: 'Securing the Best Course Offers',
      description:
        'We work diligently to find the most suitable academic options for you.',
    },
    {
      icon: Navigation,
      title: 'Guidance Every Step of the Way',
      description:
        'From application to admission, our team offers personalized support throughout the entire process.',
    },
    {
      icon: BookOpen,
      title: 'Putting Your Educational Goals First',
      description:
        'Your academic interests are our top priority in every recommendation we make.',
    },
  ];

  const offices = ['Nigeria', 'Pakistan', 'UAE'];

  const requiredDocuments = [
    {
      icon: FileText,
      text: 'Copies of academic certificates and English language test results',
    },
    {
      icon: Users,
      text: 'Contact details for two referees (at least one academic)',
    },
    {
      icon: GraduationCap,
      text: 'A CV (for postgraduate applicants), detailing responsibilities and experience',
    },
    {
      icon: DollarSign,
      text: 'An overview of your financial situation',
    },
  ];

  const eventBenefits = [
    'Meet university representatives in person',
    'Receive first-hand insights and advice',
    'Learn about scholarship options and application strategies',
  ];

  return (
    <section >
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/fee2.png'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/fee.png"
                alt="Our Services & Commitment - Preparation for Life"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right - Services & Commitment Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services & Commitment to You:
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Preparation For Life
              </h3>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed">
              At Preparation for Life, we are committed to helping you succeed.
              Our promise to every student is built on three key principles:
            </p>

            {/* Three Key Principles */}
            <div className="space-y-6">
              {commitmentPrinciples.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-gray-900 rounded-full p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {index + 1}. {principle.title}
                      </h4>
                      <p className="text-gray-700">{principle.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What We Offer Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                What we Offer:
              </h3>

              <p className="text-gray-700 leading-relaxed">
                We have established a network of trained International Student
                Advisors as your first point of contact. These professionals
                offer local, personalized guidance and are available at our
                regional offices in:
              </p>

              {/* Office Locations */}
              <div className="flex flex-wrap gap-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{office}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                To begin the process, book a consultation with one of our
                professional Preparation for Life consultants. To help us assess
                your case effectively, please prepare the following documents:
              </p>

              {/* Required Documents */}
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-gray-900" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {doc.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Seminars & Events Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-gray-900" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Seminars, Fairs & Educational Events:
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Stay informed and inspired by attending our interview sessions,
                seminars, and education fairs held throughout the year. These
                events provide invaluable opportunities to:
              </p>

              {/* Event Benefits */}
              <div className="space-y-3">
                {eventBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <p className="text-lg font-medium">
                  Visit your nearest Preparation for Life office to find out
                  about upcoming events and how to register.
                </p>
                <p className="text-xl font-bold mt-2">
                  Let us help you take the next step toward a brighter future!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCommitmentSection;
