let estiloOriginal = true;

document.getElementById("cambiarEstilosBtn").addEventListener("click", function() {
    var root = document.querySelector(':root');
    var boton = document.getElementById("cambiarEstilosBtn");

    if (estiloOriginal) {
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--primary-color', '#171718');
        boton.classList.add('activado');
    } else {
        root.style.setProperty('--secondary-color', '#171718');
        root.style.setProperty('--primary-color', '#ffffff');
         boton.classList.remove('activado');
    }

    estiloOriginal = !estiloOriginal;
});
