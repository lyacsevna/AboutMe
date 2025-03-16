import React from 'react';
import '../styles/projectcard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './projectcard';
import { myprojects } from "../data";
import { Carousel } from 'react-bootstrap';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Мои проекты</h2>
            <p>Нажмите на проект, чтобы узнать больше информации о нем.</p>
            <Carousel id="carouselExampleRide" interval={3000} controls={true} indicators={true}>
                {myprojects.map((projectData) => (
                    <Carousel.Item key={projectData.projectTitle}>
                        <div className='project_container'>
                            <ProjectCard {...projectData} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};


export default Projects;