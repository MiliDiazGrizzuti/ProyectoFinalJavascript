// PROYECTO FINAL


//CLASES
class Persona {
    constructor (id, nombre, edad, sintomas){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sintomas = sintomas;
    }

    personaDeRiesgo () {
        return this.sintomas && this.edad >= 50;
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


//VARIABLES GLOBALES
let personas = [];


//INGRESO DE DATOS
for (let i = 1; i < 5; i++){
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