import React from 'react';
import '../styles/contacts.css'

const Contacts = () => {
    return (
        <><section id="contacts">
            <h2>Контакты</h2>
            <a className="contact-item" href="https://github.com/lyacsevna">Мой профиль на GitHub</a>
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