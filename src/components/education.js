import React from "react";
import { courses, education } from "../data";

function UniversityEdu({ university, faculty, specialty, years }) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date())
  }

  return (
    <div onClick={handleClick}>
      <p>
        <strong>{university}</strong>
        <p>{faculty}</p>
        <p>{specialty}</p>
        <p>{years}</p>
      </p>
    </div>
  )
}

function CoursesEdu({ title, organization, years }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
    }
  
    return (
      <div onClick={handleClick}>
        <p>
            <strong>{title}</strong>
            <p>{organization}</p>
            <p>{years}</p>
        </p>
      </div>
    )
  }

const EducationSection = () => {
    return (
        <section>
            <h2>Образование</h2>
            <ul>
                { education.map (( edu ) => (
                    <UniversityEdu key = { edu.university } {...edu}/>
                ))}
            </ul>

            <h2>Курсы</h2>
            <ul>
                {courses.map((course) => (
                    <CoursesEdu key={ course.title} {...course}/>
                ))}
            </ul>
        </section>
    )
}

export default EducationSection;
