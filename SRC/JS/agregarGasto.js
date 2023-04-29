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