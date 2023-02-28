"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    console.log(e.target.dataset.link);
    scrollIntoView(link);
});

// Handle click on 'contact me' button on home
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
    scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    console.log(homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
    const scrolls = document.querySelector(selector);
    scrolls.scrollIntoView({ behavior: "smooth" });
}

// Show 'arrow up' button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

// Handle click on the "Arrow up" button
arrowUp.addEventListener("click", (e) => {
    scrollIntoView("#home");
});

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter =
        e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add("anim-out");
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anim-out");
    }, 300);
});
