//Funcion que exporta ambas tablas a un xlsx
function table2excel() {
	const wb = XLSX.utils.book_new();
	
	const ws1 = XLSX.utils.table_to_sheet(document.getElementById('table1'));
	XLSX.utils.book_append_sheet(wb, ws1, 'Presupuesto');
	
	const ws2 = XLSX.utils.table_to_sheet(document.getElementById('table2'));
	XLSX.utils.book_append_sheet(wb, ws2, 'Lista de Gastos');
	
	XLSX.writeFile(wb, 'calculadora.xlsx');
  }
  