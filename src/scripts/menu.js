document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('.hamburger').classList.toggle('active');
    document.getElementById('header').classList.toggle('menu-open');
});

var prevScrollpos = window.screenY;
var headerDiv = document.querySelector("header");

window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos < 45) {
        headerDiv.classList.remove('collapsed');
    }
    else {
        headerDiv.classList.add('collapsed');
    }
}