import React from 'react';

const AboutUniversityLogos = () => {
  const universities = [
    {
      name: 'Harvard University',
      logo: '/aut.png',
    },
    {
      name: 'Stanford University',
      logo: '/florida.png',
    },
    {
      name: 'MIT',
      logo: '/otago.png',
    },
    {
      name: 'Oxford University',
      logo: '/manitoba.png',
    },
    {
      name: 'Oxford University',
      logo: '/southampton.png',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Logos Grid */}
        <div className="flex w-full  items-center justify-center gap-10 flex-wrap">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex   items-center justify-center rounded-lg  transition-colors duration-300 group"
            >
              <img
                src={university.logo}
                alt={university.name}
                className="w-50   object-cover transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUniversityLogos;
