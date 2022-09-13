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

//VARIABLES GLOBALES
let personas = [];

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
        alert("Datos erróneos");
        return;
    }

    // Agregarlo al array de Personas
    let edad = parseInt(edadValue);
    let conSintomas = sintomas.toLowerCase() === "si";
    let index = personas.length + 1;
    let persona = new Persona (index, nombre, edad, conSintomas);
    personas.push(persona);
    alert("Persona agregada");
    
    // Actualizar información
    let pInformacion = document.getElementById("pInformacion");
    let promedio = calcularPromedio();
    pInformacion.innerHTML = `<p>Cantidad de personas agregadas: ${index}. Edad promedio: ${promedio}</p>`;
    
    limpiarDatos();
};

let calcularPromedio = () => {
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
        alert("Filtros inválidos");
        return;
    }

    let edadMayoresA = parseInt(mayoresA);
    let edadMenoresA = parseInt(menoresA);
    let conSintomas = sintomas.toLowerCase() === "si";

    let pPersonasFiltradas = document.getElementById("pPersonasFiltradas");
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

//INGRESO DE DATOS
/*for (let i = 1; i < 5; i++){
    let nombre = prompt ("Ingrese su nombre");
    
    let edad = prompt ("Ingrese su edad");
    while (edadInvalida (edad)){
        alert("Edad errónea");
        edad = prompt ("Ingrese su edad");
    }
    
    let sintomas = prompt ("¿Tuvo tos, fiebre o dolor de garganta? Ingrese si/no");
    while (opcionInvalida (sintomas)){
        alert("Usted ingresó una opción incorrecta")
        sintomas = prompt ("¿Tuvo tos, fiebre o dolor de garganta? Ingrese si/no");
    }

    let conSintomas = sintomas.toLowerCase() === "si";
    let persona = new Persona (i, nombre, parseInt(edad), conSintomas);
    personas.push(persona);
}

// Calcular promedio de edades
let edades = personas.map (item => item.edad);
let promedioEdades = promedio(edades);
let mensaje = `El promedio de edades es de ${promedioEdades}`;
alert(mensaje);

// Filtrar pacientes de riesgo
let pacientesDeRiesgo = personas.filter (item => item.personaDeRiesgo());
let nombresPacientesDeRiesgo = pacientesDeRiesgo.map(item => item.nombre).join(", ");
alert(`${nombresPacientesDeRiesgo} son pacientes de riesgo`);
*/