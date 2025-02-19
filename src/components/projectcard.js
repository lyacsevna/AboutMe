import React, { useState } from "react";  
import '../styles/projectcard.css';
import addtask from '../images/myplansproject/addtask.png';
import mainwindow from '../images/myplansproject/mainwindow.png';

 

const ProjectCard = ({ projectTitle, description, stack, githubUrl }) => {
  const images = [addtask, mainwindow]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <article className='project_card'>
      <div className='project_card_inner'>
        <header className='project_card_front'>
          <h3>{projectTitle}</h3>
        </header>
        <section className='project_card_back'>
          <div className='project_info'>
            <img src={images[currentImageIndex]} alt='Project view' className='project_image' />
            <p>{description}</p>
            <p>{stack}</p>
            <div className='navigation_buttons'>
              <button onClick={handlePrevImage}>&lt; Previous</button>
              <button onClick={handleNextImage}>Next &gt;</button>
            </div>
            <a href={githubUrl} className='github_link'>View on GitHub</a>
          </div>
        </section>
      </div>
    </article>
  );
};



export default ProjectCard;