import React from 'react';
import '../styles/projects.css';
import { myprojects } from "../data";

function ProjectsList({ projectTitle, description, stack }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
  }
  
  return (
    <div className='project_item'>
      <p onClick={handleClick}>
          <strong>{projectTitle}</strong>
          <p>{description}</p>
          <p>{stack}</p>
      </p>
      </div>
    )
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