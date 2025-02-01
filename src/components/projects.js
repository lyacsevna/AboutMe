import React from 'react';
import { myprojects } from "../data";

function ProjectsList({ projectTitle, description, stack }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
    }
  
    return (
      <p onClick={handleClick}>
          <strong>{projectTitle}</strong>
          <p>{description}</p>
          <p>{stack}</p>
      </p>
    )
  }


const Projects = () => {
    return (
      <section id="projects_container">
            <h2>Мои проекты</h2>
            <p>Ниже вы можете ознакомиться с моими проектами и их кратким описанием.</p>
            
        <div>
            {myprojects.map((proj) => (
              <div className='project_item'>
                <ProjectsList key = { proj.projectTitle } {...proj}/>
              </div>
            ))}
        </div>
      </section>
    );
};

export default Projects;