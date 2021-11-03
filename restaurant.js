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

    var container = document.querySelector(".slider"),
    btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById("btn-right");

    btnRight.addEventListener("click", function (){
        container.scrollLeft += container.offsetWidth;
    });

    btnLeft.addEventListener("click", function (){
        container.scrollLeft -= container.offsetWidth;
    });