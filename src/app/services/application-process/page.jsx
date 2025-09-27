import React from 'react';
import { Check } from 'lucide-react';

const ApplicationProcess = () => {
  const commitmentPrinciples = [
    {
      description:
        'Arrange an appointment with Preparation For Life expert staff. Meeting with an experienced counselor will allow you to discuss your options and choose the best fit for you.',
    },
    {
      description:
        'Apply for admissions. Once you have decided on your university choice, your counselor will request the necessary documents to apply for admission.',
    },
    {
      description:
        'Receive your offer letter. If you meet the admission criteria, the university will issue an offer letter. Our team will keep you informed throughout the process and maintain regular contact with both you and your chosen institution.',
    },
    {
      description:
        'Make a deposit. Once you have decided to accept your offer, Preparation for Life staff can help you notify the institution and pay any required deposit in both a secure and timely manner.',
    },
    {
      description:
        'Apply for your visa. Our counselors are expertly trained to guide you through the visa process. We will assist in preparing your profile and thoroughly check your documents before submission to ensure the best possible outcome. *Incomplete documents will cause delays, and sometimes visa rejections.',
    },
    {
      description:
        'Prepare for your overseas studies. After filing your visa application, arrange for pre-accommodation so you have a place to stay. Preparation For Life staff can assist and conduct pre-departure briefings.',
    },
  ];

  return (
    <section>
      {/* Hero Image */}
      <div
        className="relative w-full h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/process.png')",
        }}
      ></div>

      <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/process1.png"
                alt="Our Services & Commitment - Preparation for Life"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right - Services & Commitment Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Process:
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Preparation For Life
              </h3>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed">
              To begin the process, book a consultation with one of our
              professional Preparation for Life consultants. To help us assess
              your case effectively, please prepare the following documents:
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {commitmentPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-gray-900 rounded-full p-3 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Step {index + 1}
                    </h4>
                    <p className="text-gray-700">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
