import React, { useEffect, useRef } from 'react';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education';
import FooterFunction from './components/footer';
import HeaderFunction from './components/navigation';
import './App.css';

const Item = ({ children }) => {
  const itemRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.6
      });

      if (itemRef.current) {
          observer.observe(itemRef.current);
      }

      const currentRef = itemRef.current;

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef); 
          }
      };
  }, []);

  return (
      <div ref={itemRef} className="item">
          {children}
      </div>
  );
};
const App = () => {
    return (
        <>
            <header>
                <HeaderFunction />
            </header>
            <Home />
            <main className='container'>

                <section>
                    <AboutMe />
                </section>
                <section>
                    <Item>
                        <EducationSection />
                    </Item>
                </section>
                <section>
                    <Item>
                        <Projects />
                    </Item>
                </section>
                <section>
                    <Item>
                        <Contacts />
                    </Item>
                </section>
            </main>
            <footer>
                <FooterFunction />
            </footer>
        </>
    );
};

export default App;