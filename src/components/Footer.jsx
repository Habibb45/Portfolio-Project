import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col  gap-10">
          {/* Footer Column 1: Branding */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold lg:text-start text-center text-white mb-4">
              Habib Al Mostafa Hareb
            </h2>
            <p className="text-gray-400 lg:text-start text-center">
              Passionate programmer from Lebanon, dedicated to creating
              innovative solutions and building exceptional user experiences.
            </p>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div className="mb-8 flex lg:flex-row flex-col  items-center lg:mb-0">
            <h3 className="text-xl font-semibold text-white ">Quick Links</h3>
            <ul className="flex lg:flex-row flex-col items-center">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3: Contact & Social Media */}
          <div
            className="flex lg:flex-row flex-col gap-10  
          lg:text-start text-center "
          >
            <h3 className="text-xl font-semibold text-white ">Contact Me</h3>
            <p className="text-gray-400 ">
              Email:{' '}
              <a
                href="mailto:your.email@example.com"
                className="hover:text-blue-400"
              >
                habibharb66@gmail.com
              </a>
            </p>
            <p className="text-gray-400 ">
              Phone:{' '}
              <a href="tel:+1234567890" className="hover:text-blue-400">
                +961 (81893351)
              </a>
            </p>
            <div className="flex justify-center ">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3C4.98 3 4.98 3 4.98 3Z" />
                </svg>
              </a>
              <a
                href="https://github.com/Habibbbbbbbbbb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3C6.477 3 2 7.477 2 12.25C2 16.155 4.678 19.708 8.485 20.754C8.93 20.837 9.021 20.678 9.021 20.473V18.528C6.651 18.863 5.863 16.469 5.863 16.469C5.863 16.469 5.225 15.867 4.722 15.372C4.088 14.53 5.679 14.53 5.679 14.53C6.43 14.53 7.029 14.993 7.545 15.285C7.746 15.159 8.037 15.071 8.347 15.029C8.055 14.593 7.708 14.357 7.237 14.071C6.939 13.894 6.698 13.629 6.541 13.338C6.034 13.169 5.77 12.963 5.77 12.963C5.25 12.271 5.77 11.823 6.31 11.823C6.553 11.823 6.788 11.895 7.029 11.993C7.218 11.878 7.448 11.822 7.68 11.822C8.832 11.822 9.785 12.771 9.785 13.941C9.785 14.344 9.752 14.723 9.706 15.097C10.069 15.258 10.285 15.408 10.457 15.622C10.702 15.855 10.863 16.177 10.863 16.626V18.473C10.863 18.678 10.951 18.837 11.397 18.754C15.206 17.703 17.963 14.154 17.963 10.25C17.963 6.477 13.494 3 12 3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} . Habib All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
