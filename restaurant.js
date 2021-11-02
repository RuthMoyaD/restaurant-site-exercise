var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");

    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });