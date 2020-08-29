import React from 'react';
import Layout from '../Layout/Layout';
import './Projects.scss';
import { Link } from 'react-router-dom';
import purpleAster from '../../assets/Purple_Aster.jpg';
import venadoFront from '../../assets/Venado_front.jpg';
import venadoKitchen from '../../assets/Venado_Kitchen.jpg';

export const Projects = () => {
  return (
    <Layout active="projects">
      <section className="projects">
        <div className="project_container">
          <img id="purple_aster" className="projects_photos" src={purpleAster} />
          <label htmlFor="purple_aster">Purple Aster Spec Home</label>
        </div>
        <div className="project_container">
          <img id="venado_front" className="projects_photos" src={venadoFront} />
          <label htmlFor="venado_front">Venado Spec Home</label>
        </div>
        <div className="project_container">
          <img id="venado_kitchen" className="projects_photos" src={venadoKitchen}/>
          <label htmlFor="venado_kitchen">Custom Kitchen Remodel</label>
        </div>
      </section>
    </Layout>
  )
}

export default Projects;
