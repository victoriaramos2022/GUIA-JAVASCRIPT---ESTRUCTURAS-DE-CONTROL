//Ejercicio 9:
//Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente.

let num= Number (prompt("Ingrese su calificacion: "))

if (num <= 3){
    alert("Insuficiente")
}else if (num <= 6){
    alert("Suficiente")
}else if (num <= 9){
    alert("Bien")
}else if(num == 10){
    alert("Excelente")
}else{
    alert("Ingrese una calificacion del 1-10")
}