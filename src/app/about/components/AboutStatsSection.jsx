import React from 'react';
import { Users, BookOpen, Award, UserCheck } from 'lucide-react';

const AboutStatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10532",
      title: "Satisfied Students"
    },
    {
      icon: BookOpen,
      number: "7984", 
      title: "Courses Completed"
    },
    {
      icon: Award,
      number: "5382",
      title: "Satisfied Students"
    },
    {
      icon: UserCheck,
      number: "354",
      title: "Expert Advisors"
    }
  ];

  return (
    <section className="py-10 lg:py-15 bg-gray-900 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-900 rounded-full p-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Number */}
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    {stat.number}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {stat.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;