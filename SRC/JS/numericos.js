//Funcion que actua como validador de parametros numericos en inputs, bloquea la escritura de letras y simbolos
  jQuery(document).ready(function() {
    jQuery('.validarNumero').keypress(function(tecla) {
       if (tecla.charCode < 48 || tecla.charCode > 57) {
          return false;
       }
    });
 });
