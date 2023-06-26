let valorTotal = prompt ("Ingrese el costo del producto")
let cantidadDeCuotas = prompt ("Ingrese en cuantas cuotas quiere realizar el pago")
let resultado = calcularCuotas(valorTotal, cantidadDeCuotas)

function calcularCuotas(valor, cuotas) {
    if (cuotas <= 0) {
      return "El producto tiene que ser pagado en al menos una cuota"
    }
    
    let valorCuota = valor / cuotas

    console.log("El costo total es: $" + valorTotal)
    console.log("Cantidad de cuotas: " + cantidadDeCuotas)
    console.log("Pagás cada cuota: $" + valorCuota)

}

  