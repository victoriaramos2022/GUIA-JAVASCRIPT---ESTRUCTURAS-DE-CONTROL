//Ejercicio 3: En un municipio se desea cobrar el paso de vehículos por su nuevo Puente, con los siguientes datos:
//Vehículo	Impuesto
//Vehículo Particular	$0.75
//Autobús	$1.50
//Microbús	$1.25
//Moto taxi	$0.50
//Moto	$0.30
//Otros	$3.00
//Mostrar el impuesto a pagar en base al tipo de vehículo que se ingrese por medio de una variable, utilizando la estructura switch.

let vehiculo = Number (prompt("Ingrese el numero segun su tipo de vehiculo,  \n 1) Vehículo Particular \n 2)Autobús \n 3)Microbús \n 4)Moto taxi \n 5)Moto \n 6) Otros "))
switch (vehiculo){
    case 1:
        tarifa = 0.75
        break
    case 2:
         tarifa = 1.50
        break
    case 3:
        arifa = 1.25
        break
    case 4:
        tarifa = 0.50
        break
    case 5:
        tarifa = 0.30
        break
    case 6:
        tarifa = 3.00
        break
}
alert ("Total a pagar: $" + tarifa)