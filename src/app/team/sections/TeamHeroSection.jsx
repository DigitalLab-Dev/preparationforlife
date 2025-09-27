import React from 'react';

const TeamHeroSection = () => {
  return (
           <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/team-hero.jpg'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>
  );
};

export default TeamHeroSection;