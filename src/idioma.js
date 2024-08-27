// Seleccionar los elementos por su ID
const saludo2 = document.getElementById('segundaletra');
const saludo3 = document.getElementById('terceraletra');
const saludo4 = document.getElementById('cuartaletra');
const saludo5 = document.getElementById('quintaletra');
const saludo6 = document.getElementById('sextaletra');
const textobio = document.getElementById('textobio');
const idiomas = document.getElementById('idiomas');


// Almacenar los elementos en un array
const saludos = [saludo2, saludo3, saludo4, saludo5, saludo6, textobio, idiomas];

// Almacenar los textos originales y alternativos
const textosOriginales = ['o', 'l', 'a', '!', 'Soy', 'I discovered my passion for programming when I was studying Industrial Engineering,Curious and in constant search for detail and innovation. The impossible just takes a little longer. My main responsibilities include developing web applications using the latest technologies, as well as creating and deploying DBs. I am in charge of the entire software development life cycle, from analysis and design to implementation, testing and maintenance of the systems. I am characterized by my ability to solve problems, continuous learning and customer orientation. If you want to contact me, I invite you to do so through my linkedIn :)','ES'];
const textosAlternativos = ['i', 'i', '!', '!', "I'm", "Descubrí mi pasión por la programación cuando estudiaba Ingeniería industrial, Curioso y en constante busqueda del detalle y la innovación. Mis principales responsabilidades incluyen el desarrollo de aplicaciones web utilizando últimas tecnologías, como también la creación y puesta de DB. Me encargo de todo el ciclo de vida del desarrollo de software, desde el análisis y diseño hasta la implementación, pruebas y mantenimiento de los sistemas. Me caracterizo por mi capacidad de resolución de problemas, aprendizaje continuo y orientación al cliente. Si quieres contactarme te invito a hacerlo hacerlo a través de mi linkedIn :)", 'EN' ];

// Función para alternar los textos de los elementos
function alternarTextos() {
    // Iterar sobre los elementos
    for (let i = 0; i < saludos.length; i++) {
        if (saludos[i].textContent === textosOriginales[i]) {
            saludos[i].textContent = textosAlternativos[i];
        } else {
            saludos[i].textContent = textosOriginales[i];
        }
    }
}

// Agregar un evento 'click' al botón
const boton = document.getElementById('idiomas');
boton.addEventListener('click', alternarTextos);