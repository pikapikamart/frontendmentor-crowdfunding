const navbarToggle = document.querySelector("#navbarToggle");
const burger = document.querySelector("#navbarToggle img");
const navModal = document.querySelector("header nav");
const bookmark = document.querySelector("#bookmark");
const body = document.querySelector("body");
const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const closeForm = document.querySelector("[data-toggle=close-form]");
const successModal = document.querySelector(".success");
const closeSuccessModal = document.querySelector("[data-toggle=close-success]");
const modalTriggers = document.querySelectorAll("[data-toggle=modal-triger]");
const successTriggers = document.querySelectorAll("[data-toggle=success-modal]");


navbarToggle.addEventListener("click", () =>{
    if (burger.getAttribute("src") == "images/icon-hamburger.svg"){
        burger.setAttribute("src", "images/icon-close-menu.svg");
    } else {
        burger.setAttribute("src", "images/icon-hamburger.svg");
    }
    navModal.classList.toggle("showNav");
    body.classList.toggle("no-scroll");
})


bookmark.addEventListener("click", ()=>{
    const span = document.querySelector("#bookmark span");

    bookmark.classList.toggle("pop");
    if (span.textContent == "Bookmark") {
        span.textContent = "Bookmarked";
    } else {
        span.textContent = "Bookmark";
    }
})

modalTriggers.forEach(trigger =>{
    trigger.addEventListener("click", ()=>{
        modal.classList.toggle("show");
        body.classList.toggle("no-scroll");
    })
})


closeForm.addEventListener("click", ()=>{
    modal.classList.toggle("show");
    body.classList.toggle("no-scroll");
})


successTriggers.forEach(trigger => {
    trigger.addEventListener("click", ()=> {
        successModal.classList.toggle("show");
        body.classList.add("no-scroll");
    })
})


closeSuccessModal.addEventListener("click", () =>{
    successModal.classList.toggle("show");
})

form.addEventListener("submit", event => event.preventDefault());