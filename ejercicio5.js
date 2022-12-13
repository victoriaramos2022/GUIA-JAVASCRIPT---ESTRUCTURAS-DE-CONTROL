//Ejercicio 5:
//Mostrar la suma total de los números dado el siguiente arreglo.
//array = [8,7,6,12,25,30]

let array = [8,7,6,12,25,30] 
let total = array.reduce((a, b) => a + b, 0);

alert("El total es: " + total);

