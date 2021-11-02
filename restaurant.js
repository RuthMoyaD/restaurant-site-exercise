var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu-bar");
    enlaces = document.getElementById("links");

    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });

    btnMenuClose.addEventListener("click", function () {
        menuResponsive.classList.remove("active");
    });

    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });