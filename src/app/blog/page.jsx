import React from 'react';

const BlogPage = () => {
  return (
    <div>
      {/* Hero Image Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
        <img
          src='/blog-hero.jp         g'
          alt='about-hero'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Date */}
          <p className="text-sm text-gray-500 mb-4">
            March 15, 2024
          </p>

          {/* Blog Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            10 Essential Steps to Get Ready for University: Your Ultimate Prep Guide
          </h1>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            {/* Introduction */}
            <p className="text-xl mb-8 text-gray-600">
              Starting university is an exciting yet overwhelming experience for many new students. With so much to do, from packing your belongings to navigating campus life, it's easy to feel lost. To help you prepare for this transformative journey, we've compiled a comprehensive checklist of 10 essential tasks and items to consider before you step foot on campus.
            </p>

            <p className="mb-8">
              Once you have received your acceptance into your chosen university and course, congratulations! This is a monumental achievement that marks the beginning of an exciting new chapter in your life. However, before you embark on this journey, there are several important steps you need to take and information you should familiarize yourself with to ensure a smooth transition into university life. Here's a detailed guide on what you will need to know and do:
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Understand and Accept Your Offer
            </h2>
            <p className="mb-6">
              First and foremost, take a moment to fully understand the details of your acceptance. Review the offer letter thoroughly, as it will contain crucial information about your program, start dates, orientation sessions, and any conditions you may need to fulfill before enrollment. If you have any questions or uncertainties, don't hesitate to reach out to the admissions office for clarification.
            </p>
            <p className="mb-6">
              The next step involves formally accepting your offer. This may require you to complete an online enrollment form. Be mindful of deadlines, as missing them could jeopardize your place in the program. Additionally, ensure that you keep copies of all confirmation documents for your records.
            </p>

            {/* Step 2 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Financial Planning and Funding
            </h2>
            <p className="mb-6">
              University can be a significant financial investment. Familiarize yourself with the tuition fees, living expenses, and other costs associated with your education. If you require assistance, explore grants and student loans that you may be eligible for. Make sure to complete any necessary applications in a timely manner.
            </p>
            <p className="mb-6">
              Create a financial plan to manage your expenses while in school. This includes rent, groceries, transportation, and leisure activities.
            </p>

            {/* Step 3 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. Secure Accommodation
            </h2>
            <p className="mb-6">
              Whether you are living in a dorm, apartment, or with family, confirm your housing arrangements well before the semester starts. If you're sharing a space, discuss expectations and social boundaries with your roommate to ensure a harmonious living situation.
            </p>

            {/* Step 4 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Health Preparations
            </h2>
            <p className="mb-6">
              Health is important - schedule any necessary vaccinations or check-ups. Bring your medical records and prescriptions with you. Familiarize yourself with campus mental health services. Transitioning to university can be stressful, and it's essential to know where to seek help if you need it.
            </p>

            {/* Step 5 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. Packing the Essentials
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Clothing
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Make sure you have appropriate clothing for the climate</li>
              <li>Consider layers for varying temperatures and weather conditions</li>
              <li>Include at least one professional outfit for interviews, presentations, or networking events</li>
              <li>Given the amount of walking on campus, bring comfortable footwear along with casual and formal options</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              School Supplies
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Stock up on pens, pencils, notebooks, highlighters, and folders</li>
              <li>Consider investing in a quality backpack to carry your supplies</li>
              <li>Bring a reliable laptop or tablet for lectures and assignments</li>
              <li>Don't forget chargers, external hard drives, and any necessary software</li>
              <li>Check your course syllabus for required readings</li>
              <li>Consider buying or renting used books to save money</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Kitchen and Food Essentials
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>If you have access to a kitchen, pack pots, pans, utensils, and dishware</li>
              <li>Don't forget a can opener, cutting board, and knives</li>
              <li>Bring containers for leftovers and snacks</li>
              <li>Consider a mini fridge if you have space</li>
              <li>Stock up on easy-to-make meals, snacks, and staples like pasta, rice, and canned goods</li>
            </ul>

            {/* Step 6 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              6. Familiarize Yourself with Your Campus
            </h2>
            <p className="mb-6">
              Obtain a map of the campus to locate essential buildings like the library, student center, and lecture halls. Participate in orientation programs to learn about university resources, clubs, and any services available to students.
            </p>

            {/* Step 7 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              7. Build Your Social Network
            </h2>
            <p className="mb-6">
              Engage in extracurricular activities to meet new people and build a support network. Explore student organizations related to your interests or field of study. Participate in welcome events and mixers to make friends and feel more at home in your new environment.
            </p>

            {/* Step 8 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              8. Create Your Study Environment
            </h2>
            <p className="mb-6">
              Create a quiet and organized space in your dorm or apartment where you can focus on your studies. Develop a daily schedule that balances classes, study time, and social activities to maintain a healthy work-life balance.
            </p>

            {/* Step 9 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              9. Stay Connected
            </h2>
            <p className="mb-6">
              Join social media groups for your class or program to stay updated on events and connect with fellow students. Keep a list of important contacts, including family members, friends, and campus security, easily accessible.
            </p>

            {/* Step 10 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              10. Set Your Goals
            </h2>
            <p className="mb-6">
              Finally, take some time to reflect on what you want to achieve during your university experience. Setting academic and personal goals can help you stay focused and motivated.
            </p>

            {/* Conclusion */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <p className="text-lg font-medium text-gray-900 mb-4">
                Conclusion
              </p>
              <p className="text-gray-700">
                Transitioning to university life is a significant step that requires preparation and planning. By following this checklist, you can ease the stress of starting your new journey and focus on making the most of your time at university. Remember to stay organized, reach out for support when needed, and embrace the opportunities that come your way. Welcome to this exciting chapter of your life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;