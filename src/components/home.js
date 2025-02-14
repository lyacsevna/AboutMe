import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Home = () => {
    const [text, setText] = useState('');
    const fullText = "Hello, world!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 180);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <section id="home" className="home-section">
            <header className="home-header">
                <h1 className="fade-in">{text}</h1>
                <p className="fade-in">Сайт-портфолио мини-фронтендера</p>
                <a href="#aboutme" className="cta-button fade-in">Узнать больше</a>
            </header>
        </section>
    );
};

export default Home;