import React from "react";

const Education = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          My Education
        </h2>
        
        <div className="space-y-12">
          {/* Education Item 1 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6">
            <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-600">Bachelor's Degree</h3>
              <p className="text-gray-500 text-lg">2022 - 2025</p>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl font-semibold text-blue-600">
                Computer Science, <span className="text-blue-600">Al Maaref University</span>
              </h4>
              <p className="text-gray-700 mt-2">
                Acquired a robust foundation in software development, algorithms, and systems design. Engaged in diverse projects, including web applications and advanced database management.
              </p>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6">
            <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-600">ِHigh School</h3>
              <p className="text-gray-500 text-lg">2018 - 2022</p>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-xl font-semibold text-gray-800">
                <span className="text-blue-600">Beirut High School</span>
              </h4>
              <p className="text-gray-700 mt-2">
                Graduated with honors, with a focus on math and science that set the stage for my programming journey. Excelled in courses that built a strong analytical and problem-solving foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
