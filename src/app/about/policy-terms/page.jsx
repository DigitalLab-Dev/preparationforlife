import React from 'react';

const Policy = () => {
  return (
    <div>
      {/* Hero Image Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/policy.jpg'
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
                src="/policy1.png"
                alt="Lawrie Green - Chairman/CO-Director"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - Chairman Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-3xl  font-bold text-gray-900 leading-tight">
                Preparation For Life Policy
              </h1>

              {/* Position/Title */}
              <h2 className=" text-xl font-semibold text-gray-500">
                Preparation For Life
              </h2>

              {/* Biography */}
              <div className="mt-6 space-y-4 text-gray-900 text-base md:text-xl leading-tight">
                <p>
                  Your privacy is critical to us. Likewise, we have built up
                  this policy with the end goal that you should see how we
                  gather, utilize, impart, reveal, and make use of individual
                  data. The following blueprints outline our privacy policy:
                  Before or at the time of collecting personal information, we
                  will identify the purposes for which the information is being
                  collected. We will gather and utilise individual data solely
                  with the target of satisfying those reasons indicated by us
                  and for other good purposes, unless we get the consent of the
                  individual concerned or as required by law.
                </p>

                <p>
                  We will just hold individual data for the length of essentials
                  for the satisfaction of those reasons. We will gather
                  individual data by legal and reasonable means and, where
                  fitting, with the information or assent of the individual
                  concerned. Personal information ought to be important to the
                  reasons for which it is to be utilized, and, to the degree
                  essential for those reasons, ought to be exact, finished, and
                  updated. We will protect individual data with security shields
                  against misfortune or burglary, as well as unapproved access,
                  divulgence, duplication, use, or alteration. We will promptly
                  provide customers with access to our policies and procedures
                  for the administration of individual data. We are focused on
                  leading our business as per these standards, with the specific
                  end goal of guaranteeing that the privacy of individual data
                  is secure and maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
