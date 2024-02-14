// --------------------------------------------------\
// INSTRUCTION

// day-color  <- class is added in every these classes

// .nav__logo,
// .nav__link,
// .ri-moon-clear-fill,
// .home__subtitle,
// .home__education,
// .section__subtitle,
// .section__title,
// .skills__item,
// .services__card,
// .services__title,
// .contact__input::placeholder,
// .footer__title,
// .footer__education
// --------------------------------------------------/

let headerDynamicBg = document.querySelector('.header')
let bodyEffect = document.querySelectorAll('.body-effect')
let containerEffect = document.querySelectorAll('.container-effect')
let dayColor = document.querySelectorAll('.day-color')
let modeBehaviour = document.querySelector('.ri-moon-clear-fill')
let servicesCard = document.querySelectorAll('.services__card')
let contactInput = document.querySelectorAll('.contact__input')
let scrollUpBg = document.querySelector('#scrollup')
let navLogo = document.querySelector('.nav__logo')

// Set form background for day mode
const dynamicFormBg = () => {
    contactInput.forEach(input => {
        input.classList.toggle('dynamic-contact-input')
    })
}

// Set services card background for day mode
const dynamicServicesCardBg = () => {
    servicesCard.forEach(card => {
        card.classList.toggle('dynamic-services-card')
    })
    dynamicFormBg()
}

// Set all the color for day mode
const dynamicColor = () => {
    dayColor.forEach(color => {
        color.classList.toggle('sun-color')
    })
    dynamicServicesCardBg()
}

// Set container background for day mode
const handleContainerEffect = () => {
    containerEffect.forEach(effect => {
        effect.classList.toggle('container-effect-backgroud')
    })
    dynamicColor()
}

// set body background for day mode
const handleBodyEffect = () => {
    bodyEffect.forEach(effect => {
        effect.classList.toggle('body-effect-background')
    })
    handleContainerEffect()
}

// Set header, navMenu for day-mode
const dynamicHeaderNavMenuBg = () => {
    headerDynamicBg.classList.toggle('header-bg-color')
    navMenu.classList.toggle('nav-bg-color')
    scrollUpBg.classList.toggle('scrollup-bg-color')
    navLogo.classList.toggle('title-color')
    handleBodyEffect()
}

// set moon and sun icon 
const dayNightMode = (evt) => {
    if (evt.target.classList.contains('ri-moon-clear-fill')) {
        evt.target.classList.add('ri-sun-fill')
        evt.target.classList.remove('ri-moon-clear-fill')
        evt.target.setAttribute('title','Click to night mode')
    }
    else {
        evt.target.classList.add('ri-moon-clear-fill')
        evt.target.classList.remove('ri-sun-fill')
        evt.target.setAttribute('title','Click to day mode')
    }
    dynamicHeaderNavMenuBg()
}

modeBehaviour.addEventListener('click', dayNightMode)