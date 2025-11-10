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

const btn = document.querySelector("#downloadBtn");

btn.addEventListener("click", ()=> {
    const link = document.createElement("a");
    link.href = "Arzoo-Resume.pdf";
    link.download = "Arzoo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
