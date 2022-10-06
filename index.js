const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);
const displayValorAnterior1 = document.getElementById('valor-anterior');
const displayValorActual1 = document.getElementById('valor-actual');
const botonesNumeros1 = document.querySelectorAll('.numero');
const botonesOperadores1 = document.querySelectorAll('.operador');

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

