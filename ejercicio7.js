//Ejercicio 7:
//Crea una función que calcule la media del siguiente array, utilizando una estructura repetitiva como for, while, foreach.
//array = [20,35,18,7,9,60]

function media(){
    let array = [20,35,18,7,9,60];
    let suma = 0;

    //foreach

array.forEach(elemento => {
    suma += elemento;
})

 let media = suma/array.length;

 alert ("La media es: " + media.toFixed(2));
}
