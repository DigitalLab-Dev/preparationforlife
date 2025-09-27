import React from 'react';

const AboutCompanySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Part - About Company */}
          <div className="space-y-6">
            {/* Image */}
            <div className="mb-8">
              <img
                src="/part-1.jpg"
                alt="About Company"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* About Company Text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About Company:
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Preparation for Life, your trusted partner in navigating the exciting journey of studying abroad. Founded in 1997, we are dedicated to empowering students to achieve their academic and career aspirations by providing expert guidance and personalized support throughout the entire process. For over 28 years, Preparation for Life has stood a beacon of hope and guidance for students navigating the complex world of university admissions.
                </p>
                
                <p>
                  Our dynamic approach, personalized services, and unwavering commitment to our clients success have set us apart in the education consultancy sector. We understand that studying abroad is a life-changing decision filled with opportunities for personal growth and cultural enrichment. Our team of experienced consultants is dedicated to helping students find the right educational programs that align with their goals, interests, and aspirations.
                </p>
                
                <p>
                  We believe that every student deserves a tailored approach to their unique journey, and we take pride in offering one-on-one consultations to ensure that each individual receives the attention and resources they need. Our comprehensive services include assistance with university and course selection, visa application guidance, scholarship opportunities, and pre-departure briefings. We also provide valuable resources to help students acclimatise to their new environment, ensuring a smooth transition into their host country.
                </p>
                
                <p>
                  With strategically located offices in Pakistan and Nigeria, we are well-equipped to support students from diverse backgrounds and regions. In an era where education is more crucial than ever, Preparation for Life remains steadfast in its mission to inspire, support, and transform the lives of students worldwide. With our extensive experience, dedication to excellence, and a focus on personalized guidance, we are excited to help the next generation of scholars reach their full potential and contribute meaningfully to the global community. Join us on this incredible journey and let us help you turn your dreams of studying abroad into reality. Together, we can pave the way for a brighter future.
                </p>
              </div>
            </div>
          </div>

          {/* Right Part - Mission & Vision */}
          <div className="space-y-6">
            {/* Image */}
            <div className="mb-8">
              <img
                src="/part-2.jpg"
                alt="Mission and Vision"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Mission & Vision Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Mission Statement:
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower students and professionals by providing personalized, ethical, and comprehensive educational guidance that supports informed decisions and successful global academic journeys.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Vision Statement:
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To be a trusted leader in education consultancy, shaping futures through transparent guidance, innovative solutions, and lifelong support for learners worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;