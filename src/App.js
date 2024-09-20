import Navbar from './components/NavBar'
import About from './components/About'
import Education from './components/Education'
import MyProjects from './components/MyProjects'

import Footer from './components/Footer'

import React, { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <div>
      {/* Passing data as props to a child component */}

      <Navbar />
      <About />
      <Education />
      <MyProjects />
      <Footer />
    </div>
  )
}

export default App
