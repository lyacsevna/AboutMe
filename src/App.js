import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contacts from './components/contacts';
import EducationSection from './components/education';
import ProjectDetailPage from './pages/ProjectDetailPage'; // Импортируйте ваш компонент для деталей проекта
import FooterFunction from './components/footer';
import HeaderFunction from './components/navigation';
import './App.scss';

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
          threshold: 0.2
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
        <Router>
            <div className="scroll-container">
                <header>
                    <HeaderFunction />
                </header>
                <Home />
                <main className='container'>



                <Item>
                    <AboutMe />
                </Item>
                <Item>
                    <EducationSection />
                </Item>
                <Item>
                    <Projects />
                </Item>
                <Item>
                    <Contacts />
                </Item>
                <Routes>
                    <Route path="/project/:projectTitle" element={<ProjectDetailPage />} />
                </Routes>
                </main>
                <footer>
                    <FooterFunction />
                </footer>
            </div>
        </Router>
    );
};

export default App;