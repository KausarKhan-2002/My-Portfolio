let navMenu = document.querySelector('.nav__menu')
let navOpen = document.querySelector('.nav__open')
let navClose = document.querySelector('.nav__close')

// show nav-menu
navOpen.addEventListener('click', () => {
    navMenu.classList.add('show__menu')
})

// hide nav-menu
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show__menu')
})

// ======================== REMOVE MENU MOBILE ==============================
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ======================== ADD BLUR TO HEADER ==============================
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll or greater then 50 viewport height, add the scroll-header class

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// ======================== EMAIL JS ==============================
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID | templateID | #form | publicKey
    emailjs.sendForm('service_g63nqak', 'template_kgb389q', '#contact-form', 'sJgf0aUVBH01xCdFH')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // REMOVE MESSSAGE AFTER FIVE SECONDS
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // CLEAR INPUT FIELDS
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })

}
contactForm.addEventListener('submit', sendEmail)

// ======================== SHOW SCROLL UP ==============================
const scrollUp = () => {
    // it will provide the viewport height in pixel When we will scroll
    // console.log('ScrollY: ' + this.scrollY)
    const scrollUp = document.getElementById('scrollup')
    // When the scroll is higher than 350 viewport height, then bottom will add 3.5rem
    // otherwise bottom will be -50%
    this.scrollY > 346 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ======================== SCROLL SECTIONS ACTIVE LINK ==============================
// All sections that is having id will come inside sections
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    // On every scroll it will clear the console
    // console.clear()

    // every sections that is having id will unpack one by one and current will point current Element
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
