import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education'
import './App.css';
import FooterFunction from './components/footer';
import HeaderFunction from './components/navigation';

const App = () => {
  return (
    <>
      <header>
        <HeaderFunction/>
      </header>
      <main className='container'>
        <section>
          <AboutMe />
        </section>
        <section className='item'>
          <EducationSection />
        </section>
        <section className='item'>
          <Projects />
        </section>
        <section className='item'>
          <Contacts />
        </section>
      </main>
      <footer>
        <FooterFunction />
      </footer>
    </>
  );
};

export default App;
