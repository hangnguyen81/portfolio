
const projects = [
    {
        id: 1,
        title:'Finland via my lens',
        urlImg: 'images/rwd/01.jpg',
        urlSite:'https://hangnguyen81.github.io/finland-through-my-lens/',
        type: 'RWD',
        alt:'Demo picture of webblog - Finland through my lens ',
        des:'A responsive personal webblog to express the impression of Finland through camera lens. Techs use: HTML5, CSS and Javascript.'
    },
    {
        id: 2,
        title:'Hanna and flowers',
        urlImg: 'images/rwd/02.jpg',
        urlSite:'https://hangnguyen81.github.io/hanna-kukka/',
        type: 'RWD',
        alt:'Demo picture of website - Hanna and flower',
        des:'A responsive website for an online flower shop. Techs use: HTML5, CSS flexbox and CSS grid.'
    },
    {
        id: 3,
        title:'Photography Event',
        urlImg: 'images/rwd/03.jpg',
        urlSite:'https://hangnguyen81.github.io/photography-event/',
        type: 'RWD',
        alt:'Demo picture of landing page ',
        des:'A responsive landing & marketing page of a photography event. Techs use: HTML5, CSS flexbox and CSS grid.'
    },
    {
        id: 4,
        title:'Card game',
        urlImg: 'images/js/01.jpg',
        urlSite:'https://hangnguyen81.github.io/cards-game/',
        type: 'JS',
        alt:'Demo picture of card game',
        des:'A card game app fetching cards from APIs. Techs use: Javascript ES6+ (promise, fetch, async/await)'
    },
    {
        id: 5,
        title:'Chrome extension',
        urlImg: 'images/js/02.jpg',
        urlSite:'https://github.com/hangnguyen81/chrome-extension',
        type: 'JS',
        alt:'Demo picture of chrome-extension',
        des:'Two extensions for Chrome browser: a bookmark and personal dashboard.  Techs use: Javascript ES6+ (promise, fetch, async/await)'
    },
    {
        id: 6,
        title:'Note keeping',
        urlImg: 'images/js/03.jpg',
        urlSite:'https://hangnguyen81.github.io/your-notes-keeping/',
        type: 'JS',
        alt:'Demo picture of Note keeping App',
        des:'Simple clone of Google Keep. Techs use: HTML, CSS and Javascript ES6+, LocalStorage'
    },
    {
        id: 7,
        title:'Monthly budget',
        urlImg: 'images/js/04.jpg',
        urlSite:'https://hangnguyen81.github.io/monthly-budget-app/',
        type: 'JS',
        alt:'Demo picture of Monthly Budget App',
        des:'A monthly budget app for personal use. Techs use: javascript ES6+, html and css'
    },
    {
        id: 8,
        title:'Hanna Photography',
        urlImg: 'images/rwd/04.jpg',
        urlSite:'https://hangnguyen81.github.io/photography-sass/dist/',
        type: 'RWD',
        alt:'Demo picture of Hanna photography website',
        des:'A responsive website of photography service. Techs use: SASS, javascript ES6+'
    },
    {
        id: 9,
        title:'Cocktail world',
        urlImg: 'images/react/01.jpg',
        urlSite:'https://cocktail-world-hn.netlify.app/',
        type: 'REACT',
        alt:'Demo picture of Cocktail world App',
        des:'An app allows users to search info about cocktails. Data fetch from thecocktaildb.com. Techs use: ReactJS (Hooks, Context, Router), promise, async/await, SASS'
    },
    {
        id: 11,
        title:'User Generator',
        urlImg: 'images/react/03.jpg',
        urlSite:'https://random-user-generator-hn.netlify.app/',
        type: 'REACT',
        alt:'Demo picture of User Generator App',
        des:'An app shows information of random person. Data fetch from https://randomuser.me/. Techs use: ReactJS, React Hooks, promise, async/await, CSS'
    },
    {
        id: 12,
        title:'Shopping Cart',
        urlImg: 'images/react/04.jpg',
        urlSite:'https://food-ordering-hn.netlify.app/',
        type: 'REACT',
        alt:'Demo picture of shopping cart App',
        des:'Simple demo of shopping cart. Techs use: ReactJS (Hooks, Context, Router), SASS and Local Storage'
    },
    {
        id: 13,
        title:'Offering Tours',
        urlImg: 'images/react/05.jpg',
        urlSite:'https://tours-offered-by-hn.netlify.app/',
        type: 'REACT',
        alt:'Demo picture of Tour App',
        des:'Techs use: ReactJS and Bootstrap5'
    },
    {
        id: 10,
        title:'Phonebook',
        urlImg: 'images/fullstack/01.jpg',
        urlSite:'https://vast-atoll-41721.herokuapp.com/',
        type: 'FULLSTACK',
        alt:'Demo picture of Phone book App',
        des:'Simple phonebook allows users to manage (create/update/delete) their contacts. Techs use: MERN stack (MongoDB, Express, React and Node.js)'
    },
    {
        id: 14,
        title:'Housing price',
        urlImg: 'images/da/01.jpg',
        urlSite:'https://www.linkedin.com/pulse/reference-source-house-buyers-capital-region-finland-hang-nguyen/',
        type: 'DA',
        alt:'Demo picture of Housing price project',
        des:'A reference source for house buyers in Finland by collecting and analyzing spatial data. Techs use: Pandas, matplotlib, BeautifulSoup, pgeocode, folium'
    },
    {
        id: 15,
        title:'Required IT skills',
        urlImg: 'images/da/02.jpg',
        urlSite:'https://www.linkedin.com/in/hang-nguyen-a619b1105/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABqqg6kBDJDEzadNxSJyv1XY9f3k9xTREwE,1635456131314)/',
        type: 'DA',
        alt:'Demo picture of Identify IT skills project',
        des:'A report of trends on merging tech-stacks based on an analysis of data collecting from StackOverflow survey, GitHub Jobs. Techs use: Pandas, matplotlib, IBM Cognos dashboard'
    }
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
        id: 3,
        title: "Javascript",
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
        id: 6,
        title: "ReactJs",
        category: "Library | Framework",
        info:"Hooks, Context, Router, Styled Components"
    },
    {
        id: 7,
        title: "Redux",
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
        title: "Visual Studio Code",
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