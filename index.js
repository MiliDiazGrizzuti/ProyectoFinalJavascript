// Simulador

let opcionInvalida = (opcion) => opcion.toLowerCase() !== "si" && opcion.toLocaleLowerCase() !== "no";
let edadInvalida = (numero) => isNaN(Number(numero)) || !Number.isInteger(parseFloat(numero));
// lo tuve que googlear :)
let edadesAcumuladas = 0;

for (let i = 1; i < 5; i++){
    let nombre = prompt ("Ingrese su nombre");
    
    let edad = prompt ("Ingrese su edad");
    while (edadInvalida (edad)){
        alert("Edad errónea");
        edad = prompt ("Ingrese su edad");
    }
    edadesAcumuladas = edadesAcumuladas + parseInt(edad);
    
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

let promedio = edadesAcumuladas / 4;
let mensaje = `El promedio de edades es de ${promedio}`;
alert(mensaje);
