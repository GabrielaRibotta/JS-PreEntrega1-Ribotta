// INFORMACIÓN USUARIO

const nombreUsuario = prompt("Ingresá tu nombre:");
let nacimiento = parseInt(prompt("Ingresá tu año de nacimiento:"));
let edad = 2022 - nacimiento;

while (edad < 13){
    alert("Se necesita permiso de un adulto para utilizar este servicio.");
    nacimiento = parseInt(prompt("Ingresá tu fecha de nacimiento:"));
    edad = 2022 - nacimiento;
}

console.log("¡Hola, " + nombreUsuario + "!");

// CANTIDAD DE FALTANTES: ARGENTINA

let obtenidas = parseInt(prompt("Ingrese las figuritas ya obtenidas:"));
const completo = 20;
const faltantes = completo - obtenidas;

if(faltantes === 0){
    console.log("¡Felicidades, completaste la sección de Argentina!");
} else{
    console.log("¡Te faltan " + faltantes + " para completar la sección de Argentina!");
}

// CALCULADOR DE SOBRES

const precioLista = 130;
let IVA = (precioLista * 21) / 100;
let precio = precioLista + IVA;
let sobres = parseInt(prompt("Ingresá la cantidad de sobres que querés adquirir:"));

function calcularPrecio (sobres, precio){
    return resultado = sobres * precio;
}

console.log("Tu compra va a costar $" + calcularPrecio(sobres, precio));