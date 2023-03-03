
const projects = [
    {
        id: 16,
        title:'Statistics of Farms',
        urlImg: 'images/fullstack/02.jpg',
        urlSite:'https://mighty-bastion-19386.herokuapp.com/',
        techs:'MERN stack (MongoDB, Express, React and Node.js)',
        type: 'FULLSTACK',
        alt:'Demo picture of Statistics of Farms',
        des:'A web service provide data from various farms, also offer free open API so users access & change data in database of farm.'
    },
    {
        id: 15,
        title:'Phonebook',
        urlImg: 'images/fullstack/01.jpg',
        urlSite:'https://vast-atoll-41721.herokuapp.com/',
        techs:'MERN stack (MongoDB, Express, React and Node.js)',
        type: 'FULLSTACK',
        alt:'Demo picture of Phone book App',
        des:'Simple phonebook allows users to manage (create/update/delete) their contacts'
    },
    {
        id: 14,
        title:'Housing price',
        urlImg: 'images/da/01.jpg',
        urlSite:'https://www.linkedin.com/pulse/reference-source-house-buyers-capital-region-finland-hang-nguyen/',
        techs:'Python(Pandas, matplotlib, BeautifulSoup, pgeocode, folium)',
        type: 'DA',
        alt:'Demo picture of Housing price project',
        des:'A reference source for house buyers in Finland by collecting and analyzing spatial data'
    },
    {
        id: 13,
        title:'Required IT skills',
        urlImg: 'images/da/02.jpg',
        urlSite:'https://www.linkedin.com/in/hang-nguyen-a619b1105/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABqqg6kBDJDEzadNxSJyv1XY9f3k9xTREwE,1635456131314)/',
        techs:'Python (Pandas, matplotlib), IBM Cognos dashboard',
        type: 'DA',
        alt:'Demo picture of Identify IT skills project',
        des:'A report of trends on merging tech-stacks based on an analysis of data collecting from StackOverflow survey, GitHub Jobs '
    },
    {
        id: 12,
        title:'Offering Tours',
        urlImg: 'images/react/05.jpg',
        urlSite:'https://tours-offered-by-hn.netlify.app/',
        techs:'React, Bootstrap5',
        type: 'REACT',
        alt:'Demo picture of Tour App',
        des:'List of travel tours and users can remove if not interested'
    },
    {
        id: 11,
        title:'Shopping Cart',
        urlImg: 'images/react/04.jpg',
        urlSite:'https://food-ordering-hn.netlify.app/',
        techs:'React (Hooks, Context, Router), SASS, Local Storage',
        type: 'REACT',
        alt:'Demo picture of shopping cart App',
        des:'Simple demo of shopping cart'
    },
    {
        id: 10,
        title:'User Generator',
        urlImg: 'images/react/03.jpg',
        urlSite:'https://random-user-generator-hn.netlify.app/',
        techs:'React, promise, async/await, CSS',
        type: 'REACT',
        alt:'Demo picture of User Generator App',
        des:'An app shows information of random person. Data fetch from https://randomuser.me/'
    },
    {
        id: 9,
        title:'Cocktail world',
        urlImg: 'images/react/01.jpg',
        urlSite:'https://cocktail-world-hn.netlify.app/',
        techs:'React (Hooks, Context, Router), promise, async/await, SASS',
        type: 'REACT',
        alt:'Demo picture of Cocktail world App',
        des:'An app allows users to search info about cocktails. Data fetch from thecocktaildb.com'
    },
    {
        id: 8,
        title:'Hanna Photography',
        urlImg: 'images/rwd/04.jpg',
        urlSite:'https://hangnguyen81.github.io/photography-sass/dist/',
        techs:'HTML, SASS, Javascript ES6+',
        type: 'RWD',
        alt:'Demo picture of Hanna photography website',
        des:'A responsive website of photography service.'
    },
    {
        id: 7,
        title:'Monthly budget',
        urlImg: 'images/js/04.jpg',
        urlSite:'https://hangnguyen81.github.io/monthly-budget-app/',
        techs:'HTML, CSS, Javascript ES6+',
        type: 'JS',
        alt:'Demo picture of Monthly Budget App',
        des:'A monthly budget app for personal use'
    },
    {
        id: 6,
        title:'Note keeping',
        urlImg: 'images/js/03.jpg',
        urlSite:'https://hangnguyen81.github.io/your-notes-keeping/',
        techs:'HTML, CSS, Javascript ES6+, LocalStorage',
        type: 'JS',
        alt:'Demo picture of Note keeping App',
        des:'Simple clone of Google Keep'
    },
    {
        id: 5,
        title:'Chrome extension',
        urlImg: 'images/js/02.jpg',
        urlSite:'https://github.com/hangnguyen81/chrome-extension',
        techs:'Javascript ES6+',
        type: 'JS',
        alt:'Demo picture of chrome-extension',
        des:'Two extensions for Chrome browser: a bookmark and personal dashboard'
    },
    {
        id: 3,
        title:'Photography Event',
        urlImg: 'images/rwd/03.jpg',
        urlSite:'https://hangnguyen81.github.io/photography-event/',
        techs:'HTML5, CSS flexbox, CSS grid',
        type: 'RWD',
        alt:'Demo picture of landing page ',
        des:'A responsive landing & marketing page of a photography event.'
    },
    {
        id: 2,
        title:'Hanna and flowers',
        urlImg: 'images/rwd/02.jpg',
        urlSite:'https://hangnguyen81.github.io/hanna-kukka/',
        techs:'HTML5, CSS flexbox, CSS grid',
        type: 'RWD',
        alt:'Demo picture of website - Hanna and flower',
        des:'A responsive website for an online flower shop.'
    },
    {
        id: 1,
        title:'Finland via my lens',
        urlImg: 'images/rwd/01.jpg',
        urlSite:'https://hangnguyen81.github.io/finland-through-my-lens/',
        techs:'HTML5, CSS, Javascript',
        type: 'RWD',
        alt:'Demo picture of webblog - Finland through my lens ',
        des:'A responsive personal webblog to express the impression of Finland through camera lens.'
    },
]

