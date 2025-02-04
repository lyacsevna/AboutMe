import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education'
import './App.css';
import FooterFunction from './components/footer';

const App = () => {
  return (
    <>
      <body>
        <main>
          <AboutMe />
          <EducationSection />
          <Projects />
          <Contacts/>
        </main>
        <footer>
          <FooterFunction />
        </footer>
      </body></>
      
  );
};

export default App;
