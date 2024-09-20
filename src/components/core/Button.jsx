import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-transparent p-0 border-0'>
    <div className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
      {text}
    </div>
    </button>
  )
}

export default Button
