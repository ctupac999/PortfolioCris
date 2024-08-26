

// script.js

// Variable para rastrear el estado de los estilos
let estiloOriginal = true;

document.getElementById("cambiarEstilosBtn").addEventListener("click", function() {
    // Obtenemos el elemento :root
    var root = document.querySelector(':root');
    var boton = document.getElementById("cambiarEstilosBtn");

    if (estiloOriginal) {
        // Cambiamos los valores de las variables CSS a la versión cambiada
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--primary-color', '#171718');
        // Añadimos la clase para cambiar la imagen de fondo del botón
        boton.classList.add('activado');
    } else {
        // Restauramos los valores originales de las variables CSS
        root.style.setProperty('--secondary-color', '#171718');
        root.style.setProperty('--primary-color', '#ffffff');
         // Removemos la clase para restaurar la imagen original del botón
         boton.classList.remove('activado');
    }

    // Alternamos el estado
    estiloOriginal = !estiloOriginal;
});
