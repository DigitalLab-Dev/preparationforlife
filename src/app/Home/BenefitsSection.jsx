import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      title: "Study Benefits",
      description: "Discover the lifelong advantages of studying abroad and broaden your horizons."
    },
    {
      number: "02",
      title: "Application Process",
      description: "Enjoy a smooth and efficient application process for effortless study abroad success."
    },
    {
      number: "03",
      title: "Visa Guidance",
      description: "Let our visa experts handle the complexities so that you can focus on your future."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-l-4 border-gray-900 pl-6 hover:border-gray-700 transition-colors duration-300"
            >
              {/* Header with title and number */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <span className="text-3xl md:text-4xl font-bold text-gray-900 opacity-60">
                  {benefit.number}
                </span>
              </div>
              
              {/* Description */}
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;