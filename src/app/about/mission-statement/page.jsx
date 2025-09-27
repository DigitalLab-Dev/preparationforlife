import React from 'react';

const Mission = () => {
  return (
    <div>
      {/* Hero Image Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/statement.jpg'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Chairman Profile Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Chairman Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/mission.png"
                alt="Lawrie Green - Chairman/CO-Director"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - Chairman Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                Mission Statement
              </h1>

              {/* Position/Title */}
              <h2 className=" text-xl font-semibold text-gray-500">
                Preparation For Life
              </h2>

              {/* Biography */}
              <div className="mt-6 space-y-4 text-gray-900 text-base md:text-2xl leading-tight">
                <p>
                  Our mission is to serve individual students, their families
                  and their communities. Further, our mission is to support
                  education and to further opportunity and break down borders
                  and prejudice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
