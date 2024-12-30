/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')


/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('Login'),
    loginButton = document.getElementById('Login-button'),
    loginClose = document.getElementById('Login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}

/*=============== HOME SWIPER ===============*/
var homeswiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clicable: true,
    },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater then 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
var newswiper = new Swiper(".new_swiper", {
    spaceBetween: 16,
    centerslides: true,
    slidesPerView: "auto",
    Loop: 'true',
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUper() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUper)


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ========= À revoir après ======*/
const accordionItem = document.querySelectorAll('.questions_item')

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions_header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions_content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } 
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style_switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle("open");
})

//HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
    if(document.querySelector(".style_switcher").classList.contains("open")) {
        document.querySelector(".style_switcher").classList.remove("open");
    }
})

// THEME COLORS
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");
    themeColorsContainer.addEventListener("click", ({ target }) => {
        if(target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    })
    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if(document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if(localStorage.getItem("color") !== null) {
        setColors();
    }
    else{
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");

    }
}

themeColors();

