import React from 'react';

const ServiceFee = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src="/process.png"
          alt="about-hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* MPOWER Financing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Left - Illustration/Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/fee.png"
                alt="MPOWER Financing"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - MPOWER Financing Info */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              {/* Heading */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                MPOWER Financing
              </h1>
              <h2 className="text-xl font-semibold text-gray-500">
                Preparation For Life
              </h2>

              {/* Banner Image */}
              <div className="w-full">
                <img
                  src="/mpower.jpg"
                  alt="MPOWER Financing"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Intro */}
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <h3 className="font-semibold text-lg">
                  Start your application with MPOWER and take benefit of:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>No co-signer or collateral based loan</li>
                  <li>Fixed simple interest rate</li>
                  <li>Flexible repayment options</li>
                  <li>No upfront or out-of-pocket costs</li>
                  <li>Free visa support letter to come to the USA or Canada</li>
                  <li>No prepayment fee if you pay back your loan earlier</li>
                </ul>

                <p>
                  We're the best partner for international students in North
                  America! MPOWER offers student loans for international
                  students who are attending an eligible USA college or
                  university.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Secured On Your Future
                  </h3>
                  <p>
                    A student loan without a cosigner, collateral, or USA credit
                    history.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Flexible Funding Options
                  </h3>
                  <p>
                    Fixed-rate loans from $2,001 to $100,000 total with up to
                    1.50% in interest rate discounts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Made for Global Citizens
                  </h3>
                  <p>
                    International student loans and scholarships offered to 190+
                    nationalities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    We Support Your Journey
                  </h3>
                  <p>
                    Free visa support letters and exclusive career strategy
                    services.
                  </p>
                </div>
              </div>

              {/* MPOWER by the numbers */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  MPOWER by the numbers
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>$100K+ in total scholarships awarded</li>
                  <li>$2B+ loan applications processed</li>
                  <li>96% of customers rated themselves happy or satisfied</li>
                  <li>190+ eligible countries of citizenship</li>
                  <li>400+ USA and Canadian Schools supported</li>
                </ul>
              </div>

              {/* Partner & Process Links */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Partner Education Institutes List
                </h3>
                <p className="text-blue-600 underline cursor-pointer">
                  Canada Partner List
                </p>
                <p className="text-blue-600 underline cursor-pointer">
                  US Partner List
                </p>
                <p className="text-blue-600 underline cursor-pointer">
                  MPW Application Process Guide
                </p>
                <p className="text-blue-600 underline cursor-pointer">
                  Application Process Video Guide
                </p>
                <p className="text-blue-600 underline cursor-pointer font-semibold">
                  Apply for Loan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceFee;
