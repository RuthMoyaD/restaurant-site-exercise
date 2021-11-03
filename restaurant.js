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

    //Validation

    var form = document.getElementById("form");

    function validate(e){
        var inputName = document.getElementById("name").value,
            inputEmail = document.getElementById("email").value,
            inputComments =document.getElementById("comments").value;

        if(inputName.value == 0 || inputEmail.value == 0 || inputComments.value == 0) {
            e.preventDefault();
            alert("Empty field");
        }else{
            e.preventDefault();
            alert("We have successfully received your information");
            inputName.value = "";
            inputEmail.value = "";
            inputComments.value = "";
        }
    }

    form.addEventListener("submit", validate);