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
            <div className='project_item'>
                <ul>
                    {myprojects.map((proj) => (
                    <ProjectsList key = { proj.project_title } {...proj}/>
                ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;