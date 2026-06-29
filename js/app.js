const botones = document.querySelectorAll(".abrirPDF");
const iframe = document.getElementById("iframePDF");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        iframe.src = this.getAttribute("data-pdf");
    });
});