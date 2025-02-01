import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education'
import HeaderFunction from './components/navigation'
import './App.css';

const App = () => {
  return (
    <>
      <body>
      <header>
        <HeaderFunction />
      </header>
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
      <footer>
        <p>by lyacsevna</p>
      </footer>
      </body></>
      
  );
};

export default App;
