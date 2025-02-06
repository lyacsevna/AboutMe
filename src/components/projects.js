import React from 'react';
import '../styles/projects.css';
import { myprojects } from "../data";

function ProjectsList({ projectTitle, description, stack }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
  }
  
  return (
    <div className='project_item' onClick={handleClick}>
      <p>
        <strong>{projectTitle}</strong>
        <span>{description}</span>
        <span>{stack}</span>
      </p>
    </div>
  );
}


const Projects = () => {
    return (
      <section id="projects_container">
            <h2>Мои проекты</h2>
            <p>Ниже вы можете ознакомиться с моими проектами и их кратким описанием.</p>            
        <div>
            {myprojects.map((proj) => (
                <ProjectsList key = { proj.projectTitle } {...proj}/>
            ))}
        </div>
      </section>
    );
};

export default Projects;