
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education'
import './App.css';



const App = () => {
  return (
    <body>
      <div className='container'>
          <AboutMe/>
          <EducationSection/>
          <Projects />
          <Contacts />
      </div>
    </body>
  );
};

export default App;
