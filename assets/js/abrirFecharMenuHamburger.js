document.addEventListener("DOMContentLoaded", function() {
    var popupMenu = document.getElementById("popupMenu");
    var navbarToggler = document.querySelector(".navbar-toggler");
    var closeBtn = document.querySelector(".close-btn");

    navbarToggler.addEventListener("click", function() {
        popupMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function() {
        popupMenu.classList.remove("open");
    });
});
