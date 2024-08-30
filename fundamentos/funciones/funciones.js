//anatomia de una funcion

//obtener el precio final con el porcentaje descuento aplicado a una prenda
//obtener valor y porcentaje de  descuento

function calcularDescuento() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const descuento = parseFloat(document.getElementById("descuento").value);

  // Validar que los valores sean números y no estén vacíos
  if (isNaN(precio) || isNaN(descuento)) {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese valores válidos.";
    return;
  }

  // Calcular el valor del descuento
  const valorDescuento = (precio * descuento) / 100;

  // Calcular el precio final con el descuento aplicado
  const precioFinal = precio - valorDescuento;

  // Mostrar los resultados
  const resultado = `
        Precio original: $${precio.toFixed(2)}<br>
        Porcentaje de descuento: ${descuento}%<br>
        Valor del descuento: $${valorDescuento.toFixed(2)}<br>
        Precio con descuento aplicado: $${precioFinal.toFixed(2)}
    `;

  document.getElementById("resultado").innerHTML = resultado;
}
