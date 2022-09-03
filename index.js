// Incorporar Arrays

let opcionInvalida = (opcion) => opcion.toLowerCase() !== "si" && opcion.toLocaleLowerCase() !== "no";
let edadInvalida = (numero) => isNaN(Number(numero)) || !Number.isInteger(parseFloat(numero));
let promedio = (array) => {
    if (array && array.length){ // Validar que el array tenga items
        let total = array.reduce ((acumulador, numero) => acumulador + numero, 0);
        return total / array.length;
    }
    return 0;
};

let edades = [];



for (let i = 1; i < 5; i++){
    let nombre = prompt ("Ingrese su nombre");
    
    let edad = prompt ("Ingrese su edad");
    while (edadInvalida (edad)){
        alert("Edad errónea");
        edad = prompt ("Ingrese su edad");
    }
    edades.push (parseInt(edad));
    
    let sintomas = prompt ("¿Tuvo tos, fiebre o dolor de garganta? Ingrese si/no");
    while (opcionInvalida (sintomas)){
        alert("Usted ingresó una opción incorrecta")
        sintomas = prompt ("¿Tuvo tos, fiebre o dolor de garganta? Ingrese si/no");
    }
    
    if (sintomas.toLowerCase() === "si"){
        let mensaje = `Paciente #${i} ${nombre} de ${edad} años con probabilidad de COVID 19`;
        alert(mensaje);
    } else{
        let mensaje = `Paciente #${i} ${nombre} de ${edad} años sin síntomas`;
        console.log(mensaje);
    }
}

let promedioEdades = promedio(edades);
let mensaje = `El promedio de edades es de ${promedioEdades}`;
alert(mensaje);
