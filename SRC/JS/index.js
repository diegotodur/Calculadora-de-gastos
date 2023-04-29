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

//FUNCION AGREGAR GASTOS
const agregar_gasto = document.getElementById('agregar_gasto');
const nombre_gasto = document.getElementById('nombre_gasto').value;
const monto_gasto = Number(document.getElementById('monto_gasto').value);

agregar_gasto.addEventListener('click', function() {
  console.log(monto_gasto)
  console.log(nombre_gasto)
  agregarGasto()
});

function agregarGasto (){
   
}

//ARRAY GASTOS

let gastos = [
  {nombre_gasto:"asd" , monto_gasto:0}
]