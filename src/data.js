import addtask from './images/myplansproject/addtask.png';
import mainwindow from './images/myplansproject/mainwindow.png';
import stepicCplusplus from './images/certificates/stepicCplusplus.jpg';
import stepicHTML from './images/certificates/stepicHTML.jpg';

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
        certificate: stepicCplusplus
    },
    {
        title: 'Основы веб-верстки с HTML и CSS',
        organization: 'Web Tactics',
        year: '2025',
        certificate: stepicHTML
    }
];
export const myprojects = [

    
    /*{
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
    },*/
    
    {
        projectTitle: 'Учет ежедневных задач',
        description: 'CRUD-приложение для учета задач с возможностью импорта и экспорта данных.',
        stack: 'C#, Windows Presentation Foundation, Microsoft SQL Server, XAML',
        imageArray : [addtask ,mainwindow],
        githubUrl: 'https://github.com/lyacsevna/MyPlans-by-WFP'
    }
];

