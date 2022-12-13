//Ejercicio 8:
//Dado el siguiente array [“manzana”,”banana”,”fresa”]
//1.	Agrega 3 frutas más al arreglo 
//2.	Elimina el valor banana del arreglo

let array = ["manzana", "banana", "fresa"];

array.push("mango", "ciruela", "piña")

alert("agregados: " + array)

let frutas = array.filter((frutas) => frutas !=="banana");
alert(frutas)
//array.splice(1,1)
//alert("Eliminado: " + array)
