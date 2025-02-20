import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const { projectTitle } = useParams();

    return (
        <div>
            <h1>Детали проекта: {projectTitle}</h1>
        </div>
    );
};

export default ProjectDetailPage;