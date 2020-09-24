//alert("Welcome Stranger");

function redirect(onClick){
    window.open("https://www.linkedin.com/in/christian-aguirre-71059b191/")
}

function redirect2(onClick){
    window.open("https://www.instagram.com/itecharg.shop/")
}

//NAV ANIMATION
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})