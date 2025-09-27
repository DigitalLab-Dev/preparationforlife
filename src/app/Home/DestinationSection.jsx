
const DestinationsSection = () => {
  const destinations = [
    {
      image: "/australia.jpg",
      title: "Study in Australia",
      description: "Experience world-class education in a vibrant multicultural environment with stunning landscapes.",
      link: "/destinations/australia"
    },
    {
      image: "/canada.jpg", 
      title: "Study in Canada",
      description: "Discover quality education and research opportunities in one of the world's most welcoming countries.",
      link: "/destinations/canada"
    },
    {
      image: "/china.jpg",
      title: "Study in China", 
      description: "Immerse yourself in ancient culture while accessing cutting-edge technology and innovation hubs.",
      link: "/destinations/china"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            International Study Destinations
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl leading-relaxed">
            Experience academic excellence in iconic locations across the world, tailored to your aspirations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {destination.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {destination.description}
                </p>
                
                {/* Divider */}
                <hr className="border-gray-200 mb-4" />
                
                {/* View More Link */}
                <a
                  href={destination.link}
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200"
                >
                  View More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;