const navToggle = document.querySelector(".nav-toggle");
const navTarget = document.querySelector(".nav-target");

navToggle.addEventListener("click", () => {
    if (navToggle.classList.contains("change")) {
        navToggle.setAttribute("src", "images/icon-hamburger.svg")
    } else {
        navToggle.setAttribute("src", "images/icon-close-menu.svg")
    }
    navToggle.classList.toggle("change");
    navTarget.classList.toggle("nav-target");
});


const bookMark = document.querySelector("#bookmark");
const bookToggle = document.querySelector("#bookmark-toggle");
const bookmarkTriggers = document.querySelectorAll("[data-toggle=bookmark]");

bookmarkTriggers.forEach(bookmark => {
    bookmark.addEventListener("click", () => {
        if (bookToggle.textContent == "Bookmark") {
            bookToggle.textContent = "Bookmarked";
        } else {
            bookToggle.textContent = "Bookmark";
        }


    });
})


const supportTriggers = document.querySelectorAll("[data-toggle=modal-support]");
const supportModal = document.querySelector(".support");

supportTriggers.forEach(item => {
    item.addEventListener("click", () => {
        supportModal.classList.toggle("d-show");
    });
})


const pledgeModalTriggers = document.querySelectorAll("[data-toggle=modal-pledge]");
const pledgeModal = document.querySelector(".modal");

pledgeModalTriggers.forEach(pledge => {
    pledge.addEventListener("click", () => {
        pledgeModal.classList.toggle("d-show");
    });
})