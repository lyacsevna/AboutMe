import React, { useState } from "react";
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

function CoursesEdu({ title, organization, years, certificateUrl }) {
  const [showCertificate, setShowCertificate] = useState(false);

  function handleMouseEnter() {
    setShowCertificate(true);
  }

  function handleMouseLeave() {
    setShowCertificate(false);
  }

  function handleClick() {
    localStorage.setItem('auth-time', new Date());
  }

  return (
    <div
      className="course-item"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>
        <strong>{title}</strong>
        <span>{organization}</span>
        <span>{years}</span>
      </p>
      {showCertificate && (
        <div className="certificate-popup">
          <div className="certificate_jpg">
            <img src={certificateUrl} alt={`Сертификат для курса "${title}"`} />
          </div>
        </div>
      )}
    </div>
  );
}

const EducationSection = () => {
  return (
    <section id="education">
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