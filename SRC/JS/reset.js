
const resetearValores = document.getElementById('reset');

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('valoringresos').value = 0;
    document.getElementById('gastos-actuales').value = 0;
    document.getElementById('saldo-actual').value = 0;

});

