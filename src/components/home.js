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
               
            </p>

        </article>
    </section>
    );
};

export default Home;