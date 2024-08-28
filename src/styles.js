let estiloOriginal = true;

document.getElementById("cambiarEstilosBtn").addEventListener("click", function() {
    var root = document.querySelector(':root');
    var boton = document.getElementById("cambiarEstilosBtn");

    if (estiloOriginal) {
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--primary-color', '#171718');
        root.style.setProperty('--quinary-color', '#252525');

        boton.classList.add('activado');
    } else {
        root.style.setProperty('--secondary-color', '#171718');
        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--quinary-color', '#eeeeee');
         boton.classList.remove('activado');
    }

    estiloOriginal = !estiloOriginal;
});
