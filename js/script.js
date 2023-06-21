// Obtendo elementos do DOM
const primeiroNumeroInput = document.getElementById('numero');
const segundoNumeroInput = document.getElementById('segundoNumero');
const calcularBtn = document.getElementById('calcular-btn');
const resultadoSpan = document.querySelector('.resultado span');

// Função para somar dois números
function somarNumeros() {
  const primeiroNumero = parseFloat(primeiroNumeroInput.value);
  const segundoNumero = parseFloat(segundoNumeroInput.value);
  
  const resultado = primeiroNumero + segundoNumero;
  
  resultadoSpan.textContent = resultado;
}

// Adicionando um listener de evento ao botão calcular
calcularBtn.addEventListener('click', somarNumeros);

