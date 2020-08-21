import React from 'react';
import Layout from '../Layout/Layout';
import './Projects.scss';
import purpleAster from '../../assets/Purple_Aster.jpg';
import venadoFront from '../../assets/Venado_front.jpg';
import venadoKitchen from '../../assets/Venado_Kitchen.jpg';

export const Projects = () => {
  return (
    <Layout active="projects">
      <section className="projects">
        <img id="purple_aster" src={purpleAster} />
        <label htmlFor="purple_aster">Purple Aster Spec Home</label>
        <img id="venado_front" src={venadoFront} />
        <label htmlFor="venado_front">Venado Spec Home</label>
        <img id="venado_kitchen" src={venadoKitchen}/>
        <label htmlFor="venado_kitchen">Custom Kitchen Remodel</label>
      </section>
    </Layout>
  )
}

export default Projects;
