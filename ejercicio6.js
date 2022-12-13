//Ejercicio 6:
//Una empresa se dedica a la venta de impresoras, cada impresora tiene el precio de $70.00.
//Crea una función que pida 2 parámetros, la cantidad de impresoras a vender y la forma de pago. 
//En base a la forma de pago se va aplicar los siguientes descuentos:
//Forma de pago	Descuento
//Efectivo	10%
//Tarjeta de Crédito 	5%
//Vale	15%

//Se debe mostrar:
//•	Cantidad de impresoras.
//•	Forma de pago y el descuento que se va aplicar.
//•	Total a pagar.
let cantidad = Number (prompt("¿Cuantas impresoras desea comprar?")) 
let fpago = Number (prompt("¿Cual sera su forma de pago?,  \n 1) Efectivo \n 2)Trajeta de Credito \n 3)Vale"))
switch (fpago){
    case 1:
        descuento = cantidad * 70 * 0.10
        total = cantidad * 70 - descuento
        alert ("Cantidad de impresoras: " + cantidad)
        alert ("Forma de pago es en Efectivo se aplicara el 10% de descuento")
        alert ("Total a pagar es: $" + total)
        break
    case 2:
        descuento = cantidad * 70 * 0.05
        total = cantidad * 70 - descuento
        alert ("Cantidad de impresoras: " + cantidad)
        alert ("Forma de pago es Tarjeta de Crédito se aplicara el 5% de descuento")
        alert ("Total a pagar es: $" + total)
        break
    case 3:
        descuento = cantidad * 70 * 0.15
        total = cantidad * 70 - descuento
        alert ("Cantidad de impresoras: " + cantidad)
        alert ("Forma de pago es en Vale se aplicara el 15% de descuento")
        alert ("Total a pagar es: $" + total)
        break
}
