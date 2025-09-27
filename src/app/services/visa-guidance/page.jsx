import React from 'react';

const VisaGuidance = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div
        className="relative w-full h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/process.png')",
        }}
      ></div>

      {/* Chairman Profile Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Chairman Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/process1.png"
                alt="Lawrie Green - Chairman/CO-Director"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - Chairman Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-3xl  font-bold text-gray-900 leading-tight">
                Visa Requirements:
              </h1>

              {/* Position/Title */}
              <h2 className=" text-xl font-semibold text-gray-500">
                Preparation For Life
              </h2>

              {/* Biography */}
              <div className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-900">
                  Visa Requirements and Guidance for International Students{' '}
                </h3>
                <p>
                  Before studying abroad, obtaining the appropriate student visa
                  is a crucial first step. Each country has its own visa
                  regulations and the application process may vary depending on
                  your chosen destination. It’s essential to thoroughly research
                  the specific visa requirements of the country where you plan
                  to study to prevent any unexpected delays or complications.
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Expert Visa Support At Preparation for Life
                </h3>
                <p>
                  Our experienced staff are available in all our offices to
                  provide expert support throughout your visa application
                  process. Whether you’re planning to study in the UK, US, UAE,
                  or another country, we’re here to guide you every step of the
                  way.Navigating visa procedures can be complex, which is why
                  many universities recommend seeking professional help. Contact
                  your nearest Preparation for Life for reliable, personalized
                  assistance with your visa application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaGuidance;
