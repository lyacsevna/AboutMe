import React from "react";
import { courses, education } from "../data";

function UniversityEdu({ university, faculty, specialy, years }) {
  function handleClick() {
    localStorage.setItem('auth-time', new Date())
  }

  return (
    <li onClick={handleClick}>
      <p>
        <strong>{university}</strong>
        <p>{faculty}</p>
        <p>{specialy}</p>
        <p>{years}</p>
      </p>
    </li>
  )
}

function CoursesEdu({ title, organization, years }) {
    function handleClick() {
      localStorage.setItem('auth-time', new Date())
    }
  
    return (
      <li onClick={handleClick}>
        <p>
            <strong>{title}</strong>
            <p>{organization}</p>
            <p>{years}</p>
        </p>
      </li>
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
            <ui>
                {courses.map((course) => (
                    <CoursesEdu key={ course.title} {...course}/>
                ))}
            </ui>
        </section>
    )
}

export default EducationSection;
