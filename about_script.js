function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("nav-bar").style.display = "none";

}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("nav-bar").style.display = "block";
}