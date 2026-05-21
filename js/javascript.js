const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("show");
    });
});


const accordionBtn = document.getElementById("accordionBtn");
const accordionContent = document.getElementById("accordionContent");

accordionBtn.addEventListener("click", function () {
    if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
        accordionBtn.textContent = "▶ Detalhes das Habilidades";
    } else {
        accordionContent.style.display = "block";
        accordionBtn.textContent = "▼ Detalhes das Habilidades";
    }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});