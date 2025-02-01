import React , { useEffect, useState }  from 'react';

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
        <section id="aboutme">
            <h1>{text}</h1>
            <p>
                Привет! Это мой сайт, созданный для изучения React.js. 
                В процессе этот сайт превратится в небольшое портфолио. 
                Пока что на этом все.
            </p>
            <p>I am just learning</p>
        </section>
    );
};

export default AboutMe;