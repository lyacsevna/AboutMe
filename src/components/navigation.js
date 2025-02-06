import React from "react";
import '../styles/navigation.css'

const HeaderFunction = () => {
    return (
        <nav className="menu">
            <ul className="header-items">
                <li>Обо мне</li>
                <li>Образование</li>
                <li>Проекты</li>
                <li>Контакты</li>
            </ul>
        </nav>
    )
}

export default HeaderFunction;