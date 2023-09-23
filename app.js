var menu = document.getElementById("menu");

var navbar = document.getElementById("header");


var toggleNavbar =() => {
    navbar.classList.toggle("active");
}
// Onscroll Remove Active Class

window.onscroll = () => {
    navbar.classList.remove("active");
}

menu.addEventListener('click', () => toggleNavbar());