const myBtnContainer = document.getElementById('myBtnContainer')
const workGrid = document.getElementById('work-grid')
const showAll = document.getElementById('show-all')
const react = document.getElementById('react')
const javascript = document.getElementById('javascript')
const responsiveWebDesign = document.getElementById('responsive-web-design')
const fullstack = document.getElementById('fullstack');
const dataAnalysis = document.getElementById('data-analysis');

function renderProjects(type=''){   
    let projectHtml = ''
    let allProjectsHtml = '' 
    for (let project of projects){
        if (project.type === type){
            projectHtml +=`
                <div class = 'project'>
                    <img
                    class="project-image"
                    src=${project.urlImg}
                    alt=${project.alt}/>
                    <a 
                        class="project project-title"
                        href=${project.urlSite}
                        target="_blank">
                        <p 
                            class="project-title">
                            <span class="code">&lt;</span>
                            ${project.title}
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <p class="project-techs">${project.techs}</p>
                    <p class="project-des">${project.des}</p>
                </div>`
        }
        allProjectsHtml +=`
            <div class = 'project'>
                <img
                    class="project-image"
                    src=${project.urlImg}
                    alt=${project.alt}/>
                <a 
                    class="project project-title"
                    href=${project.urlSite}
                    target="_blank">
                    <p 
                        class="project-title">
                        <span class="code">&lt;</span>
                        ${project.title}
                        <span class="code">&#47;&gt;</span>
                    </p>
                </a>
                <p class="project-techs">${project.techs}</p>
                <p class="project-des">${project.des}</p>
            </div>` 
    }

    if (type !='')
        return projectHtml
    else
        return allProjectsHtml
}

showAll.addEventListener('click', function(){
    removeActiveClass()
    showAll.classList.add('active')
    workGrid.innerHTML  = renderProjects()
})

react.addEventListener('click', function(){
    removeActiveClass()
    react.classList.add('active')
    workGrid.innerHTML  = renderProjects('REACT')
})

