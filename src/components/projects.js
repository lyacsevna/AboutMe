import React from 'react';
import '../styles/projectcard.css';
import { myprojects } from "../data";
import ProjectCard from './projectcard';


/*function ProjectsList({ projectTitle, description, stack }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
  }
  
  return (
    <div className='project_item' onClick={handleClick}>
      <p>
        <strong>{projectTitle}</strong>
      </p>
      <div className='project_info'>
        <p>{description}</p>
        <p>{stack}</p>
      </div>
    </div>
  );
}*/

const Projects = () => {
    return (
      <section id="projects">
            <h2>Мои проекты</h2>
            <p>Ниже вы можете ознакомиться с моими проектами и их кратким описанием.</p>            
        <div className='project_container'> 
            {myprojects.map((proj) => (
                <ProjectCard key = { proj.projectTitle } {...proj}/>
            ))}
        </div>
      </section>
    );
};

export default Projects;