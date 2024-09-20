import React from 'react'

const Card = ({ imgsrc, title, subtitle, url }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={imgsrc}
          alt="Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {title}{' '}
          </h3>
          <p className="text-gray-600 mb-4">{subtitle}</p>
          <a href={url} className="text-blue-500 hover:underline font-semibold">
            View Project
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
