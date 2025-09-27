import React from 'react';

const ChairmanProfileSection = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div
        className="relative w-full h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/message.png')",
        }}
      ></div>

      {/* Chairman Profile Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Chairman Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/chairman.png"
                alt="Lawrie Green - Chairman/CO-Director"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - Chairman Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Lawrie Green
              </h1>

              {/* Position/Title */}
              <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-700">
                Chairman / CO-Director
              </h2>

              {/* Biography */}
              <div className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Following their service in the Royal Air Force (RAF), both
                  Lawrie's parents became teachers. In the early 1990s, Lawrie
                  earned a Bachelor of Education degree and currently holds
                  Qualified Teacher Status (QTS) at the A-level standard in
                  Business Studies and Economics.
                </p>

                <p>
                  After serving as an international officer at a private college
                  from 1996 to 1997, Lawrie founded the forerunner to
                  Preparation for Life in October 1997, gaining more than three
                  decades of experience in the sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanProfileSection;
