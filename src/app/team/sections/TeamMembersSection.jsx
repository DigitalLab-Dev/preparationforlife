import React from 'react';
import { User } from 'lucide-react';

const TeamMembersSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Lawrie Green',
      designation: 'Chairman/CO-Director',
      email: 'sarah.johnson@pfl.ae',
      image:
        '/lawrie.png',
    },
    {
      id: 2,
      name: 'Hafeez-UR-Rehman',
      designation: 'Director Finance',
      email: 'hafeez.rehman@pfl.ae',
      image:
        '2.png',
    },
    {
      id: 3,
      name: 'Muhammad Rizwan',
      designation: 'Director Customer Service',
      email: 'cs@pfl.ae',
      image:
        '1.png',
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      designation: 'Application Coordinator',
      email: 'michael.rodriguez@pfl.ae',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Fatima Ali',
      designation: 'Student Counselor',
      email: 'fatima.ali@pfl.ae',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 6,
      name: 'David Thompson',
      designation: 'Marketing Manager',
      email: 'david.thompson@pfl.ae',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 7,
      name: 'Aisha Patel',
      designation: 'Finance Manager',
      email: 'aisha.patel@pfl.ae',
      image:
        'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 8,
      name: 'James Wilson',
      designation: 'Operations Manager',
      email: 'james.wilson@pfl.ae',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Meet our dedicated professionals who are committed to helping you
            achieve your educational dreams and career aspirations.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col  items-center bg-white rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300  w-full sm:w-[350px]"
            >
              {/* Member Image */}
              <div className="mb-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80  object-cover  transition-colors duration-300"
                />
              </div>
              <div className='flex flex-col items-center justify-center  p-6'>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>

                {/* Member Designation */}
                <p className="text-gray-600 font-medium mb-4 text-center">
                  {member.designation}
                </p>

                {/* Member Email */}
                <div className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                  <User className="w-5 h-5 mr-2 flex-shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm hover:underline break-all"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
              {/* Member Name */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
