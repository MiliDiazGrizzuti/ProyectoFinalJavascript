// Const EDAD = 15 (Esto sería una variable que no va a cambiar nunca)

// Todo lo que no tenga un valor real, es decir, que no sea un número va entre "" (string)

// Camel Case = el segundo nombre de la variable va en mayúscula, ejemplo: numeroUno

// console.log() nos ayuda a mostrar en la consola que es lo que se ejecuta (con el coderunner instalado)

// prompt = le solicita información al usuario

// alert = muestra la información al usuario

// Baltiks = gracias a esto podemos colocar la variable en el texto. Ejemplo:
// let saludo = "Hola"
// let nombre = "Andres"
// let mensaje = `${saludo} ${nombre}, gracias por visitarnos ♥´;

for (let i = 1; i < 10; i++){
    let nombre = prompt ("Ingrese su nombre");
    let sintomas = "";
    while (sintomas.toLowerCase() !== "si" && sintomas.toLocaleLowerCase() !== "no"){
        sintomas = prompt ("¿Tuvo tos, fiebre o dolor de garganta? Ingrese si/no");
        if(sintomas.toLowerCase() !== "si" && sintomas.toLocaleLowerCase() !== "no"){
            alert("Usted ingresó una opción incorrecta");
        }
    }
    
    if (sintomas.toLowerCase() === "si"){
        let mensaje = `Paciente #${i} ${nombre} con probabilidad de COVID 19`;
        alert(mensaje);
    } else{
        let mensaje = `Paciente #${i} ${nombre} sin síntomas`;
        console.log(mensaje);
    }
}

alert("Terminamos");