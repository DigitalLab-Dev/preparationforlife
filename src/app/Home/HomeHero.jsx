
const HomeHero = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/hero.png')"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Experience, Expertise,
            <br />
            <span className="text-white">Excellence.</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Preparation for Life.
          </h2>
          
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            We guide students through their educational journey with unmatched expertise and dedication.
            <br />
            Transforming dreams into reality through comprehensive educational consulting and visa guidance.
          </p>
          
          {/* Learn More Button */}
          <a
            href="/about"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;