import React, { useState } from 'react';

const ProjectCard = ({ projectTitle, description, stack, imageArray }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); 

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); 
  };

  const handleDetailsClick = (event) => {
    event.stopPropagation();
    const url = `/project/${encodeURIComponent(projectTitle)}`;
    window.open(url, '_blank'); 
  };


  return (
    <article className='project_card' onClick={handleCardClick}>
      <div className={`project_card_inner ${isFlipped ? 'flipped' : ''}`}>
        <header className='project_card_front'>
          <h3>{projectTitle}</h3>
        </header>

        <section className='project_card_back'>
          <div className='left_part_projcard'>
            <figure className='project_images'>
              {imageArray.length > 0 && (
                <img src={imageArray[currentImageIndex]} alt='Project view' className='project_image' />
              )}
              <figcaption className='navigation_buttons'>
                {imageArray.length > 1 && (
                  <>
                    <button className='nav_button' onClick={(event) => {
                      event.stopPropagation();
                      handlePrevImage();
                    }}>&lt;</button>
                    <button className='nav_button' onClick={(event) => {
                      event.stopPropagation();
                      handleNextImage();
                    }}>&gt;</button>
                  </>
                )}
              </figcaption>
            </figure>
          </div>

          <aside className='right_part_projcard'>
            <div className='project_info'>
              <p>{description}</p>
              <p>{stack}</p>
              <button onClick={handleDetailsClick} className='github_link'>Подробнее</button>
            </div>
          </aside>
        </section>
      </div>
    </article>
  );
};

export default ProjectCard;