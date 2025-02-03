import React from 'react';
import githubIcon from '../icons/github_icon.svg'
import vkIcon from '../icons/vk_icon.svg'
import '../styles/contacts.css'

const Contacts = () => {
    return (
        <><section id="contacts">
            <h2>Контакты</h2>
            <div className='contactLink'>
            <a href="https://github.com/lyacsevna" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
            <a
                href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                    <img src={vkIcon} alt="VK" className="icon" />
                </a>
            </div>
        </section><h3>Форма обратной связи</h3><form className="contact-form">
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Сообщение:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Отправить</button>
            </form></>
    );
};

export default Contacts;