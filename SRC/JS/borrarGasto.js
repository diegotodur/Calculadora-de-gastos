//Funcion para borrar una fila en especifica de tabla2
const botonesBorrar = document.querySelectorAll('.botonborrar');

botonesBorrar.forEach(boton => {
  boton.addEventListener('click', () => {

    const fila = boton.parentNode.parentNode;

    fila.remove();
  });
});
