//ACTUALIZAR VALOR DE INGRESOS

const actualizarBtn = document.getElementById('botonactualizar');

actualizarBtn.addEventListener('click', function() {
  const ingresos = Number(document.getElementById('valoringresos').value);
  
  const presupuestoActual = document.getElementById('presupuesto-actual');
  
  presupuestoActual.textContent = `$${ingresos}`;
  actualizarSaldo()
});

//FUNCION SALDO
const saldo = document.getElementById('saldo-actual');

function actualizarSaldo(){
  const ingresos = Number(document.getElementById('valoringresos').value);
  saldo.textContent= `$${ingresos}`

}