const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", reset);

function reset() {
    const table2 = document.getElementById("table2");
    const gastosActuales = document.getElementById("gastos-actuales");
    const saldoActual = document.getElementById("saldo-actual");
    const presupuestoActual = document.getElementById("presupuesto-actual");
  
    while (table2.rows.length > 1) {
      table2.deleteRow(table2.rows.length - 1);
    }
    gastos = [];
  
    gastosActuales.value = "";
    saldoActual.innerHTML = "";
    presupuestoActual.innerHTML = "";
  }
  