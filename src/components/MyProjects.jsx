import React from 'react'
import img1 from '../assests/Project1 img.png'
import img2 from '../assests/Project2 img.webp'
import img3 from '../assests/Project3 img.jpg'
import Card from './core/Card'
import Button from './core/Button'

const Projects = [
  {
    title: 'Project One',
    subtitle:
      'This project is a full-stack to-do list application built using React for the frontend and Laravel for the backend. The application allows users to create, read, update, and delete tasks seamlessly.',
    imgsrc: { img1 },
    url: '/',
  },
  {
    title: 'Project Two',
    subtitle:
      'This project focused on developing an e-commerce platform with fully functional payment gateway. Built with Laravel and Angular.',
    imgsrc: { img2 },
    url: '/',
  },
  {
    title: 'Project Three',
    subtitle:
      'This project is a mobile-optimized website developed with React Native to offer a seamless and responsive experience across both Android and iOS devices. It leverages React Native s capabilities to create a native-like user interface while maintaining the flexibility of web technologies.',
    imgsrc: { img3 },
    url: '/',
  },
]

const MyProjects = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <Card
              title={project.title}
              subtitle={project.subtitle}
              imgesrc={project.imgsrc}
              url={project.url}
            />
          ))}
        </div>
      </div>

      <div className="mt-12  text-center">
        <Button text={'See All Projects'} />
      </div>
    </section>
  )
}

export default MyProjects
