import React from 'react';
import { myprojects } from "../data";




function ProjectsList({ project_title, description, stack }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
    }
  
    return (
      <li onClick={handleClick}>
        <p>
            <strong>{project_title}</strong>
            <p>{description}</p>
            <p>{stack}</p>
        </p>
      </li>
    )
  }


const Projects = () => {
    return (
      <section id="projects_container">
            <h2>Мои проекты</h2>
            <p>Ниже вы можете ознакомиться с моими проектами и их кратким описанием.</p>
            
        <ul>
            {myprojects.map((proj) => (
              <div className='project_item'>
                <ProjectsList key = { proj.project_title } {...proj}/>
              </div>
            ))}
        </ul>
      </section>
    );
};

export default Projects;