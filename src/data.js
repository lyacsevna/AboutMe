import addtask from './images/myplansproject/addtask.png';
import mainwindow from './images/myplansproject/mainwindow.png';

export const education = [
    {
        university: 'Воронежский государственный технический университет, Воронеж',
        faculty: 'Факультет информационных технологий и компьютерной безопасности',
        specialty: 'Информатика и вычислительная техника',
        years: '2022 - 2026'
    },
    {
        university: 'Национальный исследовательский ядерный университет «МИФИ»',
        faculty: 'Факультет повышения квалификации и переподготовки кадров',
        specialty: 'Программирование на языках C и C++ в среде Unix-подобных ОС',
        years: '2024 - 2026'
    }
];

export const courses = [
    {
        title: 'Введение в программирование (C++)',
        organization: 'Академия Яндекса',
        year: '2023',
        certificateUrl: 'https://stepik.org/certificate/1753031ed435ef3ea09cee4a122d5e70c5465813.png?resolution=medium'
    },
    {
        title: 'Основы веб-верстки с HTML и CSS',
        organization: 'Web Tactics',
        year: '2025',
        certificateUrl: 'https://stepik.org/certificate/c10e100f3658f7ae24b1488f8a7ffc8e9040f56e.png?resolution=medium'
    }
];
export const myprojects = [
    
    {
        projectTitle: 'Учет ежедневных задач',
        description: 'CRUD-приложение для учета задач с возможностью импорта и экспорта данных.',
        stack: 'C#, Windows Presentation Foundation, Microsoft SQL Server, XAML',
        imageArray : [addtask, mainwindow],
        githubUrl: 'https://github.com/lyacsevna/MyPlans-by-WFP'
    }
];

/*,
    {
        projectTitle: 'Приложение для работы с STEP-JSON',
        description: '(проект находится в разработке)',
        stack: 'C#, Windows Presentation Foundation, Microsoft SQL Server, XAML',
        imageArray : [],
        githubUrl: 'отсутствует ;)'

    },
    {
        projectTitle: 'Этот сайт',
        description: 'Веб-страница, созданная для изучения React.js.',
        stack: 'React.js',
        imageArray : [],
        githubUrl: 'https://github.com/lyacsevna/About-Me'
    },
    {
        projectTitle: 'Планировщик задач',
        description: 'Приложение, разработанное в рамках курсового проекта для приобретения навыков работы с Django.',
        stack: 'Django, Python, HTML, CSS',
        imageArray: [],
        githubUrl: 'https://github.com/lyacsevna/PythonPlanner'
    }*/