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
        var inputName = document.getElementById("name"),
            inputEmail = document.getElementById("email"),
            inputComments =document.getElementById("comments");
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");
            
        if(inputName.value === "" || inputEmail.value === "" || inputComments.value === "") {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide"); 
           }, 2000);  
        }else{
            e.preventDefault();
               alertSuccess.classList.remove("hide");
               alertSuccess.classList.add("show");

               setTimeout(function() {
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide"); 
               }, 2000);               
               inputName.value = "";
               inputEmail.value = "";
               inputComments.value = "";
    }
}

window.addEventListener("scroll", function (){
    var  scroll = document.documentElement.scrollTop,
         fullSize = document.documentElement.offsetHeight,
         sizeVP = document.documentElement.clientHeight;


    if (scroll > 100) {
         btnTop.classList.add("show");
    }else{
         btnTop.classList.remove("show");
    }

    
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal"); 
    }else{
         btnTop.classList.remove("scrollFinal");
    }
});

    form.addEventListener("submit", validate);

    var btnTop = document.getElementById("btn-top");
    var logo = document.getElementById("logo");

    btnTop.addEventListener("click", function () {
        window.scrollTo(0,0);
   });

   logo.addEventListener("click", function () {
    window.scrollTo(0,0);
});