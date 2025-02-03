import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education'
import './App.css';

const App = () => {
  return (
    <>
      <body>
        <div className='container'>
          <AboutMe />
          <div className='item'>
            <EducationSection />
          </div>
          <div className='item'>
            <Projects />
          </div>
          <div className='item'>
            <Contacts />
          </div>
        </div>
      </body></>
      
  );
};

export default App;
