// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================
// SMOOTH NAVIGATION
// =========================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});