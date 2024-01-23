window.onload = function(){


const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const resultadoInput = document.querySelector('#resultado');

const sumaBtn = document.querySelector('#suma');
sumaBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 + num2;
  resultadoInput.value = resultado;
});

const restaBtn = document.querySelector('#resta');
restaBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 - num2;
  resultadoInput.value = resultado;
});

const multiplicacionBtn = document.querySelector('#multiplicar');
multiplicacionBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 * num2;
  resultadoInput.value = resultado;
});

const divisionBtn = document.querySelector('#dividir');
divisionBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 / num2;
  resultadoInput.value = resultado;
});

const potenciaBtn = document.querySelector('#potencia');
potenciaBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = Math.pow(num1, num2);
  resultadoInput.value = resultado;
});

const raizBtn = document.querySelector('#raiz');
raizBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const resultado = Math.sqrt(num1);
  resultadoInput.value = resultado;
});

const absBtn = document.querySelector('#absoluto');
absBtn.addEventListener('click', function() {
  const num1 = parseFloat(num1Input.value);
  const resultado = Math.abs(num1);
  resultadoInput.value = resultado;
});

const randomBtn = document.querySelector('#random');
randomBtn.addEventListener('click', function() {
  const resultado = Math.floor(Math.random() * 100);
  resultadoInput.value = resultado;
});

const roundBtn = document.querySelector('#round');
roundBtn.addEventListener('click', function() {
  const resultado = parseFloat(resultadoInput.value);
  resultadoInput.value = Math.round(resultado);
});

const floorBtn = document.querySelector('#floor');
floorBtn.addEventListener('click', function() {
  const resultado = parseFloat(resultadoInput.value);
  resultadoInput.value = Math.floor(resultado);
});

const ceilBtn = document.querySelector('#ceil');
ceilBtn.addEventListener('click', function() {
  const resultado = parseFloat(resultadoInput.value);
  resultadoInput.value = Math.ceil(resultado);
});



}