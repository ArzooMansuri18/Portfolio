function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    navbar.style.display = "block";
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    navbar.style.display = "none";
}