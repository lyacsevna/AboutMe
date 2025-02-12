import React, { useEffect, useState } from 'react';
import '../styles/aboutme.css';

const AboutMe = () => {
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
        }, 100);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <section id="aboutme" className="aboutme-section">
        <header>
            <h1>{text}</h1>
        </header>
        <article>
            <p>
                Привет! Меня зовут Софья, и я — начинающий веб-разработчик.
                Я учусь на третьем курсе по направлению "Информатика и вычислительная техника".
                В ходе обучения я изучала языки программирования, такие как C#, C++ и Python, что дало мне хорошую основу в разработке.
                Недавно я решила освоить фронтенд-разработку и с интересом изучаю HTML, CSS и JavaScript.
                Мне нравится создавать интерактивные и визуально привлекательные веб-приложения.
                Каждый новый проект — это возможность применить знания на практике и развить свои навыки.
            </p>
            <p>А это мой сайт, созданный для изучения React.js. Надеюсь, он вам понравится!</p>
        </article>
        <aside>
            <p>I am just learning...</p>
        </aside>
    </section>
    );
};

export default AboutMe;