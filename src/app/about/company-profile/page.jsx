const CompanyProfile = () => {
  return (
    <div>
      {/* Hero Image Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/company.jpg'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Chairman Profile Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Left - Chairman Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/compnay-profile.png"
                alt="Lawrie Green - Chairman/CO-Director"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right - Chairman Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                Company Profile:
              </h1>

              {/* Position/Title */}
              <h2 className="text-lg m font-semibold text-gray-500">
                Preparation For Life
              </h2>

              {/* Biography */}
              <div className="mt-6 space-y-4 flex flex-col gap-5 text-gray-900 text-base md:text-xl leading-tight">
                <p>
                  Welcome to Preparation for Life, your trusted partner in
                  navigating the exciting journey of studying abroad. Founded in
                  1997, we are dedicated to empowering students to achieve their
                  academic and career aspirations by providing expert guidance
                  and personalized support throughout the entire process. For
                  over 28 years, Preparation for Life has stood a beacon of hope
                  and guidance for students navigating the complex world of
                  university admissions.
                </p>

                <p>
                  Our dynamic approach, personalized services, and unwavering
                  commitment to our clients’ success have set us apart in the
                  education consultancy sector. We understand that studying
                  abroad is a life-changing decision filled with opportunities
                  for personal growth and cultural enrichment. Our team of
                  experienced consultants is dedicated to helping students find
                  the right educational programs that align with their goals,
                  interests, and aspirations.
                </p>
                <p>
                  We believe that every student deserves a tailored approach to
                  their unique journey, and we take pride in offering one-on-one
                  consultations to ensure that each individual receives the
                  attention and resources they need. Our comprehensive services
                  include assistance with university and course selection, visa
                  application guidance, scholarship opportunities, and
                  pre-departure briefings. We also provide valuable resources to
                  help students acclimatise to their new environment, ensuring a
                  smooth transition into their host country.
                </p>
                <p>
                  With strategically located offices in Pakistan and Nigeria, we
                  are well-equipped to support students from diverse backgrounds
                  and regions. In an era where education is more crucial than
                  ever, Preparation for Life remains steadfast in its mission to
                  inspire, support, and transform the lives of students
                  worldwide. With our extensive experience, dedication to
                  excellence, and a focus on personalized guidance, we are
                  excited to help the next generation of scholars reach their
                  full potential and contribute meaningfully to the global
                  community. Join us on this incredible journey and let us help
                  you turn your dreams of studying abroad into reality.
                  Together, we can pave the way for a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
