const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-6 leading-tight">
              WELCOME TO
              <br />
              <span className="text-gray-900">PREPARATION FOR LIFE</span>
            </h2>
            
            {/* Paragraph */}
            <div className="space-y-4 text-gray-700 text-md leading-relaxed mb-8">
              <p>
                Welcome to Preparation for Life, your trusted partner in navigating the exciting journey of studying abroad. Founded in 1997, we are dedicated to empowering students to achieve their academic and career aspirations by providing expert guidance and personalized support throughout the entire process.
              </p>
              
              <p>
                For over 28 years, Preparation for Life has stood a beacon of hope and guidance for students navigating the complex world of university admissions. Our dynamic approach, personalized services, and unwavering commitment to our clients' success have set us apart in the education consultancy sector.
              </p>
            </div>
            
            {/* Learn More Button */}
            <a
              href="/about"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Learn More
            </a>
          </div>
          
          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/about-right.png"
                alt="About Preparation for Life"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;