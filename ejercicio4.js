//Ejercicio 4: Mostrar la estación del año ingresado por el usuario, utilizando la estructura if-else if-else.

let estacion = Number (prompt("Elija una estacion del año \n 1) Invierno \n 2)Otoño \n 3)Verano \n 4)Primavera"))

if (estacion == 1){
    alert("Invierno")
}else if (estacion ==2){
    alert("Otoño")
}else if (estacion == 3){
    alert("Verano")
}else if(estacion == 4){
    alert("Primavera")
}else{
    alert("Ingrese un numero del 1-4")
}