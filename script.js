function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

let initialSrc = "/assests/logo.svg";
let scrollSrc = "/assests/logo-color-06.svg";

let search = "/assests/search.svg";
let search_color = "/assests/search-color.svg";

let burger= "/assests/solar_hamburger-menu-outline.svg"
let burger_color= "/assests/hambruger-color.svg"
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("logo").src = scrollSrc;
        document.getElementById("chiba").style.color = "#441d17";
        document.getElementById("nav-bar").style.padding = "10px 250px 0px 250px";
        document.getElementById("search").src = search_color;
        document.getElementById("hamburger").src = burger_color;

    }else if((document.body.scrollTop < 700 || document.documentElement.scrollTop < 700)&&(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)){
        document.getElementById("nav-bar").style.padding = "10px 250px 0px 250px";
    }
    else {
        document.getElementById("logo").src = initialSrc;
        document.getElementById("chiba").style.color = "white";
        document.getElementById("nav-bar").style.padding = "30px 250px 0px 250px";
        document.getElementById("search").src = search;
        document.getElementById("hamburger").src = burger;
    }
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("nav-bar").style.display = "none";

}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("nav-bar").style.display = "block";
}