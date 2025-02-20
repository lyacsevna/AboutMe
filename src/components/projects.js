import React from 'react';
import '../styles/projectcard.css';
import { myprojects } from "../data";
import ProjectCard from './projectcard';



const Projects = () => {
    return (
      <section id="projects">
            <h2>Мои проекты</h2>
            <p>Наведите курсор на проект, чтобы узнать больше информации о нем.</p>            
        <div className='project_container'> 
            {myprojects.map((projectData) => (
                <ProjectCard key = { projectData.projectTitle } {...projectData}/>
            ))}
        </div>
      </section>
    );
};

export default Projects;