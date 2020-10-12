//alert("Welcome Stranger");

function redirect(onClick){
    window.open("https://www.linkedin.com/in/christian-aguirre-71059b191/")
}

function redirect2(onClick){
    window.open("https://www.instagram.com/itecharg.shop/")
}

function redirectNav(onClick){
    window.open("https://github.com/chrissagg")
}

//NAV ANIMATION
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

/*
const hamburguer = document.getElementById('hamburguer');
const navUL = document.getElementById('nav-ul');

hamburguer.addEventListener('click', () => {
    navUL.classList.toogle('show');
});
*/