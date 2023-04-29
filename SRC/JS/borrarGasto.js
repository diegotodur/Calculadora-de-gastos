const botonesBorrar = document.querySelectorAll('.botonborrar');

botonesBorrar.forEach(boton => {
  boton.addEventListener('click', () => {

    const fila = boton.parentNode.parentNode;

    fila.remove();
  });
});
