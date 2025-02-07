import React from "react";
import '../styles/navigation.css'

const HeaderFunction = () => {
    return (
        <nav className="menu">
            <ul className="header-items">
                <li><a href="#aboutme">Обо мне</a></li>
                <li><a href="#education">Образование</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>
    )
}

export default HeaderFunction;