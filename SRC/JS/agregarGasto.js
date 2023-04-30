// Función para añadir filas a la tabla de gastos
function agregarFila() {
  const nombre = document.getElementById("nombre_gasto").value;
  const monto = document.getElementById("monto_gasto").value;

  const tabla = document.getElementById("table2");
  const nuevaFila = tabla.insertRow(-1);

  const columnaNombre = nuevaFila.insertCell(0);
  columnaNombre.innerHTML = nombre;

  const columnaMonto = nuevaFila.insertCell(1);
  columnaMonto.innerHTML = monto;

  const columnaBoton = nuevaFila.insertCell(2);
  const boton = document.createElement("button");
  boton.classList.add("botonborrar", "vibrar");
  boton.innerHTML = "🗑️";
  boton.onclick = function () {
    tabla.deleteRow(nuevaFila.rowIndex);
    actualizarSaldo();
  };
  columnaBoton.appendChild(boton);

  actualizarSaldo();
}

// Función para crear un array con los objetos gasto y actualizar el saldo
function actualizarSaldo() {
  const tabla = document.getElementById("table2");
  const filas = tabla.getElementsByTagName("tr");
  const gastos = [];
  console.log(gastos)

  for (let i = 1; i < filas.length; i++) {
    const fila = filas[i];
    const nombre = fila.cells[0].innerText;
    const monto = Number(fila.cells[1].innerText);
    gastos.push({ nombre: nombre, monto: monto });
  }

  const totalGastos = gastos.reduce((acumulador, gasto) => acumulador + gasto.monto, 0);

  const presupuesto = Number(document.getElementById("presupuesto-actual").innerText.replace("$", ""));
  const saldo = presupuesto - totalGastos;

  document.getElementById("gastos-actuales").innerText = "$" + totalGastos.toLocaleString();
  document.getElementById("saldo-actual").innerText = "$" + saldo.toLocaleString();

  return gastos;
}
