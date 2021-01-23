import React from 'react'
import { Link } from 'react-router-dom'

import purpleAster from '@timberline/assets/Purple_Aster.jpg'
import venadoFront from '@timberline/assets/Venado_front.jpg'
import venadoKitchen from '@timberline/assets/Venado_Kitchen.jpg'

import './Projects.scss'

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="projects">
      <Link to="/projects/1">
        <div className="project_container">
          <img
            id="purple_aster"
            className="projects_photos"
            src={purpleAster}
            alt="project completed by Timberline Inc"
          />
          <label htmlFor="purple_aster">Purple Aster Spec Home</label>
        </div>
      </Link>
      <Link to="/projects/2">
        <div className="project_container">
          <img
            id="venado_front"
            className="projects_photos"
            src={venadoFront}
            alt="project completed by Timberline Inc"
          />
          <label htmlFor="venado_front">Venado Spec Home</label>
        </div>
      </Link>
      <Link to="/projects/3">
        <div className="project_container">
          <img
            id="venado_kitchen"
            className="projects_photos"
            src={venadoKitchen}
            alt="project completed by Timberline Inc"
          />
          <label htmlFor="venado_kitchen">Custom Kitchen Remodel</label>
        </div>
      </Link>
    </section>
  )
}

export { Projects }
