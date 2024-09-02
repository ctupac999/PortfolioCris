const saludo2 = document.getElementById('segundaletra');
const saludo3 = document.getElementById('terceraletra');
const saludo4 = document.getElementById('cuartaletra');
const saludo5 = document.getElementById('quintaletra');
const saludo6 = document.getElementById('sextaletra');
const textobio1 = document.getElementById('textobio1');
const textobio2 = document.getElementById('textobio2');
const textobio3 = document.getElementById('textobio3');
const idiomas = document.getElementById('idiomas');
const portadaTitulo = document.getElementById('portadaTitulo');
const tituloBiografia = document.getElementById('tituloBiografia');
const tituloProyectos = document.getElementById('tituloProyectos');
const textoProyecto1 = document.getElementById('textoProyecto1');
const buttonRepositorio1 = document.getElementById('buttonRepositorio1');
const buttoonPaginaWEb1 = document.getElementById('buttoonPaginaWEb1');
const buttonPrototipo1 = document.getElementById('buttonPrototipo1');
const tituloHerramientas = document.getElementById('tituloHerramientas');
const textoProyecto2 = document.getElementById('textoProyecto2');
const buttonRepositorio2 = document.getElementById('buttonRepositorio2');
const textoProyecto3 = document.getElementById('textoProyecto3');
const buttonRepositorio3 = document.getElementById('buttonRepositorio3');
const buttoonPaginaWEb3 = document.getElementById('buttoonPaginaWEb3');




const saludos = [saludo2, saludo3, saludo4, saludo5, saludo6, textobio1, textobio2, textobio3, idiomas, portadaTitulo, tituloBiografia, tituloProyectos, textoProyecto1, buttonRepositorio1, buttoonPaginaWEb1, buttonPrototipo1, tituloHerramientas, textoProyecto2, buttonRepositorio2, textoProyecto3, buttonRepositorio3, buttoonPaginaWEb3];

const textosOriginales = [
    'o', 
    'l', 
    'a', 
    '!', 
    'Soy', 
    'I discovered my passion for programming when I was studying Industrial Engineering. Curious and in constant search for detail and innovation.',
    'My main responsibilities include developing web applications using the latest technologies, as well as creating and deploying DBs. I am in charge of the entire software development life cycle, from analysis and design to implementation, testing and maintenance of the systems.',
    'I am characterized by my ability to solve problems, continuous learning and customer orientation. If you want to contact me, I invite you to do so through my linkedIn',
    'ES',
    'Programmer and web designer',
    'Biography',
    'Relevant projects',
    'This is a framework that interacts with a DB (in this case a .json to simulate it). This interface provides us with a list of data depending on the filter used, a graph and the indicators. Everything about this same DB. You can interact on the page and test it, in addition to checking the code on github through the following links!',
    'Repository',    
    'Web Page',
    'Prototype',
    'Tools',
    'This is a project to create a Rest Api that interacts with a DB in the NoSQL cloud (in this case Mongodb Atlas). This repository contains everything you need to create your own server so that you can perform all CRUD operations with a real database and in the cloud. You can check the code on github via the links below!',
    'Repository',
    'This is a project to create a graphical interface accompanied by a Rest API that interacts with a DB in the NoSQL cloud (in this case Mongodb Atlas). The project consists of obtaining graphic and statistical results from a DB of an external client. You can check the code on github through the following links!',
    'Repository',
    'Web Page',

];
const textosAlternativos = [
    'i', 
    'i', 
    '!', 
    '!', 
    "I'm", 
    'Descubrí mi pasión por la programación cuando estudiaba Ingeniería industrial, Curioso y en constante busqueda del detalle y la innovación.',
    'Mis principales responsabilidades incluyen el desarrollo de aplicaciones web utilizando últimas tecnologías, como también la creación y puesta de DB. Me encargo de todo el ciclo de vida del desarrollo de software, desde el análisis y diseño hasta la implementación, pruebas y mantenimiento de los sistemas.',
    'Me caracterizo por mi capacidad de resolución de problemas, aprendizaje continuo y orientación al cliente. Si quieres contactarme te invito a hacerlo a través de mi linkedIn',
    'EN',
    'Programador y diseñador web',
    'Briografía',
    'Proyectos relevantes',
    'Este es un framework que interactúa con una DB (en este caso un .json para simularlo).Esta interfaz nos proporcinona una la lista de datos dependiendo el filtro utilizado, un gráfico y los indicadores. Todo sobre esta misma DB. Puedes interactuar en la página y probarla, además de checkear el código en github a través de los siguientes enlaces!',
    'Repositorio',    
    'Página Web',
    'Prototipo',
    'Herramientas',
    'Este es proyecto de creación de una Api Rest que interactúa con una DB en la nube NoSQL (en este caso Mongodb Atlas). Este repositorio contiene todo lo que necesitas para crear tu propio servidor para que puedas realizar todas las operaciones CRUD con una base de datos real y en la nube. ¡Puedes verificar el código en github a través de los siguientes enlaces!',
    'Repositorio',
    'Este es proyecto de creación de una interfaz gráfica acompañada de una Api Rest que interactúa con una DB en la nube NoSQL(en este caso Mongodb Atlas). El proyecto consiste en la obtención de resultados gráficos y estadísticos de una DB de un cliente externo. Puedes checkear el código en github a través de los siguientes enlaces!',
    'Repositorio',
    'Página Web',

];

function alternarTextos() {
    for (let i = 0; i < saludos.length; i++) {
        if (saludos[i].textContent === textosOriginales[i]) {
            saludos[i].textContent = textosAlternativos[i];
        } else {
            saludos[i].textContent = textosOriginales[i];
        }
    }
}

const boton = document.getElementById('idiomas');
boton.addEventListener('click', alternarTextos);