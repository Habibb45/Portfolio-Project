import React from 'react'
import Habib from '../assests/Habib.jpg'

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={Habib}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              I am a 20-year-old programmer from Lebanon, passionate about
              creating innovative digital solutions. With a strong background in
              full-stack development, I enjoy building efficient and scalable
              applications that solve real-world problems. I'm constantly
              learning new technologies and refining my skills to stay at the
              cutting edge of the tech world. My goal is to combine creativity
              and logic to deliver impactful projects that make a difference.
            </p>
            <p className="text-gray-600 mb-4">
              I’m excited to find a job where I can apply my knowledge,
              contribute to impactful projects, and grow as a developer. I’m
              looking forward to working in a dynamic environment where I can
              take on new challenges and be part of a forward-thinking team.
            </p>
            <p className="text-gray-600">
              I’m a hard-working individual who is dedicated to delivering
              quality results, and I’m ready to put in the effort to make a
              meaningful impact in any role I take on.
            </p>

            {/* Button */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
