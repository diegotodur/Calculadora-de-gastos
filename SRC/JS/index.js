console.log("Bienvenido/a! escribe <contacto> en caso de requerirlo.")
contacto = "github.com/itsmisce | linkedin.com/diegotorresduran | twitter.com/miscelanneo"

// Función para crear un array con los objetos gasto y actualizar el saldo
function actualizarSaldo() {
  const tabla = document.getElementById("table2");
  const filas = tabla.getElementsByTagName("tr");
  const gastos = [];

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

//Funcion que obtiene el monto de ingresos y lo copia en celda correspondiente de tabla2

const actualizarBtn = document.getElementById('botonactualizar');

actualizarBtn.addEventListener('click', function() {

  const ingresos = Number(document.getElementById('valoringresos').value);
  
  if (ingresos !==0 && ingresos !=="" ){
    const presupuestoActual = document.getElementById('presupuesto-actual');
  
    presupuestoActual.textContent = `$${ingresos}`;
    actualizarSaldo()
  } else {
    const sueldoerror = document.getElementById("valoringresos");
    sueldoerror.style.backgroundColor = '#ae2f126e'
    sueldoerror.placeholder= "Ingresa un monto"
    sueldoerror.style.animation = 'shake 0.8s'
    sueldoerror.style.border = '#ffffff'
    sueldoerror.style.color = '#ffffff'
    setTimeout(function() {
        sueldoerror.style.backgroundColor = '#eeecec';
        sueldoerror.placeholder= "$999.999"
        sueldoerror.style.animation = 'none';
        sueldoerror.style.border = '0.5px solid #ffffff'
        sueldoerror.style.color = '#6c757d'
      }, 2000);
  }
});


// Función para añadir filas a la tabla de gastos
const botonAgregar = document.getElementById('agregar_gasto');

botonAgregar.addEventListener('click', function() {
  const nombre = document.getElementById("nombre_gasto").value.trim();
  const monto = document.getElementById("monto_gasto").value;

  if (nombre !=="" && monto !=="" ) {
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
   
    //Limpia los input
    const eliminarNombre = document.getElementById("nombre_gasto");
    const eliminarMonto = document.getElementById("monto_gasto");

    eliminarNombre.value = "";
    eliminarMonto.value = "";

    actualizarSaldo();
  } 
    if (nombre === "") {
      const nombreerror = document.getElementById("nombre_gasto");
      nombreerror.style.backgroundColor = '#ae2f126e'
      nombreerror.placeholder= "Ingresa un nombre"
      nombreerror.style.animation = 'shake 0.8s'
      nombreerror.style.border = '#FF3333'
      nombreerror.style.color = '#ffffff'
      setTimeout(function() {
        nombreerror.style.backgroundColor = '#eeecec';
        nombreerror.placeholder= "Nombre"
        nombreerror.style.animation = 'none';
        nombreerror.style.border = '0.5px solid #ffffff'
        nombreerror.style.color = '#6c757d'
      }, 2000);
    }
    if (monto === ""){
      const montoerror = document.getElementById("monto_gasto");
      montoerror.style.backgroundColor = '#ae2f126e';
      montoerror.placeholder= "Ingresa un monto"
      montoerror.style.animation = 'shake 0.8s'
      montoerror.style.border = '#FF3333'
      montoerror.style.color = '#ffffff'
      setTimeout(function() {
        montoerror.style.backgroundColor = '#eeecec';
        montoerror.placeholder= "Monto"
        montoerror.style.animation = 'none';
        montoerror.style.border = '0.5px solid #ffffff'
        montoerror.style.color = '#6c757d'
      }, 2000);
    }
  
    
});

//Funcion que actua como validador de parametros numericos en inputs, bloquea la escritura de letras y simbolos
jQuery(document).ready(function() {
  jQuery('.validarNumero').keypress(function(tecla) {
     if (tecla.charCode < 48 || tecla.charCode > 57) {
        return false;
     }
  });
});

//Funcion para restear valores, elimina todas las filas de tabla2 y valores numericos de tabla1
const resetButton = document.getElementById("reset");
gastos = [];


resetButton.addEventListener('click', function() {
  const table2 = document.getElementById("table2");
  const gastosActuales = document.getElementById("gastos-actuales");
  const saldoActual = document.getElementById("saldo-actual");
  const presupuestoActual = document.getElementById("presupuesto-actual");
  const sueldo = document.getElementById("valoringresos");

  while (table2.rows.length > 1) {
    table2.deleteRow(table2.rows.length - 1);
  }

  gastosActuales.innerHTML = "$0";
  saldoActual.innerHTML = "$0";
  presupuestoActual.innerHTML = "$0";
  sueldo.innerHTML = "$0";


})

//Funcion que exporta ambas tablas a un xlsx
const excelButton = document.getElementById("descargardata");

descargardata.addEventListener('click', function() {
  const wb = XLSX.utils.book_new();
	
	const ws1 = XLSX.utils.table_to_sheet(document.getElementById('table1'));
	XLSX.utils.book_append_sheet(wb, ws1, 'Presupuesto');
	
	const ws2 = XLSX.utils.table_to_sheet(document.getElementById('table2'));
	XLSX.utils.book_append_sheet(wb, ws2, 'Lista de Gastos');
	
	XLSX.writeFile(wb, 'calculadora.xlsx');
})

//Funcion para borrar una fila en especifica de tabla2
const botonesBorrar = document.querySelectorAll('.botonborrar');

botonesBorrar.forEach(boton => {
  boton.addEventListener('click', () => {

    const fila = boton.parentNode.parentNode;

    fila.remove();
  });
});