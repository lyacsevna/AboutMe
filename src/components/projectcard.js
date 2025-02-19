import React from "react";
import '../styles/projectcard.css';
 

const ProjectCard = ({ projectTitle, description, stack, mainImage, handleClick }) => {
  return (
    <article className='project_card' onClick={handleClick}>
      <div className='project_card_inner'>
        <header className='project_card_front'>
          <img src={mainImage} alt='Thumbnail проекта' className='project_image' />
          <h3>{projectTitle}</h3>
        </header>
        <section className='project_card_back'>
          <div className='project_info'>
            <p>{description}</p>
            <p>{stack}</p>
          </div>
        </section>
      </div>
    </article>
  );
};


export default ProjectCard;