import React from 'react';
import githubIcon from '../icons/github_icon.svg'
import vkIcon from '../icons/vk_icon.svg'
import '../styles/contacts.css'

const Contacts = () => {
    return (
        <section id="contacts">
            <header>
                <h2>Контакты</h2>
            </header>
            <div className='contactLink'>
                <a href="https://github.com/lyacsevna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" className="icon" />
                </a>
                <a href="https://vk.com/lyacsevna" target="_blank" rel="noopener noreferrer" aria-label="VK">
                    <img src={vkIcon} alt="VK" className="icon" />
                </a>
            </div>
            <p>Если вам понравилась моя работа и вы хотите предложить мне интересный проект или вакансию, пожалуйста, заполните форму ниже. </p>
            <form className="contact-form" aria-labelledby="contacts">
                <fieldset>
                    
                    <legend>Свяжитесь со мной</legend>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Сообщение:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Отправить</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Contacts;