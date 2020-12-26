// Javascript code for navigation bar from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

function responsiveNav(){
    var x = document.getElementById("navbar");
    if(x.className === "navigation"){
        x.className += " responsive";
    }
    else{x.className = "navigation"}
}