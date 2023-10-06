/* NAV BAR FUNCTION */
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* Adicionando SHADOW no NAV quando Rolar a barra */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/* EFEITO DE DIGITAR no FEATURED */
let typingEffect = new Typed(".typedText", {
    strings : ["Developer", "Designer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

/* EFEITO ANIMAÇÃO DE REVEAL DO SCROLL */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* HOME */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* PROJECT BOX */
sr.reveal('.project-box',{interval: 200})

/* TITULOS */
sr.reveal('.top-header',{})

/* ANIMAÇÃO DE REVEAL ESQUERDA */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ABOUT INFO E CONTACT INFO */
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* ANIMAÇÃO DE REVEAL DIREITA */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ABOUT SKILLS E FORM */
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const ScrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
