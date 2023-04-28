let saldo = 0;

// Función para actualizar la tabla de presupuesto
function actualizarPresupuesto() {
  document.getElementById("presupuestoValor").textContent = "$" + presupuesto;
  document.getElementById("gastosValor").textContent = "$" + gastos.reduce((a, b) => a + b, 0);
  document.getElementById("saldosValor").textContent = "$" + saldo;
}

// Evento para capturar el presupuesto ingresado por el usuario
document.getElementById("submitPresupuesto").addEventListener("click", (event) => {
  event.preventDefault();
  presupuesto = parseInt(document.getElementById("presupuesto").value);
  saldo = presupuesto;
  actualizarPresupuesto();
});

// Evento para capturar los gastos ingresados por el usuario
document.getElementById("submitGasto").addEventListener("click", (event) => {
  event.preventDefault();
  let nombreGasto = document.getElementById("nombreGasto").value;
  let cantidadGasto = parseInt(document.getElementById("cantidadGasto").value);
  gastos.push(cantidadGasto);
  saldo -= cantidadGasto;
  actualizarPresupuesto();
  // Actualizar la tabla de gastos
  let table = document.querySelector("table:last-of-type");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.textContent = nombreGasto;
  cell2.textContent = "$" + cantidadGasto;
});

// Ejemplo de bucle for para iterar sobre un arreglo
let gastosFijos = ["renta", "agua", "luz", "gas"];
for (let i = 0; i < gastosFijos.length; i++) {
  // Ejemplo de declaración de variables de ES6
  let valorGastoFijo = 500;
  gastos.push(valorGastoFijo);
  saldo -= valorGastoFijo;
  // Actualizar la tabla de gastos
  let table = document.querySelector("table:last-of-type");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.textContent = gastosFijos[i];
  cell2.textContent = "$" + valorGastoFijo;
  actualizarPresupuesto();
}

// Ejemplo de función de flecha y uso de método de matrices
let gastosExtras = [200, 300, 400];
gastosExtras.forEach((gastoExtra) => {
  gastos.push(gastoExtra);
  saldo -= gastoExtra;
  // Actualizar la tabla de gastos
  let table = document.querySelector("table:last-of-type");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.textContent = "Gasto extra";
  cell2.textContent = "$" + gastoExtra;
  actualizarPresupuesto();
});

// Ejemplo de objeto y bucle if
let objetivos = {
    "comida": 2000,
    "entretenimiento": 1000,
    "ropa": 500,
    "viajes": 3000
  };
  for (let objetivo in objetivos) {
    if (objetivos.hasOwnProperty(objetivo)) {
      let cantidadObjetivo = objetivos[objetivo];
      gastos.push(cantidadObjetivo);
      saldo -= cantidadObjetivo;
      // Actualizar la tabla de gastos
      let table = document.querySelector("table:last-of-type");
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.textContent = objetivo;
      cell2.textContent = "$" + cantidadObjetivo;
      actualizarPresupuesto();
    }
  }
  
  // Función para realizar una operación aritmética
  function realizarOperacion(a, b, operacion) {
    switch (operacion) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return NaN;
    }
  }
  
  // Ejemplo de uso de la función para realizar una operación aritmética
  let resultadoOperacion = realizarOperacion(10, 5, "+");
  console.log(resultadoOperacion); // 15
  
  // Ejemplo de declaración de arreglo de objetos
  let compras = [
    { producto: "manzanas", precio: 50 },
    { producto: "naranjas", precio: 30 },
    { producto: "plátanos", precio: 20 }
  ];
  
  // Ejemplo de uso de método de matrices y declaración de funciones
  let totalCompra = compras.reduce((a, b) => a + b.precio, 0);
  let calcularDescuento = (total, descuento) => total - (total * descuento) / 100;
  let totalConDescuento = calcularDescuento(totalCompra, 10);
  console.log(totalConDescuento); // 81
  
  // Ejemplo de uso de objeto y declaración de funciones
  let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
  persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
  
  const presupuestoInput = document.getElementById('presupuestoInput');
const nombreGastoInput = document.getElementById('nombreGastoInput');
const cantidadGastoInput = document.getElementById('cantidadGastoInput');
const agregarGastoBtn = document.getElementById('agregarGastoBtn');
const tablaResumen = document.getElementById('tablaResumen');
let presupuesto = 0;
let gastos = [];

presupuestoInput.addEventListener('input', () => {
  presupuesto = parseFloat(presupuestoInput.value) || 0;
  actualizarTablaResumen();
});

agregarGastoBtn.addEventListener('click', () => {
  const nombre = nombreGastoInput.value.trim();
  const cantidad = parseFloat(cantidadGastoInput.value) || 0;
  if (nombre && cantidad) {
    gastos.push({ nombre, cantidad });
    nombreGastoInput.value = '';
    cantidadGastoInput.value = '';
    actualizarTablaResumen();
  }
});

function actualizarTablaResumen() {
  let totalGastos = 0;
  gastos.forEach(gasto => {
    totalGastos += gasto.cantidad;
  });
  const saldo = presupuesto - totalGastos;
  tablaResumen.rows[1].cells[0].textContent = `$${presupuesto.toFixed(2)}`;
  tablaResumen.rows[1].cells[1].textContent = `$${totalGastos.toFixed(2)}`;
  tablaResumen.rows[1].cells[2].textContent = `$${saldo.toFixed(2)}`;
  const tbody = tablaResumen.querySelector('tbody');
  tbody.innerHTML = '';
  gastos.forEach((gasto, index) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = gasto.nombre;
    row.insertCell().textContent = `$${gasto.cantidad.toFixed(2)}`;
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => {
      gastos.splice(index, 1);
      actualizarTablaResumen();
    });
    row.insertCell().appendChild(eliminarBtn);
  });
}

actualizarTablaResumen();
