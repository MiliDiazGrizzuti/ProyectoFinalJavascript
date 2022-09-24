// PROYECTO FINAL


//CLASES
class Persona {
    constructor (id, nombre, edad, sintomas){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sintomas = sintomas;
    }

    cumpleCondiciones (edadDesde, edadHasta, conSintomas) {
        return this.edad >= edadDesde && this.edad <= edadHasta && this.sintomas == conSintomas;
    }
}

//FUNCIONES
let opcionInvalida = (opcion) => opcion.toLowerCase() !== "si" && opcion.toLocaleLowerCase() !== "no";
let edadInvalida = (numero) => isNaN(Number(numero)) || !Number.isInteger(parseFloat(numero));
let promedio = (array) => {
    if (array && array.length){ // Validar que el array tenga items
        let total = array.reduce ((acumulador, numero) => acumulador + numero, 0);
        return total / array.length;
    }
    return 0;
};

let limpiarDatos = () => {
    let nombreInput = document.getElementById("nombre");
    let edadInput = document.getElementById("edad");
    let sintomasInput = document.getElementById("sintomas");
    nombreInput.value = null;
    edadInput.value = null;
    sintomasInput.value = null;
};

let procesarDatos = () => {
    let nombreInput = document.getElementById("nombre");
    let edadInput = document.getElementById("edad");
    let sintomasInput = document.getElementById("sintomas");
    let nombre = nombreInput.value;
    let edadValue = edadInput.value;
    let sintomas = sintomasInput.value;

    // Validar los datos ingresados
    if(edadInvalida(edadValue) || opcionInvalida(sintomas)) {
        mostrarMensaje("Datos erróneos", false);
        return;
    }

    // Agregarlo al array de Personas
    let edad = parseInt(edadValue);
    let conSintomas = sintomas.toLowerCase() === "si";
    let index = obtenerSiguienteIndice();
    let persona = new Persona (index, nombre, edad, conSintomas);
    guardarEnLocalStorage(persona);
    mostrarMensaje("Persona agregada", true);
    
    // Actualizar información
    let pInformacion = document.getElementById("pInformacion");
    let promedio = calcularPromedio();
    pInformacion.innerHTML = `<p>Cantidad de personas agregadas: ${index}. Edad promedio: ${promedio}</p>`;
    
    limpiarDatos();
};

let calcularPromedio = () => {
    let personas = obtenerPersonasDeLocalStorage();
    if(personas.length){
        let edades = personas.map (item => item.edad);
        return promedio(edades);    
    }
    return 0;
};

let filtrar = () => {
    let filtroMayoresAinput = document.getElementById("filtroMayoresA");
    let filtroMenoresAinput = document.getElementById("filtroMenoresA");
    let filtroSintomas = document.getElementById("filtroSintomas");
    let mayoresA = filtroMayoresAinput.value;
    let menoresA = filtroMenoresAinput.value;
    let sintomas = filtroSintomas.value;

    if(edadInvalida(mayoresA) || edadInvalida(menoresA) || opcionInvalida(sintomas)){
        mostrarMensaje("Filtros inválidos", false);
        return;
    }

    let edadMayoresA = parseInt(mayoresA);
    let edadMenoresA = parseInt(menoresA);
    let conSintomas = sintomas.toLowerCase() === "si";

    let pPersonasFiltradas = document.getElementById("pPersonasFiltradas");
    let personas = obtenerPersonasDeLocalStorage();
    let personasFiltradas = personas.filter(p => p.cumpleCondiciones(edadMayoresA, edadMenoresA, conSintomas));
    let innerHTML = 'Sin resultados';
    if(personasFiltradas.length){
        innerHTML = "Resultados:<br>" +
            personasFiltradas.map(p => p.nombre).join('<br>');
    }
    pPersonasFiltradas.innerHTML = innerHTML;
};

//EVENTOS
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", procesarDatos);
let btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrar);

let obtenerPersonasDeLocalStorage = () => {
    let personasItem = localStorage.getItem('personas');
    let personas = personasItem ? JSON.parse(personasItem) : [];
    return personas.map(item => new Persona(item.id, item.nombre, item.edad, item.sintomas));
}

let guardarEnLocalStorage = (persona) => {
    let personas = obtenerPersonasDeLocalStorage();
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
}

let obtenerSiguienteIndice = () => {
    let personas = obtenerPersonasDeLocalStorage();
    return personas.length + 1; 
}

let mostrarMensaje = (mensaje, exito) => {
    let linearGradient = exito ? '#75b133, #236417' : '#fa6e6e, #612e30';
    Toastify({
        text: mensaje,
        duration: 4000,
        gravity: "top", // `top` or `bottom`
        close: true,
        stopOnFocus: true,
        style: {
          background: `linear-gradient(to right, ${linearGradient})`,
        }
      }).showToast();
}