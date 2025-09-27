'use client';

import { destinations } from '@/utils/destinations';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function DestinationPage() {
  const router = useRouter();
  const { id } = useParams(); // ✅ Get [id] from URL
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find country data by matching the slug (id) with country name
      const country = destinations.find(
        (dest) =>
          dest.country.toLowerCase().replace(/\s+/g, '-') === id.toLowerCase()
      );
      setCountryData(country || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-900 text-xl">Loading...</div>
      </div>
    );
  }

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-gray-600">
            The destination you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // const LogoSection = ({ title, logos }) => {
  //   if (!logos || logos.length === 0) return null;

  //   return (
  //     <div className="mb-16">
  //       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
  //         {title}
  //       </h2>
  //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
  //         {logos.map((logo, index) => (
  //           <div
  //             key={index}
  //             className="flex items-center justify-center p-4 transition-colors"
  //           >
  //             <img
  //               src={logo}
  //               alt={`${title} logo ${index + 1}`}
  //               className="max-h-16 md:max-h-26 w-auto object-cover"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const LogoSection = ({ title, logos }) => {
    if (!logos || logos.length === 0) return null;

    return (
      <div className="mb-16 w-full ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h2>

        <div className="flex  flex-wrap justify-center gap-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[45%]  sm:w-[25%] flex items-center justify-center p-4"
            >
              <img
                src={logo}
                alt={`${title} logo ${index + 1}`}
                className="max-h-16 md:max-h-54 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src={countryData.heroImage}
          alt={`${countryData.country} hero`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          STUDY IN {countryData.country.toUpperCase()}
        </h1>

        {/* Paragraphs */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          {countryData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Logo Sections */}
        <div className="space-y-16">
          <LogoSection
            title="Institutions"
            logos={countryData.partnerUniversities}
          />

          <LogoSection title="Navitas" logos={countryData.navitas} />
          <LogoSection title="UP Education" logos={countryData.upEducation} />
        </div>

        {/* Contact Section */}
        <div className="mt-20 md:mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Have any query?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-8">
            Let's Talk
          </p>

          <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-12">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <strong>
                For information on student visas, there is no need for an
                appointment.
              </strong>{' '}
              You can contact us by phone at{' '}
              <a
                href="tel:+923331900448"
                className="text-gray-900 font-semibold hover:underline"
              >
                +92 333 1900448
              </a>{' '}
              or by email at{' '}
              <a
                href="mailto:pak.sales@pfl.ae"
                className="text-gray-900 font-semibold hover:underline"
              >
                pak.sales@pfl.ae
              </a>{' '}
              with questions about student visas or documentation for admission.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-900 font-semibold mb-2">
              We're working with
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              160+ of the world's most successful universities with trust.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-10">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← Back to Destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