javascript.addEventListener('click', function(){
    removeActiveClass()
    javascript.classList.add('active')
    workGrid.innerHTML  = renderProjects('JS')
})

responsiveWebDesign.addEventListener('click', function(){
    removeActiveClass()
    responsiveWebDesign.classList.add('active')
    workGrid.innerHTML  = renderProjects('RWD')
})

fullstack.addEventListener('click', function(){
    removeActiveClass();
    fullstack.classList.add('active');
    workGrid.innerHTML = renderProjects('FULLSTACK')
})

dataAnalysis.addEventListener('click', function(){
    removeActiveClass();
    dataAnalysis.classList.add('active');
    workGrid.innerHTML = renderProjects('DA')
})

function removeActiveClass(){
    for (let child of myBtnContainer.children){
        child.classList.remove('active')
    }

}

workGrid.innerHTML  = renderProjects()

//hamburger button and nave
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open')
    })
})

const techs = [
    {
        id: 3,
        title: "Javascript/TypeScript",
        category: "Programming Languages",
        info:"",
    },
    {
        id: 22,
        title: "C#/.NET",
        category: "Programming Languages",
        info:"",
    },
    {
        id: 1,
        title: "HTML",
        category: "Programming Languages",
        info:"",
    },
    {
        id: 2,
        title: "CSS/SASS",
        category: "Programming Languages",
        info:"",
    },
    {
        id: 4,
        title: "Python",
        category: "Programming Languages",
        info:"for data analysis",
    },
    {
        id: 5,
        title: "PHP",
        category: "Programming Languages",
        info:"out of practice"
    },
    {
        id: 20,
        title: "Angular",
        category: "Library | Framework",
        info:""
    },
    {
        id: 6,
        title: "ReactJs",
        category: "Library | Framework",
        info:""
    },
    {
        id: 7,
        title: "Angular Materials",
        category: "Library | Framework",
        info:""
    },
    {
        id: 8,
        title: "Bootstrap 5",
        category: "Library | Framework",
        info:""
    },
    {
        id: 18,
        title: "Node.js",
        category: "Library | Framework",
        info:""
    },
    {
        id: 19,
        title: "Express",
        category: "Library | Framework",
        info:""
    },
    {
        id: 21,
        title: "Test",
        category: "Library | Framework",
        info:"Jest, Cypress, REST Client"
    },
    {
        id: 9,
        title: "Relational database",
        category: "Databases",
        info:""
    },
    {
        id: 10,
        title: "Structured Query Language",
        category: "Databases",
        info:"SQL"
    },
    {
        id: 11,
        title: "MySql",
        category: "Databases",
        info:""
    },
    {
        id: 12,
        title: "IBM DB2 on Cloud",
        category: "Databases",
        info:""
    },
    {
        id: 20,
        title: "MongoDB",
        category: "Databases",
        info:""
    },
    {
        id: 13,
        title: "Visual Studio, VSCode",
        category: "Tools",
        info:""
    },
    {
        id: 14,
        title: "GitBash/GitHub",
        category: "Tools",
        info:""
    },
    {
        id: 15,
        title: "Jupyter Notebook",
        category: "Tools",
        info:""
    },
    {
        id: 16,
        title: "Photoshop",
        category: "Tools",
        info:""
    },
    {
        id: 19,
        title: "Netlify, Heroku",
        category: "Tools",
        info:""
    }
]

const techCategories = [...new Set(techs.map(item => item.category))]

function renderTechs(){   
    let techHtml = '';
    for (let item of techCategories){
        techHtml += `
            <div class="columns">
                <ul class="columns-title">
                    <li class="dark"> ${item}`

        const techsItems = techs.filter(tech =>tech.category === item)
        for (let techsItem of techsItems){
            techHtml +=`
                    <li>${techsItem.title} ${techsItem.info ===""? '': `(${techsItem.info})`}</li>
            `
        }
        
        techHtml += `              
                    </li>
                </ul>
            </div>
        `
    }
    return techHtml;
}
const techGrid = document.getElementById('tech-grid')
techGrid.innerHTML  = renderTechs()