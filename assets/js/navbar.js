// Javascript code for navigation bar from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
const burgerDropdown = document.querySelector(".dropdown"); 
const navBar = document.querySelector(".navigation");

function responsiveNav(){
    burgerDropdown.classList.add("disabled");
    navBar.classList.add("responsive")
}

function closeNav() {
     burgerDropdown.classList.remove("disabled");
     navBar.classList.remove("responsive")
}