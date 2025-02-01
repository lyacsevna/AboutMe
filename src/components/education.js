import React from "react";
import '../styles/edu.css';
import { courses, education } from "../data";

function UniversityEdu({ university, faculty, specialty, years }) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date());
  }

  return (
    <div className="edu-item" onClick={handleClick}>
      <p>
        <strong>{university}</strong>
        <span>{faculty}</span>
        <span>{specialty}</span>
        <span>{years}</span>
      </p>
    </div>
  );
}

function CoursesEdu({ title, organization, years }) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date());
  }

  return (
    <div className="course-item" onClick={handleClick}>
      <p>
        <strong>{title}</strong>
        <span>{organization}</span>
        <span>{years}</span>
      </p>
    </div>
  );
}

const EducationSection = () => {
  return (
    <section>
      <h2>Образование</h2>
      <ul>
        {education.map((edu) => (
          <UniversityEdu key={edu.university} {...edu} />
        ))}
      </ul>

      <h2>Курсы</h2>
      <ul>
        {courses.map((course) => (
          <CoursesEdu key={course.title} {...course} />
        ))}
      </ul>
    </section>
  );
}

export default EducationSection;
