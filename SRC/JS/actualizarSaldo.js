//Funcion que obtiene el monto de ingresos y lo copia en celda correspondiente de tabla2

const actualizarBtn = document.getElementById('botonactualizar');

actualizarBtn.addEventListener('click', function() {
  const ingresos = Number(document.getElementById('valoringresos').value);
  
  const presupuestoActual = document.getElementById('presupuesto-actual');
  
  presupuestoActual.textContent = `$${ingresos}`;
  actualizarSaldo()
});