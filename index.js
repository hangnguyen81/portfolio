// Display of projects
const projects = [
    {
        id: 1,
        title:'Finland through my lens',
        urlImg: 'images/rwd/01.jpg',
        urlSite:'https://hangnguyen81.github.io/finland-through-my-lens/',
        type: 'RWD',
        alt:'Demo picture of webblog - Finland through my lens ',
        des:'A responsive personal webblog to express the impression of Finland through camera lens. Technologies use: pure HTML5, CSS and javascript.'
    },
    {
        id: 2,
        title:'Hanna and flowers',
        urlImg: 'images/rwd/02.jpg',
        urlSite:'https://hangnguyen81.github.io/hanna-kukka/',
        type: 'RWD',
        alt:'Demo picture of website - Hanna and flower',
        des:'A responsive website for an online flower shop. Technologies use: HTML5, CSS flexbox and CSS grid.'
    },
    {
        id: 3,
        title:'Photography Event',
        urlImg: 'images/rwd/03.jpg',
        urlSite:'https://hangnguyen81.github.io/photography-event/',
        type: 'RWD',
        alt:'Demo picture of photography event promotion',
        des:'A responsive layout of event register page. Technologies use: pure HTML5, CSS and (little) javascript'
    },
    {
        id: 4,
        title:'Card game',
        urlImg: 'images/js/01.jpg',
        urlSite:'https://hangnguyen81.github.io/cards-game/',
        type: 'JS',
        alt:'Demo picture of card game',
        des:'A card game app fetching cards from APIs. Technologies use: Javascript ES6+ (promise, fetch, async/await)'
    },
    {
        id: 5,
        title:'Chrome extension',
        urlImg: 'images/js/02.jpg',
        urlSite:'https://github.com/hangnguyen81/chrome-extension',
        type: 'JS',
        alt:'Demo picture of chrome-extension',
        des:'This project contains two extensions for Chrome browser: a bookmark and personal dashboard extension.  Technologies use: Javascript ES6+ (promise, fetch, async/await)'
    },
    {
        id: 6,
        title:'Note keeping',
        urlImg: 'images/js/03.jpg',
        urlSite:'https://hangnguyen81.github.io/your-notes-keeping/',
        type: 'JS',
        alt:'Demo picture of Note keeping App',
        des:'Simple clone of Google Keep. Technologies use: HTML, CSS and Javascript ES6+'
    },
    {
        id: 7,
        title:'Monthly budget app',
        urlImg: 'images/js/04.jpg',
        urlSite:'https://hangnguyen81.github.io/monthly-budget-app/',
        type: 'JS',
        alt:'Demo picture of Monthly Budget App',
        des:'A monthly budget app for personal use. Technologies use: javascript ES6+, html and css'
    }
]

const myBtnContainer = document.getElementById('myBtnContainer')
const workGrid = document.getElementById('work-grid')
const showAll = document.getElementById('show-all')
const react = document.getElementById('react')
const javascript = document.getElementById('javascript')
const responsiveWebDesign = document.getElementById('responsive-web-design')

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

function removeActiveClass(){
    // clear all active class (if has) in every child of myBtnContainer
    for (let child of myBtnContainer.children){
        child.classList.remove('active')
    }

}

workGrid.innerHTML  = renderProjects()

//hamburger button and nave

const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () =>{
    // console.log('hamburger button click')
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open')
    })
})

