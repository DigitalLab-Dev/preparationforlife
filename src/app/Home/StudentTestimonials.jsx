import { Star } from 'lucide-react';

const StudentTestimonials = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Ahmad Hassan",
      university: "University of Melbourne",
      review: "Preparation for Life made my dream of studying in Australia a reality. Their guidance through the visa process was exceptional and stress-free. I couldn't have done it without their support!",
      rating: 5
    },
    {
      image: "/fatima.png", 
      name: "Fatima Khan",
      university: "University of Toronto",
      review: "The personalized attention and expert advice I received helped me secure admission to my dream university in Canada. The team's dedication is truly remarkable and professional.",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Ali Raza",
      university: "Tsinghua University",
      review: "From application to visa approval, every step was handled with care and expertise. Their knowledge of Chinese universities helped me choose the perfect program for my career goals.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            WHAT OUR STUDENTS SAY
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Profile Section */}
              <div className="flex items-center mb-6">
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                
                {/* Name and University */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.university}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;