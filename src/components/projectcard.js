import React, { useState } from "react"; 
import '../styles/projectcard.css';

const ProjectCard = ({ projectTitle, description, stack, githubUrl, imageArray }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };

  return (
    <article className='project_card' onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`project_card_inner ${isFlipped ? 'rotated' : ''}`}>
        <header className='project_card_front'>
          <h3>{projectTitle}</h3>
        </header>

        <section className='project_card_back'>
          <div className="left_part_projcard">
            <figure className="project_images">
              <img src={imageArray[currentImageIndex]} alt='Project view' className='project_image' />
              <figcaption className='navigation_buttons'>
                <button onClick={handlePrevImage}>&lt;</button>
                <button onClick={handleNextImage}>&gt;</button>
              </figcaption>
            </figure>
          </div>
          
          <aside className="right_part_projcard">
            <div className='project_info'>
              <p>{description}</p>
              <p>{stack}</p>
              <a href={githubUrl} className='github_link'>View on GitHub</a>
            </div>
          </aside>
        </section>
      </div>
    </article>
  );
};

export default ProjectCard;